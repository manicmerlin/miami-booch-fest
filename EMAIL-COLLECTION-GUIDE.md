# 📧 Email Collection Setup Guide

## 🚀 Quick Start: Formspree (Recommended)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create two forms:
   - **Attendee Form** (for general email signups)
   - **Vendor Form** (for vendor applications)

### Step 2: Get Your Form IDs
1. After creating forms, you'll get URLs like:
   - `https://formspree.io/f/abc123def` (attendee form)
   - `https://formspree.io/f/xyz789ghi` (vendor form)

### Step 3: Update Your Website
Replace `YOUR_FORM_ID` and `YOUR_VENDOR_FORM_ID` in these files:
- `src/components/EmailSignup.tsx` → Line 12
- `src/app/vendor-signup/page.tsx` → Line 35

### Step 4: Test & Deploy
1. Test forms locally at localhost:3000
2. Deploy to GoDaddy using the deployment guide
3. Your email collection is live! 🎉

---

## 📊 Advanced: Mailchimp Integration

### Benefits:
- Professional email marketing
- Automated welcome emails
- Audience segmentation
- Campaign analytics
- Free up to 500 contacts

### Setup Steps:

#### 1. Create Mailchimp Account
- Go to [mailchimp.com](https://mailchimp.com)
- Create free account
- Create two audiences: "Festival Attendees" and "Potential Vendors"

#### 2. Get API Keys & List IDs
- Go to Account → Extras → API keys
- Get your API key and datacenter
- Note your audience IDs from audience settings

#### 3. Install Mailchimp SDK (Optional)
```bash
npm install @mailchimp/mailchimp_marketing
```

#### 4. Create API Route (For Server-Side)
Create `src/app/api/subscribe/route.ts`:
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: Request) {
  const { email, type } = await request.json()
  
  const listId = type === 'vendor' 
    ? process.env.MAILCHIMP_VENDOR_LIST_ID 
    : process.env.MAILCHIMP_ATTENDEE_LIST_ID
  
  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to subscribe' }, { status: 400 })
  }
}
```

---

## 🔧 Alternative Solutions

### Option A: Google Sheets Integration
```javascript
// Simple Google Sheets API integration
const SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

fetch(SHEET_URL, {
  method: 'POST',
  body: JSON.stringify({ email, timestamp: new Date() })
})
```

### Option B: ConvertKit
- Similar to Mailchimp but creator-focused
- Better automation for events
- API integration available

### Option C: Klaviyo
- E-commerce focused
- Great for product-based businesses
- Advanced segmentation

---

## 📈 Email Collection Best Practices

### 1. **Multiple Collection Points**
- Homepage hero section ✅
- Vendor application form ✅
- Footer signup (add this)
- Pop-up modal (optional)
- Social media bio links

### 2. **Lead Magnets**
Add incentives:
- "Early bird festival updates"
- "Exclusive vendor previews"
- "Free kombucha tasting guide"
- "VIP festival perks"

### 3. **Segmentation Strategy**
Separate lists for:
- **General Attendees** → Festival updates, ticket sales
- **Vendors** → Application status, vendor info
- **VIP/Press** → Special access, media kits
- **Local Partners** → Collaboration opportunities

### 4. **Follow-up Sequences**
**Attendee Welcome Series:**
1. Welcome + festival overview
2. Local vendor spotlight
3. What to expect at the festival
4. Ticket release announcement
5. Festival week countdown

**Vendor Follow-up:**
1. Application received confirmation
2. Review process timeline
3. Accepted/waitlist notification
4. Vendor preparation guide
5. Festival week logistics

---

## 🎯 Email Campaign Ideas

### Pre-Festival (3-6 months out):
- Festival announcement
- Vendor spotlights
- "Behind the scenes" content
- Ticket release dates

### Leading Up (1-3 months):
- Schedule release
- Featured activities
- Local partnerships
- Parking & logistics

### Post-Festival:
- Thank you message
- Photo galleries
- Vendor contact info
- Next year's save-the-date

---

## 📊 Analytics & Tracking

### Key Metrics to Track:
- **Email signups per week**
- **Source attribution** (homepage vs social)
- **Open rates** (aim for 20-25%)
- **Click-through rates** (aim for 2-5%)
- **Vendor application conversion**

### Tools:
- Formspree analytics
- Mailchimp reports
- Google Analytics events
- Social media insights

---

## 🚀 Next Steps

1. **Week 1**: Set up Formspree
2. **Week 2**: Test email collection
3. **Week 3**: Add lead magnets
4. **Week 4**: Plan email sequences
5. **Month 2**: Upgrade to Mailchimp if needed

---

## 💡 Pro Tips

- **Mobile-first forms** → Most users on mobile
- **Single opt-in** → Reduce friction initially
- **Clear value proposition** → "Be first to know about tickets"
- **GDPR compliance** → Add privacy policy link
- **Thank you pages** → Confirm submission success

Your email list is the most valuable asset for the festival! 🎪📧
