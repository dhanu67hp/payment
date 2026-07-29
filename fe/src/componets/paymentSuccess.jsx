import React from 'react';
import "../styles/paymentSuccess.css";

const paymentSuccess = () => {

  const query = new URLSearchParams(window.location.search);
  const reference = query.get('reference');
  return (
    <div className='payment-success-container'>
        <div className='success-card'>
            <div className='success-icon'>✓</div>
            <h2>Payment Successful</h2>
            <p>Thank you for your payment.</p>
            {
              reference && <p className='payment-success-reference'><strong>Reference id: {reference}</strong></p>
            }
        </div>
    </div>
  )
}

export default paymentSuccess