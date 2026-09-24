import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Calendar,
  Eye,
  Package
} from 'lucide-react';


const initialOrders = [
  {
    id: 'ORD-8921',
    date: '24 Sep 2026',
    customer: 'Aarav Sharma',
    itemsCount: 3,
    totalAmount: 4299,
    status: 'Delivered',
    paymentMethod: 'UPI'
  },
  {
    id: 'ORD-8920',
    date: '23 Sep 2026',
    customer: 'Priya Patel',
    itemsCount: 1,
    totalAmount: 1499,
    status: 'Processing',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-8919',
    date: '21 Sep 2026',
    customer: 'Rohan Verma',
    itemsCount: 2,
    totalAmount: 890,
    status: 'Delivered',
    paymentMethod: 'Cash on Delivery'
  },
  {
    id: 'ORD-8918',
    date: '19 Sep 2026',
    customer: 'Ananya Gupta',
    itemsCount: 4,
    totalAmount: 6150,
    status: 'Cancelled',
    paymentMethod: 'UPI'
  }
];

export default function OrderHistory() {
  const [orders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = 
      selectedFilter === 'All' || order.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 size={13} />
            Delivered
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock size={13} />
            Processing
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <XCircle size={13} />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingBag className="text-indigo-400" size={22} />
            Order History
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Track and manage recent customer orders
          </p>
        </div>

        
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
          {['All', 'Delivered', 'Processing', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === status
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search by order ID or customer name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500"
        />
      </div>

     
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/50 text-slate-400 font-medium border-b border-slate-800 text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Items</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 font-semibold text-white">{order.id}</td>
                    <td className="p-4 text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-500" />
                        {order.date}
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-200">{order.customer}</td>
                    <td className="p-4 text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Package size={14} className="text-slate-500" />
                        {order.itemsCount} {order.itemsCount === 1 ? 'item' : 'items'}
                      </div>
                    </td>
                    <td className="p-4 text-slate-400">{order.paymentMethod}</td>
                    <td className="p-4 font-semibold text-white">
                      ₹{order.totalAmount.toLocaleString('en-IN')}
                    </td>
                    <td className="p-4">{getStatusBadge(order.status)}</td>
                    <td className="p-4 text-right">
                      <button 
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
                        title="View order details"
                      >
                        <Eye size={14} />
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-8 text-center text-slate-500">
                    No orders found matching your search or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}