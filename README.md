# AI Digital Products Store

A fully automated digital products store where AI creates products and customers can buy instantly!

## Features
- 🛒 **AI-Generated Products** - Prompts, Templates, Designs
- 💳 **Stripe Payments** - Instant checkout
- 📦 **Automated Delivery** - Instant download after purchase
- 🤖 **24/7 AI Operation** - Store never sleeps

## Products Available
1. **ChatGPT Prompts Collection** - $19
2. **Midjourney Prompt Pack** - $29
3. **Notion Templates Bundle** - $24
4. **AI Copywriting Templates** - $39
5. **Email Marketing Templates** - $29

## Setup

### 1. Get Stripe Keys
Get your Stripe keys from https://dashboard.stripe.com/apikeys

### 2. Create .env file
```
VITE_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Install and Run
```bash
npm install
npm run dev
```

### 4. Deploy to Vercel (free)
```bash
npx vercel --prod
```

## How It Works
1. Customer visits store
2. Selects product
3. Pays with Stripe
4. Gets instant download link
5. You get paid automatically!

## Tech Stack
- React + Vite
- Stripe Checkout
- Supabase (for product database)
- Automated delivery

## Files
- `App.tsx` - Main store
- `components/ProductCard.tsx` - Product display
- `services/stripe.ts` - Payment processing
- `services/delivery.ts` - Product delivery

## Ready to Start Earning!
Let AI run your business 24/7!
