import React, { useState } from 'react';
import { Truck, CheckCircle2, Clock, MapPin, User, Phone, Search } from 'lucide-react';

const initialDeliveries = [
  {
    id: 'DEL-9021',
    orderId: 'ORD-8920',
    customerName: 'Priya Patel',
    phone: '+91 98765 43210',
    address: 'B-402, Satellite, Ahmedabad, Gujarat',
    courier: 'BlueDart Express',
    trackingNo: 'BD-882910293',
    status: 'Out for Delivery',
    expectedDate: 'Today, 4:00 PM',
    location: 'Ahmedabad Hub'
  },
  {
    id: 'DEL-9022',
    orderId: 'ORD-8922',
    customerName: 'Vikram Mehta',
    phone: '+91 91234 56789',
    address: '12, CG Road, Navrangpura, Ahmedabad',
    courier: 'Delhivery',
    trackingNo: 'DL-773910284',
    status: 'In Transit',
    expectedDate: 'Tomorrow, 12:00 PM',
    location: 'Surat Sorting Facility'
  },
  {
    id: 'DEL-9020',
    orderId: 'ORD-8919',
    customerName: 'Rohan Verma',
    phone: '+91 99887 76655',
    address: '74, SG Highway, Bodakdev, Ahmedabad',
    courier: 'Shadowfax',
    trackingNo: 'SF-102938475',
    status: 'Delivered',
    expectedDate: '24 Sep 2026',
    location: 'Delivered'
  }
];

export default function DeliveryStatus() {
  const [search, setSearch] = useState('');

  // Filter deliveries by order ID or customer name
  const filtered = initialDeliveries.filter((item) =>
    item.orderId.toLowerCase().includes(search.toLowerCase()) ||
    item.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Truck className="text-indigo-400" size={22} />
          Delivery Status
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Check live package updates and tracking
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search by Order ID or Customer name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Simple List of Cards */}
      <div className="grid gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            
            {/* Top Row: Order ID & Status Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="font-bold text-white text-base">{item.orderId}</span>
                <span className="text-xs text-slate-500 ml-2">({item.courier})</span>
              </div>

              {/* Status Badge */}
              {item.status === 'Delivered' && (
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 size={13} /> Delivered
                </span>
              )}
              {item.status === 'Out for Delivery' && (
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
                  <Truck size={13} /> Out for Delivery
                </span>
              )}
              {item.status === 'In Transit' && (
                <span className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Clock size={13} /> In Transit
                </span>
              )}
            </div>

            {/* Middle Row: Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              {/* Customer */}
              <div className="space-y-1">
                <p className="text-slate-500 font-medium">Customer</p>
                <p className="text-slate-200 font-semibold flex items-center gap-1">
                  <User size={13} className="text-slate-400" /> {item.customerName}
                </p>
                <p className="text-slate-400 flex items-center gap-1">
                  <Phone size={13} className="text-slate-400" /> {item.phone}
                </p>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <p className="text-slate-500 font-medium">Current Location</p>
                <p className="text-slate-200 font-semibold flex items-center gap-1">
                  <MapPin size={13} className="text-indigo-400" /> {item.location}
                </p>
                <p className="text-slate-400">Tracking #: {item.trackingNo}</p>
              </div>

              {/* Expected Arrival */}
              <div className="space-y-1">
                <p className="text-slate-500 font-medium">Expected Arrival</p>
                <p className="text-slate-200 font-semibold flex items-center gap-1">
                  <Clock size={13} className="text-indigo-400" /> {item.expectedDate}
                </p>
                <p className="text-slate-400 truncate">{item.address}</p>
              </div>

            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-6 text-center text-slate-500 bg-slate-900 border border-slate-800 rounded-xl text-sm">
            No deliveries found.
          </div>
        )}
      </div>
    </div>
  );
}