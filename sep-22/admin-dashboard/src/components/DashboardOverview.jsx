import React from 'react';
import { 
  Users, 
  Package, 
  ShoppingBag, 
  IndianRupee, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight 
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹4,82,950',
      change: '+14.5%',
      isPositive: true,
      period: 'vs last month',
      icon: IndianRupee,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      title: 'Total Orders',
      value: '1,284',
      change: '+8.2%',
      isPositive: true,
      period: 'vs last month',
      icon: ShoppingBag,
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
    {
      title: 'Active Products',
      value: '342',
      change: '-2.4%',
      isPositive: false,
      period: 'vs last month',
      icon: Package,
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    },
    {
      title: 'Total Users',
      value: '8,920',
      change: '+18.6%',
      isPositive: true,
      period: 'vs last month',
      icon: Users,
      iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.isPositive ? TrendingUp : TrendingDown;

        return (
          <div
            key={index}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all duration-200 group"
          >
            {/* Top Row: Icon & Title */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {stat.title}
              </span>
              <div className={`p-2.5 rounded-xl border ${stat.iconBg}`}>
                <Icon size={20} />
              </div>
            </div>

            {/* Middle Row: Main Metric Value */}
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </h3>
              <button 
                className="text-slate-500 group-hover:text-slate-300 transition-colors"
                title="View details"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Bottom Row: Percentage Change Trend */}
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span
                className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full ${
                  stat.isPositive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
              >
                <TrendIcon size={12} />
                {stat.change}
              </span>
              <span className="text-slate-500">{stat.period}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}