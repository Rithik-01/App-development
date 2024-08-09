import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { CheckIcon, XIcon } from 'lucide-react';
import { Switch } from './ui/switch';
import './StravaSubscription.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import PaymentPage from './PaymentPage';

const SubscriptionPlan = ({ title, monthlyPrice, annualPrice, billingPeriod, discount, accounts, popular, onSelect }) => {
  const price = billingPeriod === 'monthly' ? monthlyPrice : annualPrice;

  return (
    <Card className={`w-full max-w-sm transition-all duration-300 ${popular ? 'popular-plan' : 'hover:shadow-md'}`}>
      <CardHeader className="text-center relative">
        {popular && <div className="popular-badge">Most Popular</div>}
        <h3>{title}</h3>
        <p className="plan-price">₹{price}<span className="plan-period">/{billingPeriod === 'monthly' ? 'mo' : 'year'}</span></p>
        {discount && <p className="plan-discount">{discount}</p>}
        {accounts && <p className="plan-accounts">{accounts}</p>}
      </CardHeader>
      <CardContent>
        <button 
          className="button w-full"
          onClick={() => onSelect(title, price)}
        >
          Choose Plan
        </button>
      </CardContent>
    </Card>
  );
};

const FeatureComparison = ({ features }) => (
  <div className="mt-8">
    <h2>What you'll get</h2>
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th className="text-center">Free</th>
            <th className="text-center">Subscription</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.name}</td>
              <td className="text-center">
                {feature.free ? 
                  <CheckIcon className="inline-block text-green-500" /> : 
                  <XIcon className="inline-block text-red-500" />
                }
              </td>
              <td className="text-center">
                <CheckIcon className="inline-block text-orange-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const StravaSubscription = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [price, setPrice] = useState('');

  const plans = [
    { title: "Basic", monthlyPrice: "208.25", annualPrice: "2,499.00", discount: "Save 15% annually", popular: false },
    { title: "Premium", monthlyPrice: "416.50", annualPrice: "4,998.00", discount: "Save 20% annually", popular: true },
    { title: "Student", monthlyPrice: "104.13", annualPrice: "1,249.50", discount: "50% Off (Verified Students)", popular: false },
    { title: "Family", monthlyPrice: "541.45", annualPrice: "6,499.00", accounts: "Up to 4 Accounts", popular: false }
  ];

  const features = [
    { name: "Activity Recording", free: true },
    { name: "Device Support", free: true },
    { name: "Social Network", free: true },
    { name: "Beacon on Phones", free: true },
    { name: "Beacon on Devices", free: false },
    { name: "Route Planning", free: false },
    { name: "Segment Competition", free: false },
    { name: "Training Dashboard", free: false },
    { name: "HR & Power Analysis", free: false },
    { name: "Advanced Metrics", free: false },
    { name: "Goal Setting", free: false },
    { name: "Training Log", free: false },
    { name: "Compare Efforts", free: false },
    { name: "Personal Heatmaps", free: false },
    { name: "Partner Perks", free: false }
  ];

  const handlePlanSelect = (planTitle, planPrice) => {
    setSelectedPlan(planTitle);
    setPrice(planPrice);
    setShowPaymentPage(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {!showPaymentPage ? (
        <>
          <h1>Choose Your Strava Subscription Plan</h1>
          
          <div className="flex justify-center items-center mb-8">
            <span className={`mr-2 ${billingPeriod === 'monthly' ? 'font-bold' : ''}`}>Monthly</span>
            <Switch
              checked={billingPeriod === 'annual'}
              onCheckedChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
            />
            <span className={`ml-2 ${billingPeriod === 'annual' ? 'font-bold' : ''}`}>Annual</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {plans.map((plan, index) => (
              <SubscriptionPlan 
                key={index} 
                {...plan} 
                billingPeriod={billingPeriod}
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
          
          <FeatureComparison features={features} />
          
          {selectedPlan && (
            <div className="checkout-bar">
              <div className="container">
                <p className="font-bold">Selected Plan: {selectedPlan}</p>
                <button 
                  className="button"
                  onClick={() => setShowPaymentPage(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}

          <div className="additional-features mt-12">
            <h2>Unlock new features that help you reach your goals and have more fun.</h2>
            <div className="features-grid">
              <div className="feature-item">
                <img src={img1} alt="Compete on Segments" />
                <h3>Compete on Segments</h3>
                <p>Challenge yourself against your past efforts, your friends, and millions of other athletes.</p>
              </div>
              <div className="feature-item">
                <img src={img2} alt="Accelerate Training" />
                <h3>Accelerate Training</h3>
                <p>See all your training in one place and chart your progress with unique analysis tools & an interactive record of your activities.</p>
              </div>
              <div className="feature-item">
                <img src={img3} alt="Discover New Routes" />
                <h3>Discover New Routes</h3>
                <p>Let the Strava community guide you to great new places to run and ride, anywhere in the world.</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PaymentPage
          selectedPlan={selectedPlan}
          billingPeriod={billingPeriod}
          price={price}
          onBack={() => setShowPaymentPage(false)}
        />
      )}
    </div>
  );
};

export default StravaSubscription;
