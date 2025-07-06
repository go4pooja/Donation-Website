# Donation Website - Kautike Charitable Foundation

A modern, responsive donation website built with Next.js and Tailwind CSS, featuring Razorpay payment integration.

## Features

- **Homepage**: Beautiful landing page with impact statistics, initiatives, campaigns, and testimonials
- **About Page**: Information about the foundation's mission and objectives  
- **Contact Page**: Contact form and foundation details
- **Donate Page**: Secure donation processing with Razorpay integration
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, accessible design with smooth animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Payment**: Razorpay Integration
- **Language**: JavaScript/JSX

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Razorpay

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your **Key ID** from the dashboard
3. Update the `.env.local` file:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_actual_key_id_here
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or next available port).

### 4. Build for Production

```bash
npm run build
npm start
```

## Razorpay Integration

### How it Works

1. **Client-Side**: The donate page collects user information and donation amount
2. **Order Creation**: A mock order is created (in production, this should be done on your backend)
3. **Payment Processing**: Razorpay checkout modal opens for secure payment
4. **Success Handling**: Payment success is handled with confirmation modal
5. **Tax Certificate**: Information about tax exemption is provided

### Important Security Notes

- **Key ID vs Key Secret**: Only the Key ID is used on the client-side
- **Backend Integration**: In production, order creation and payment verification should be done on your secure backend
- **Webhook Verification**: Implement Razorpay webhooks for payment confirmation
- **Data Storage**: Store payment records securely in your database

### Test Mode

The current setup uses Razorpay test mode. Use these test card details:

- **Card Number**: 4111 1111 1111 1111
- **Expiry**: Any future date
- **CVV**: Any 3 digits
- **OTP**: 123456

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Homepage
│   ├── about/page.js      # About page
│   ├── contact/page.js    # Contact page
│   ├── donate/page.js     # Donation page
│   └── layout.js          # Root layout
├── components/            # Reusable components
│   ├── Header.jsx         # Navigation header
│   └── Footer.jsx         # Site footer
└── lib/                   # Utility functions
    └── razorpay.js        # Razorpay integration
```

## Key Features Explained

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with mobile hamburger menu
- Optimized layouts for all screen sizes

### Payment Integration
- Secure Razorpay checkout
- Multiple payment methods (Cards, UPI, Net Banking)
- Payment success/failure handling
- Tax exemption information

### Form Handling
- Client-side validation
- Loading states and error handling
- User-friendly feedback

### SEO & Performance
- Next.js automatic optimizations
- Semantic HTML structure
- Fast loading with optimized images

## Customization

### Styling
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Add custom CSS in `globals.css`

### Content
- Update foundation details in components
- Modify campaigns and initiatives data
- Change contact information

### Payment
- Update Razorpay configuration
- Modify donation amounts and campaigns
- Customize payment flow

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify  
- Traditional hosting with Node.js

## Environment Variables

```env
# Required for Razorpay integration
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id

# Optional: For backend integration
RAZORPAY_KEY_SECRET=your_razorpay_secret (backend only)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions:
- Check the documentation
- Contact the development team
- Refer to Next.js and Razorpay documentation

## License

This project is intended for charitable purposes. Please respect the foundation's mission and use responsibly.
