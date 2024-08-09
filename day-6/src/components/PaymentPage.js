import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = ({ selectedPlan, billingPeriod, price, onBack }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would handle the payment process
    alert('Payment Successful! Thank you for subscribing.');
    handlePaymentSuccess();
  };

  const handlePaymentSuccess = () => {
    // Redirect to home page after successful payment
    navigate('/workouts');
  };

  return (
    <div className="payment-container">
      <div className="card w-full max-w-lg mx-auto">
        <div className="card-header text-center">
          <h2>Payment Details</h2>
        </div>
        <div className="card-content">
          <div className="selected-plan-details">
            <h3>Strava Subscription</h3>
            <ul>
              <li>Personalized Route Suggestions</li>
              <li>Advanced Analysis Tools</li>
              <li>Segment Leaderboards</li>
              <li>Recover Athletics <span className="new">NEW</span></li>
            </ul>
            <div className="billing-period">
              <label>
                <input
                  type="radio"
                  checked={billingPeriod === 'annual'}
                  readOnly
                />
                Annually <span className="best-value">Best Value</span>
              </label>
              <label>
                <input
                  type="radio"
                  checked={billingPeriod === 'monthly'}
                  readOnly
                />
                Monthly
              </label>
            </div>
            <div className="total">
              <p>Total: ₹{price}</p>
            </div>
          </div>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Card
              </label>
              <label>
                <input
                  type="radio"
                  checked={paymentMethod === 'gpay'}
                  onChange={() => setPaymentMethod('gpay')}
                />
                Google Pay
              </label>
            </div>
            {paymentMethod === 'card' && (
              <>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Security Code</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Name on Card</label>
                  <input
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <button className="button w-full" type="submit">
              Pay ₹{price}
            </button>
          </form>
          <button className="button w-full mt-4" onClick={onBack}>
            Back to Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
