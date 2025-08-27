# 🚀 Mailchimp Setup Instructions

## Step 1: Get Your Mailchimp API Key

1. **Login to Mailchimp** at [mailchimp.com](https://mailchimp.com)
2. **Click your profile** in the top right corner
3. **Go to Account** → **Extras** → **API keys**
4. **Click "Create A Key"**
5. **Copy the API key** (it looks like: `abc123def456-us1`)

## Step 2: Create Your Audiences

### Create Attendee Audience:
1. **Go to Audience** → **All contacts**
2. **Click "Create Audience"**
3. **Name**: "Miami Kombucha Festival - Attendees"
4. **Description**: "People interested in attending the festival"
5. **Save and note the Audience ID** (found in Settings → Audience name and defaults)

### Create Vendor Audience:
1. **Click "Create Audience"** again
2. **Name**: "Miami Kombucha Festival - Vendors"
3. **Description**: "Kombucha businesses interested in vending"
4. **Save and note the Audience ID**

## Step 3: Configure Your Website

1. **Copy the example environment file**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local`** and replace the placeholders:
   ```bash
   # Your actual API key
   MAILCHIMP_API_KEY=abc123def456-us1
   
   # Server prefix (the part after the dash, like "us1", "us2", etc.)
   MAILCHIMP_SERVER_PREFIX=us1
   
   # Your attendee audience ID
   MAILCHIMP_ATTENDEE_LIST_ID=a1b2c3d4e5
   
   # Your vendor audience ID  
   MAILCHIMP_VENDOR_LIST_ID=f6g7h8i9j0
   ```

3. **Restart your development server**:
   ```bash
   npm run dev
   ```

## Step 4: Test Your Integration

1. **Visit** localhost:3000
2. **Enter your email** in any signup form
3. **Check your Mailchimp audiences** - you should see the new subscriber!
4. **Check the browser console** for any error messages

## Step 5: Customize Your Audiences (Optional)

### Add Custom Fields:
1. **Go to your audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. **Add fields** like:
   - **SOURCE** (text) - where they signed up
   - **COMPANY** (text) - for vendors
   - **PHONE** (phone) - for vendors

### Create Segments:
- **Homepage signups**: SOURCE contains "homepage"
- **Vendor applications**: SOURCE contains "vendor"
- **Highly engaged**: opened 80%+ of emails

## Troubleshooting

### Common Issues:

**❌ "Mailchimp list ID not configured"**
- Check that your `.env.local` file exists and has the correct audience IDs

**❌ "Invalid API Key"**
- Verify your API key is correct in `.env.local`
- Make sure the server prefix matches (us1, us2, etc.)

**❌ "Member Exists"**
- This is normal! It means the email is already subscribed
- The website will show a success message

**❌ Console errors about environment variables**
- Restart your dev server after creating `.env.local`
- Make sure the file is named exactly `.env.local` (not `.env.local.txt`)

### Need Help?

1. **Check the browser console** for detailed error messages
2. **Look at your terminal** where npm run dev is running
3. **Verify in Mailchimp** that your audiences were created correctly

## 🎉 You're All Set!

Once configured, your website will:
- ✅ Automatically add email signups to your Mailchimp audiences
- ✅ Separate attendees from vendor applications
- ✅ Track the source of each signup (homepage, footer, popup, vendor form)
- ✅ Handle duplicate emails gracefully
- ✅ Work seamlessly when deployed to GoDaddy

Your email marketing is now professionally integrated! 🥤📧
