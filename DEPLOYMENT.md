# 🚀 GoDaddy Deployment Guide

## Method 1: Static File Upload (Easiest)

### Step 1: Build the static files
```bash
npm run build
```

This creates an `out` folder with all your static files.

### Step 2: Upload to GoDaddy
1. **Login to your GoDaddy cPanel**
   - Go to godaddy.com → My Products → Web Hosting → Manage
   
2. **Access File Manager**
   - Click "File Manager" in the cPanel
   - Navigate to `public_html` folder (this is your website root)
   
3. **Upload your files**
   - Delete any existing files in `public_html` (except hidden files like .htaccess)
   - Upload ALL contents from the `out` folder to `public_html`
   - Make sure `index.html` is in the root of `public_html`

### Step 3: Configure domain
- Your website should now be live at `miamiboochfest.com`!

---

## Method 2: FTP Upload

### Step 1: Get FTP credentials
- In GoDaddy cPanel, find "FTP Accounts" 
- Use main account or create new FTP user

### Step 2: Upload via FTP client
- Use FileZilla, Cyberduck, or VS Code FTP extension
- Connect to your GoDaddy server
- Upload `out` folder contents to `public_html`

---

## Method 3: Git Integration (Advanced)

If your GoDaddy hosting supports Git:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect in GoDaddy
- Some GoDaddy plans support Git deployment
- Check cPanel for "Git Version Control"

---

## 📧 Email Collection Setup

After deployment, you'll need to set up email collection:

### Option A: Formspree (Easiest)
1. Sign up at formspree.io
2. Get your form endpoint
3. Update the form action in your components

### Option B: Netlify Forms
1. Deploy to Netlify instead of GoDaddy
2. Add `netlify` attribute to forms
3. Automatic form handling

### Option C: Custom Backend
1. Create a simple PHP script on GoDaddy
2. Handle form submissions
3. Store in database or send emails

---

## 🛠️ Troubleshooting

### If pages don't load:
- Check that `index.html` is in the root directory
- Verify all files uploaded correctly
- Check GoDaddy error logs in cPanel

### If styles don't work:
- Ensure CSS files are in the correct paths
- Check browser developer tools for missing files

### If you need to update:
1. Make changes locally
2. Run `npm run build`
3. Re-upload the `out` folder contents

---

## 📞 Need Help?

- **GoDaddy Support**: Available 24/7 via phone/chat
- **Technical Issues**: Check browser console for errors
- **Email Setup**: Consider using a service like Mailchimp or ConvertKit

Your website should be live at **miamiboochfest.com** once uploaded! 🎉
