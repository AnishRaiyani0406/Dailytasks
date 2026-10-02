import React, { useState } from 'react';
import OrderDetails from './OrderDetails';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('forgot_password');

  return (
    <div>
      {/* Navigation Switcher Bar for Preview */}
      <div className="bg-gray-800 text-white p-3 flex justify-center gap-4 text-sm font-medium">
        <button
          onClick={() => setCurrentPage('order_details')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentPage === 'order_details' ? 'bg-emerald-600' : 'hover:bg-gray-700'
          }`}
        >
          Order Details
        </button>
        <button
          onClick={() => setCurrentPage('forgot_password')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentPage === 'forgot_password' ? 'bg-emerald-600' : 'hover:bg-gray-700'
          }`}
        >
          Forgot Password Page
        </button>
        <button
          onClick={() => setCurrentPage('reset_password')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentPage === 'reset_password' ? 'bg-emerald-600' : 'hover:bg-gray-700'
          }`}
        >
          Reset Password Page
        </button>
      </div>

      {/* Dynamic View Rendering */}
      {currentPage === 'order_details' && <OrderDetails />}
      {currentPage === 'forgot_password' && (
        <ForgotPassword
          onNavigateToLogin={() => alert('Navigate to Login Page')}
          onNavigateToReset={() => setCurrentPage('reset_password')}
        />
      )}
      {currentPage === 'reset_password' && (
        <ResetPassword
          onNavigateToLogin={() => alert('Navigate to Login Page')}
        />
      )}
    </div>
  );
}

export default App;