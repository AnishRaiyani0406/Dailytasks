import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save, CheckCircle2 } from 'lucide-react';

export default function ProfileUpdate() {
  const [formData, setFormData] = useState({
    fullName: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 98765 43210',
    address: 'B-402, Satellite, Ahmedabad, Gujarat'
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto space-y-5">
     
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="text-indigo-400" size={22} />
          Profile Settings
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Update your basic personal information
        </p>
      </div>

      
      {saved && (
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <CheckCircle2 size={16} />
          Profile updated successfully!
        </div>
      )}

      
      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        
        
        <div className="space-y-1 text-xs">
          <label className="text-slate-300 font-medium">Full Name</label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        
        <div className="space-y-1 text-xs">
          <label className="text-slate-300 font-medium">Email Address</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        
        <div className="space-y-1 text-xs">
          <label className="text-slate-300 font-medium">Phone Number</label>
          <div className="relative">
            <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        
        <div className="space-y-1 text-xs">
          <label className="text-slate-300 font-medium">Address</label>
          <div className="relative">
            <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md"
          >
            <Save size={15} />
            Save Profile
          </button>
        </div>

      </form>
    </div>
  );
}