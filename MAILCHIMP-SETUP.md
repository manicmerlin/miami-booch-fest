# 📧 Mailchimp Integration Setup Guide

## 🚀 Step-by-Step Mailchimp Setup

### Step 1: Create Your Mailchimp Account
1. Go to [mailchimp.com](https://mailchimp.com)
2. Sign up for the free plan (up to 500 contacts)
3. Verify your email and complete setup

### Step 2: Create Your Audiences
Create two separate audiences for better segmentation:

#### Audience 1: Festival Attendees
- **Audience Name**: "Miami Kombucha Festival - Attendees"
- **Description**: "People interested in attending the festival"
- **Tags**: attendee, festival, general

#### Audience 2: Potential Vendors
- **Audience Name**: "Miami Kombucha Festival - Vendors"  
- **Description**: "Kombucha businesses interested in vending"
- **Tags**: vendor, business, application

### Step 3: Get Your API Credentials
1. Go to **Account** → **Extras** → **API keys**
2. Click **Create A Key**
3. Copy your API key (starts with something like "abc123def-us1")
4. Note your server prefix (the part after the dash, like "us1")

### Step 4: Get Your Audience IDs
1. Go to **Audience** → **Manage Audience** → **Settings**
2. Click **Audience name and defaults**
3. Find the **Audience ID** (looks like "a1b2c3d4e5")
4. Repeat for both audiences

---

## 🔧 Integration Options

### Option A: Direct API Integration (Recommended)

Install the Mailchimp SDK:
```bash
npm install @mailchimp/mailchimp_marketing
```

Create environment variables in `.env.local`:
```bash
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_ATTENDEE_LIST_ID=your-attendee-list-id
MAILCHIMP_VENDOR_LIST_ID=your-vendor-list-id
```

Create API route `src/app/api/mailchimp/route.ts`:
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: Request) {
  try {
    const { email, type, firstName = '', lastName = '', source = '' } = await request.json()
    
    const listId = type === 'vendor' 
      ? process.env.MAILCHIMP_VENDOR_LIST_ID 
      : process.env.MAILCHIMP_ATTENDEE_LIST_ID
    
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        SOURCE: source,
      },
      tags: [type, source, 'miami-kombucha-fest']
    })
    
    return Response.json({ success: true, id: response.id })
  } catch (error) {
    console.error('Mailchimp error:', error)
    return Response.json({ error: 'Failed to subscribe' }, { status: 400 })
  }
}
```

Update your form components to use the API:
```typescript
// In EmailSignup.tsx and other components
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/mailchimp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        type: 'attendee', // or 'vendor'
        source: 'homepage-signup'
      })
    })
    
    if (response.ok) {
      setIsSubmitted(true)
      setEmail('')
    } else {
      console.error('Subscription failed')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Option B: Embedded Mailchimp Forms

1. **Create forms in Mailchimp:**
   - Go to **Audience** → **Signup forms** → **Embedded forms**
   - Customize the form design
   - Copy the generated HTML code

2. **Integrate into your components:**
   ```typescript
   // Replace your current forms with Mailchimp embedded forms
   <div dangerouslySetInnerHTML={{ __html: mailchimpFormHTML }} />
   ```

### Option C: Zapier Integration (No Code)

1. **Set up Formspree** (as currently configured)
2. **Create Zapier account** at [zapier.com](https://zapier.com)
3. **Create Zap:**
   - Trigger: New Formspree submission
   - Action: Add subscriber to Mailchimp
4. **Map fields:**
   - Email → Email Address
   - Type → Tags
   - Source → Custom Fields

---

## 📊 Mailchimp Features to Use

### 1. Automation Sequences

**Welcome Series for Attendees:**
```
Email 1 (Immediate): Welcome to the Kombucha Community
Email 2 (3 days): Meet Our Local Vendors
Email 3 (1 week): The Health Benefits of Kombucha
Email 4 (2 weeks): Festival Planning Updates
```

**Vendor Application Follow-up:**
```
Email 1 (Immediate): Application Received
Email 2 (1 week): Review Process Timeline
Email 3 (2 weeks): Vendor Preparation Tips
```

### 2. Segmentation

Create segments based on:
- **Signup source** (homepage, footer, popup)
- **Engagement level** (opened emails, clicked links)
- **Location** (Miami, Broward, Palm Beach)
- **Interests** (vendor vs attendee)

### 3. Campaigns

**Pre-Festival Campaigns:**
- Monthly vendor spotlights
- Festival planning updates
- Health and wellness tips
- Local kombucha education

**Launch Campaigns:**
- Date announcement
- Vendor lineup reveal
- Special activities
- Logistics information

---

## 🎨 Mailchimp Template Customization

### Brand Colors:
- **Primary Olive**: #556B2F
- **Accent Orange**: #E6762B
- **Warm Yellow**: #F6C244
- **Neutral Sand**: #F7F2E7

### Email Template Elements:
```html
<!-- Header with festival branding -->
<div style="background-color: #556B2F; padding: 20px; text-align: center;">
  <h1 style="color: white; font-family: Georgia, serif; letter-spacing: 0.1em;">
    MIAMI KOMBUCHA FESTIVAL
  </h1>
</div>

<!-- Content with warm colors -->
<div style="background-color: #F7F2E7; padding: 30px;">
  <p style="font-family: Verdana, sans-serif; line-height: 1.6; color: #2a3318;">
    Your email content here...
  </p>
</div>

<!-- Call-to-action button -->
<a href="#" style="background-color: #E6762B; color: white; padding: 12px 24px; 
   text-decoration: none; border-radius: 8px; font-family: Georgia, serif;">
  Learn More
</a>
```

---

## 📈 Analytics & Tracking

### Key Metrics to Monitor:
- **Open rates** (target: 25-30%)
- **Click-through rates** (target: 3-5%)
- **List growth rate** (target: 10% monthly)
- **Unsubscribe rate** (keep under 2%)

### Mailchimp Reports:
- **Campaign reports** → Email performance
- **Audience insights** → Subscriber behavior
- **Growth reports** → List building progress
- **E-commerce reports** → If selling tickets/merch

---

## 🛠️ Advanced Features

### Custom Fields to Add:
- **Location** (Miami, Broward, Palm Beach, Other)
- **Business Type** (Kombucha Brewery, Health Store, Individual)
- **Experience Level** (Beginner, Intermediate, Expert)
- **Interests** (Brewing, Health, Business, Community)

### Tags to Use:
- **Source**: homepage, footer, popup, vendor-form
- **Type**: attendee, vendor, press, sponsor
- **Engagement**: highly-engaged, moderately-engaged, low-engagement
- **Status**: new, returning, vip

### A/B Testing:
- **Subject lines** (emoji vs no emoji)
- **Send times** (morning vs evening)
- **Content format** (text vs image-heavy)
- **Call-to-action** button colors and text

---

## 🚀 Quick Implementation Checklist

- [ ] Create Mailchimp account
- [ ] Set up two audiences (attendees + vendors)
- [ ] Get API credentials and audience IDs
- [ ] Choose integration method (API recommended)
- [ ] Update website forms to connect to Mailchimp
- [ ] Create welcome automation sequences
- [ ] Design branded email templates
- [ ] Set up tracking and analytics
- [ ] Test email collection and delivery
- [ ] Launch and monitor performance

Once you have Mailchimp set up, your kombucha festival will have professional-grade email marketing that can grow with your event! 🥤📧
