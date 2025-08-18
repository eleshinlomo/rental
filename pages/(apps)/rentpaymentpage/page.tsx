// components/RentPayment.tsx
import { useState } from 'react';
import { FiDollarSign, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const RentPayment = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment processing logic would go here
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex items-center mb-6">
        <FiDollarSign className="text-indigo-600 text-2xl mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Rent Payment</h2>
      </div>
      
      {paymentSuccess ? (
        <div className="text-center py-8">
          <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
          <p className="text-gray-600">Your payment of ${amount} has been processed.</p>
          <p className="text-gray-500 text-sm mt-4">Receipt has been sent to your email.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Current Balance:</span>
              <span className="font-bold">$1,200.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Due Date:</span>
              <span className="font-bold">May 5, 2025</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Payment Amount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  id="amount"
                  type="number"
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Payment Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className="text-indigo-600 focus:ring-indigo-500"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className="text-indigo-600 focus:ring-indigo-500"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <span>Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className="text-indigo-600 focus:ring-indigo-500"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                  />
                  <span>PayPal</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all"
            >
              Pay Rent Now
            </button>
          </form>
        </>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Payment History</h3>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <FiCalendar className="text-gray-400 mr-2" />
            <span className="text-sm">April 2025</span>
          </div>
          <span className="text-sm font-medium text-green-600">$1,200.00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <FiCalendar className="text-gray-400 mr-2" />
            <span className="text-sm">March 2025</span>
          </div>
          <span className="text-sm font-medium text-green-600">$1,200.00</span>
        </div>
      </div>
    </div>
  );
};

export default RentPayment;