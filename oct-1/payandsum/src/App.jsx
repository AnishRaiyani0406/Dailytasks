import React, { useState } from 'react';
import Summary from './Summary';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';

export default function App() {

  const [status, setStatus] = useState('summary');

  
  const handleProceedToPay = (amount) => {

    setStatus('success');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
    
      <div className="mb-6 flex bg-slate-200/80 p-1 rounded-lg text-xs font-medium">
        <button
          onClick={() => setStatus('summary')}
          className={`px-3 py-1.5 rounded-md transition-all ${
            status === 'summary' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
          }`}
        >
          Checkout Summary
        </button>
        <button
          onClick={() => setStatus('success')}
          className={`px-3 py-1.5 rounded-md transition-all ${
            status === 'success' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
          }`}
        >
          Success View
        </button>
        <button
          onClick={() => setStatus('failure')}
          className={`px-3 py-1.5 rounded-md transition-all ${
            status === 'failure' ? 'bg-white text-rose-700 shadow-sm' : 'text-slate-600'
          }`}
        >
          Failure View
        </button>
      </div>

      
      {status === 'summary' && (
        <Summary onProceed={handleProceedToPay} />
      )}

      {status === 'success' && (
        <PaymentSuccess onDashboard={() => setStatus('summary')} />
      )}

      {status === 'failure' && (
        <PaymentFailure 
          onRetry={() => setStatus('success')} 
          onCancel={() => setStatus('summary')} 
        />
      )}
    </div>
  );
}