// src/lib/razorpay.js
export const initializeRazorpay = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => reject(false);
    document.body.appendChild(script);
  });
};

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  try {
    // In a real app, this would be an API call to your backend
    // For demo purposes, we'll create a mock order
    const order = {
      id: `order_${Date.now()}`,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: currency,
      receipt: `receipt_${Date.now()}`,
    };
    
    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
};

export const processPayment = async ({
  amount,
  donorInfo,
  campaign,
  onSuccess,
  onFailure,
}) => {
  try {
    // Initialize Razorpay
    const isLoaded = await initializeRazorpay();
    if (!isLoaded) {
      throw new Error('Razorpay SDK failed to load');
    }

    // Create order
    const order = await createRazorpayOrder(amount);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_9999999999', // Replace with your Razorpay key
      amount: order.amount,
      currency: order.currency,
      name: 'Kautike Charitable Foundation',
      description: `Donation for ${campaign}`,
      order_id: order.id,
      prefill: {
        name: donorInfo.name,
        email: donorInfo.email,
        contact: donorInfo.phone,
      },
      theme: {
        color: '#2563eb', // Blue color to match your theme
      },
      handler: function (response) {
        // Payment successful
        console.log('Payment successful:', response);
        if (onSuccess) {
          onSuccess({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: amount,
            donorInfo: donorInfo,
            campaign: campaign,
          });
        }
      },
      modal: {
        ondismiss: function () {
          if (onFailure) {
            onFailure('Payment cancelled by user');
          }
        },
      },
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', function (response) {
      console.error('Payment failed:', response.error);
      if (onFailure) {
        onFailure(response.error.description || 'Payment failed');
      }
    });

    rzp.open();
  } catch (error) {
    console.error('Error processing payment:', error);
    if (onFailure) {
      onFailure(error.message || 'An error occurred while processing payment');
    }
  }
};
