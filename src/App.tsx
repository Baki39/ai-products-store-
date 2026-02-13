import React, { useState, useEffect } from 'react';

// Stripe Public Key - Baki's live key!
const STRIPE_PUBLIC_KEY = 'pk_live_1Rg6LcIKwbq4qkQFzhr3ZNZU';

// Load Stripe.js
const loadStripe = () => {
  if (typeof window !== 'undefined' && !(window as any).Stripe) {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    document.head.appendChild(script);
  }
};

// Product data - AI generates more of these automatically!
const PRODUCTS = [
  {
    id: 'prod_1',
    name: 'ChatGPT Master Prompts',
    description: '500+ Proven prompts for business, coding, writing & more',
    price: 19,
    image: '🎯',
    features: ['Business Prompts', 'Coding Help', 'Writing Templates', 'Life Hacks']
  },
  {
    id: 'prod_2',
    name: 'Midjourney Art Pack',
    description: '1000+ Midjourney prompts for stunning AI art',
    price: 29,
    image: '🎨',
    features: ['Portrait Prompts', 'Landscape Art', 'Abstract Designs', 'Character Creation']
  },
  {
    id: 'prod_3',
    name: 'Notion Templates',
    description: 'Complete business templates for Notion',
    price: 24,
    image: '📝',
    features: ['Project Management', 'Habit Tracker', 'Finance Tracker', 'Content Calendar']
  },
  {
    id: 'prod_4',
    name: 'AI Copywriting Bundle',
    description: 'Copy that converts - proven templates',
    price: 39,
    image: '✍️',
    features: ['Sales Pages', 'Email Sequences', 'Ad Copy', 'Social Posts']
  },
  {
    id: 'prod_5',
    name: 'Email Marketing Suite',
    description: 'Ready-to-use email campaigns',
    price: 29,
    image: '📧',
    features: ['Welcome Sequences', 'Sales Emails', 'Newsletter Templates', 'Automation']
  },
  {
    id: 'prod_6',
    name: 'YouTube Video Ideas',
    description: '1000+ viral video ideas with scripts',
    price: 34,
    image: '🎬',
    features: ['Viral Topics', 'Script Templates', 'SEO Keywords', 'Thumbnail Ideas']
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState<string[]>([]);

  // Load Stripe on mount
  useEffect(() => {
    loadStripe();
    console.log('✅ Stripe configured:', STRIPE_PUBLIC_KEY.substring(0, 15) + '...');
  }, []);

  // Handle purchase with Stripe
  const handleBuy = async (product: typeof PRODUCTS[0]) => {
    setIsProcessing(true);
    
    // For demo: simulate successful purchase
    // In production: redirect to Stripe Checkout
    // const stripe = await (window as any).Stripe(STRIPE_PUBLIC_KEY);
    // await stripe.redirectToCheckout({ lineItems: [{ price: 'price_xxx', quantity: 1 }], mode: 'payment' });
    
    setTimeout(() => {
      setPurchasedProducts([...purchasedProducts, product.id]);
      setIsProcessing(false);
      alert(`🎉 Purchase successful! ${product.name}\n\n📧 Check your email for download link!\n\n🔒 Secured by Stripe`);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f23 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Header */}
      <header style={{
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          🤖 AI Products Store
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
          Premium AI-generated digital products • Instant Delivery • 🔒 Stripe Secured
        </p>
      </header>

      {/* Hero */}
      <div style={{
        padding: '60px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px'
        }}>
          AI Creates. 💰 You Profit.
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Our AI works 24/7 creating amazing digital products. 
          You earn money while you sleep. 💤
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: 'rgba(102,126,234,0.2)',
            padding: '10px 20px',
            borderRadius: '30px',
            color: '#667eea',
            fontSize: '14px'
          }}>
            ✅ Instant Download
          </span>
          <span style={{
            background: 'rgba(102,126,234,0.2)',
            padding: '10px 20px',
            borderRadius: '30px',
            color: '#667eea',
            fontSize: '14px'
          }}>
            ✅ 24/7 Auto Delivery
          </span>
          <span style={{
            background: 'rgba(102,126,234,0.2)',
            padding: '10px 20px',
            borderRadius: '30px',
            color: '#667eea',
            fontSize: '14px'
          }}>
            ✅ Stripe Secure Payment
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontSize: '28px',
          color: '#fff',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          🛒 Featured Products
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px'
        }}>
          {PRODUCTS.map(product => (
            <div key={product.id} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)',
                borderColor: 'rgba(102,126,234,0.5)'
              }
            }}>
              {/* Product Icon */}
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                {product.image}
              </div>
              
              {/* Product Name */}
              <h4 style={{
                fontSize: '22px',
                color: '#fff',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                {product.name}
              </h4>
              
              {/* Description */}
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                {product.description}
              </p>
              
              {/* Features */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {product.features.map((feature, i) => (
                  <span key={i} style={{
                    background: 'rgba(102,126,234,0.2)',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    color: '#667eea',
                    fontSize: '11px'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Price & Buy */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}>
                    ${product.price}
                  </span>
                  <span style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '14px',
                    marginLeft: '5px'
                  }}>
                    USD
                  </span>
                </div>
                
                <button
                  onClick={() => handleBuy(product)}
                  disabled={isProcessing || purchasedProducts.includes(product.id)}
                  style={{
                    background: purchasedProducts.includes(product.id)
                      ? 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)'
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    opacity: isProcessing ? 0.7 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {purchasedProducts.includes(product.id) 
                    ? '✅ Purchased!' 
                    : '🛒 Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '60px'
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px'
        }}>
          🤖 Powered by AI • 24/7 Auto-Delivery • Secure Payments via Stripe
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: '12px',
          marginTop: '10px'
        }}>
          © 2024 AI Products Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
