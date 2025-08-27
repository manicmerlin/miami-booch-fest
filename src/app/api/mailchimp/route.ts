import mailchimp from '@mailchimp/mailchimp_marketing'

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: Request) {
  try {
    const { email, type, firstName = '', lastName = '', source = '', ...extraData } = await request.json()
    
    // Validate required fields
    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Determine which audience to add to (using same audience for now)
    const listId = process.env.MAILCHIMP_ATTENDEE_LIST_ID
    
    if (!listId) {
      return Response.json({ error: 'Mailchimp list ID not configured' }, { status: 500 })
    }

    // Prepare the subscriber data with enhanced tagging
    const subscriberData = {
      email_address: email,
      status: 'subscribed' as const,
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        ...(source && { SOURCE: source }),
        ...(type === 'vendor' && extraData.companyName && { COMPANY: extraData.companyName }),
        ...(type === 'vendor' && extraData.phone && { PHONE: extraData.phone }),
        ...(extraData.website && { WEBSITE: extraData.website }),
      },
      tags: [
        type === 'vendor' ? 'vendor-application' : 'festival-attendee',
        source || 'website', 
        'miami-kombucha-fest-2025',
        `signup-${new Date().toISOString().split('T')[0]}` // Date tag
      ].filter(Boolean)
    }

    // Add subscriber to Mailchimp
    const response = await mailchimp.lists.addListMember(listId, subscriberData)
    
    console.log('Mailchimp subscription successful:', {
      email,
      type,
      source,
      id: response.id
    })

    return Response.json({ 
      success: true, 
      id: response.id,
      message: 'Successfully subscribed to newsletter!'
    })

  } catch (error: any) {
    console.error('Mailchimp API error:', error)
    
    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return Response.json({ 
        success: true, 
        message: 'You are already subscribed!' 
      })
    }
    
    return Response.json({ 
      error: 'Failed to subscribe. Please try again.',
      details: error.response?.body?.detail || error.message
    }, { status: 400 })
  }
}
