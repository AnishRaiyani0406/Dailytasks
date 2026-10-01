import React from 'react';
import { XCircle, RefreshCw, HelpCircle, ArrowLeft } from 'lucide-react';

export default function PaymentFailure({ onRetry, onCancel }) {
  const errorDetails = {
    amount: '₹19,999',
    reason: 'Transaction declined by your bank due to insufficient funds or security limits.',
    code: 'ERR_BANK_DECLINED'
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-md p-6 text-center space-y-6">
      {/* Icon & Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-100 text-rose-600 mb-1">
          <XCircle className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">Payment Failed</h1>
        <p className="text-xs text-slate-500">Don't worry, no funds were deducted from your account.</p>
      </div>

      
      <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-100 text-left space-y-1">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-500">Attempted Amount:</span>
          <span className="font-bold text-slate-900">{errorDetails.amount}</span>
        </div>
        <p className="text-xs text-rose-700 leading-relaxed pt-1">
          {errorDetails.reason}
        </p>
      </div>

      
      <div className="flex justify-between items-center text-xs border-t border-b border-slate-100 py-3 text-slate-600">
        <span>Error Reference</span>
        <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-rose-600">{errorDetails.code}</code>
      </div>

    
      <div className="space-y-2 pt-1">
        <button 
          onClick={onRetry}
          className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-2.5 rounded-xl transition-all shadow-sm"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
        <button 
          onClick={onCancel}
          className="w-full flex items-center justify-center gap-1.5 text-slate-600 hover:text-slate-900 text-xs py-1 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Checkout
        </button>
      </div>

      <div className="pt-2">
        <a 
          href="#support" 
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5" /> Need help with this payment?
        </a>
      </div>
    </div>
  );
}