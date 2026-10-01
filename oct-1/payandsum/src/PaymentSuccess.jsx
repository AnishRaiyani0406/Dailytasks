import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, ArrowRight, Download } from 'lucide-react';

export default function PaymentSuccess({ onDashboard }) {
  const [copied, setCopied] = useState(false);

  const paymentDetails = {
    amount: '₹19,999',
    txnId: 'TXN_9876543210',
    date: '01 Oct 2026, 11:15 AM',
    paymentMethod: 'UPI / GPay'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentDetails.txnId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-md p-6 text-center space-y-6">
      
      <div className="space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mb-1">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">Payment Successful</h1>
        <p className="text-xs text-slate-500">
          Receipt sent to <span className="font-medium text-slate-700">user@example.com</span>
        </p>
      </div>

      
      <div className="py-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
        <span className="text-xs text-slate-500 uppercase tracking-wider">Amount Paid</span>
        <div className="text-3xl font-extrabold text-emerald-700 mt-0.5">{paymentDetails.amount}</div>
      </div>

     
      <div className="space-y-2 text-xs border-t border-b border-slate-100 py-3">
        <div className="flex justify-between py-1 text-slate-600">
          <span>Date & Time</span>
          <span className="font-medium text-slate-800">{paymentDetails.date}</span>
        </div>
        <div className="flex justify-between py-1 text-slate-600">
          <span>Payment Method</span>
          <span className="font-medium text-slate-800">{paymentDetails.paymentMethod}</span>
        </div>
        <div className="flex justify-between items-center py-1 text-slate-600">
          <span>Transaction ID</span>
          <div className="flex items-center gap-1.5 font-mono text-slate-800">
            <span>{paymentDetails.txnId}</span>
            <button 
              onClick={handleCopy} 
              className="text-slate-400 hover:text-slate-600 p-0.5"
              title="Copy ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      
      <div className="space-y-2 pt-1">
        <button 
          onClick={onDashboard}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-xl transition-all"
        >
          Go to Dashboard <ArrowRight className="w-4 h-4" />
        </button>
        <button 
          onClick={() => alert('Downloading invoice...')}
          className="w-full flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs py-1"
        >
          <Download className="w-3.5 h-3.5" /> Download Invoice (PDF)
        </button>
      </div>
    </div>
  );
}