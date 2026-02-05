import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';

const CheckoutForm = ({ totalAmount, cartItems, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      //Call backend to create a PaymentIntent
      const { data } = await axios.post('https://fashion-server-production.up.railway.app/create-payment-intent', {
        amount: totalAmount,
        items: cartItems,
      });

      const clientSecret = data.clientSecret;

      //Confirm the payment on the client side
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        Swal.fire('Error', result.error.message, 'error');
      } else {
        // Payment succeeded
        if (result.paymentIntent.status === 'succeeded') {
    Swal.fire({
        title: 'Processing...',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        },
        timer: 1500
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Thank you for your order!',
            text: 'Payment Successful!',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            onSuccess();
            navigate('/');
        });
    });
}
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong with the server', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h5 className="mb-4 fw-bold">Enter Card Details</h5>
      <div className="p-3 border rounded mb-3">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#9e2146' },
          },
        }} />
      </div>
      <div className="d-flex gap-2">
        <button 
          type="submit" 
          disabled={!stripe || isProcessing} 
          className="btn btn-orange w-100 text-white fw-bold"
          style={{backgroundColor: '#ff7b00'}}
        >
          {isProcessing ? 'Processing...' : `Pay ${totalAmount}€`}
        </button>
        <button type="button" onClick={onCancel} className="btn btn-light border">Cancel</button>
      </div>
    </form>
  );
};

export default CheckoutForm;