# 🎯 Your Mailchimp is Configured and Ready!

## ✅ Current Setup
- **API Key**: Connected to your us6 server
- **Audience**: 419c08e758 (used for both attendees and vendors)
- **Smart Tagging**: Automatically separates attendees from vendors using tags

## 🏷️ How Your Tags Work

When someone signs up, they automatically get tagged:
- **Attendees**: `festival-attendee`, `homepage-signup` (or `footer-signup`, `popup-signup`)
- **Vendors**: `vendor-application`, `vendor-application`
- **All subscribers**: `miami-kombucha-fest-2025`, `signup-YYYY-MM-DD`

## 📊 View Your Subscribers

In Mailchimp:
1. Go to **Audience** → **All contacts**
2. Click **Tags** to see how subscribers are organized
3. Create **Segments** to view specific groups:
   - **Festival Attendees**: Tag contains "festival-attendee"
   - **Vendor Applications**: Tag contains "vendor-application"
   - **Homepage Signups**: Tag contains "homepage-signup"

## 🚀 Test Your Integration

1. **Visit**: localhost:3000
2. **Sign up** with your email in any form
3. **Check Mailchimp**: Go to your audience and look for your email
4. **Check tags**: Your contact should have the appropriate tags

## 🎯 Optional: Create a Second Audience for Vendors

If you want separate audiences later:

1. **In Mailchimp** → **Audience** → **Create Audience**
2. **Name**: "Miami Kombucha Festival - Vendors"
3. **Get the new Audience ID** from Settings
4. **Update your .env.local**:
   ```
   MAILCHIMP_VENDOR_LIST_ID=your-new-vendor-audience-id
   ```
5. **Restart your dev server**

## 📧 Email Campaign Ideas

With your current setup, you can create targeted campaigns:

### For All Subscribers:
- Festival announcements
- General updates
- Health & wellness content

### For Attendees Only:
- Ticket information
- Event schedule
- Vendor spotlights

### For Vendors Only:
- Application status updates
- Vendor guidelines
- Setup instructions

## 🔧 Troubleshooting

**If signups aren't working:**
1. Check browser console for errors
2. Verify your API key is correct
3. Make sure the audience ID is right
4. Check that your dev server restarted

**To test without spam:**
- Use your own email addresses
- Use temporary email services
- Delete test contacts from Mailchimp afterward

## 🎉 You're Live!

Your kombucha festival website is now professionally collecting emails with Mailchimp! Every signup will be automatically organized and ready for your marketing campaigns.

**Next step**: Test the signup forms and watch your audience grow! 🥤📧✨
