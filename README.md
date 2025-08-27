# Miami Kombucha Festival Website

A modern, responsive website for the Miami Kombucha Festival, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Homepage**: Festival information and attendee email signup
- **Vendor Application**: Dedicated form for kombucha companies to apply as vendors
- **Local Vendors Directory**: Showcase of South Florida kombucha vendors
- **Responsive Design**: Mobile-first approach for all devices
- **Email Collection**: Forms to build attendee and vendor email lists

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: ESLint for code quality

## 📋 Prerequisites

**Important**: This project requires Node.js version 18.18.0 or higher.

To check your Node.js version:
```bash
node --version
```

If you need to upgrade Node.js:
- Visit [nodejs.org](https://nodejs.org/) to download the latest LTS version
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 18
  nvm use 18
  ```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── vendor-signup/      # Vendor application page
│   └── globals.css         # Global styles
└── components/
    ├── Hero.tsx            # Festival hero section
    ├── EmailSignup.tsx     # Attendee email collection
    ├── VendorCTA.tsx       # Call-to-action for vendors
    └── LocalVendors.tsx    # South Florida vendors directory
```

## 🎨 Design Features

- **Color Scheme**: Blue and yellow theme representing kombucha and festival vibes
- **Typography**: Inter font for clean, modern readability
- **Components**: Modular React components for easy maintenance
- **Forms**: User-friendly email collection with validation

## 🚢 Deployment

This website is designed to be deployed on **miamiboochfest.com** (Godaddy domain).

### Deployment Options:

1. **Vercel** (Recommended):
   ```bash
   npm run build
   npx vercel --prod
   ```

2. **Netlify**:
   ```bash
   npm run build
   # Upload the .next/out folder to Netlify
   ```

3. **Traditional hosting**: Export static files:
   ```bash
   npm run build
   npm run export
   ```

## 📧 Email Collection

Currently, email submissions are logged to the console. To implement actual email collection:

1. **Choose an email service**:
   - Mailchimp
   - ConvertKit
   - Klaviyo
   - Custom backend with database

2. **Update the form handlers** in:
   - `src/components/EmailSignup.tsx` (attendee emails)
   - `src/app/vendor-signup/page.tsx` (vendor applications)

## 🔧 Development

### Available Scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Vendors:

Edit the `localVendors` array in `src/components/LocalVendors.tsx` to add new South Florida kombucha vendors.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is created for the Miami Kombucha Festival. All rights reserved.

## 📞 Contact

For questions about the festival or website:
- Email: hello@miamiboochfest.com
- Website: [miamiboochfest.com](https://miamiboochfest.com)
