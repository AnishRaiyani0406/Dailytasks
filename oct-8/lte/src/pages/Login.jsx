import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoading } from '../context/LoadingContext';
import { mockApiCall } from '../api/mockApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { withLoading } = useLoading();

  const handleLogin = async (e) => {
    e.preventDefault();

    await withLoading(async () => {
      // Simulate API response delay
      const res = await mockApiCall({ user: email, token: 'mock-jwt-token' }, 1500);
      toast.success(`Welcome back, ${res.user}!`);
    });
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md border border-emerald-100">
        <div className="text-center mb-6">
          <span className="text-3xl"></span>
          <h2 className="text-xl font-bold text-gray-800 mt-2">Sign In</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
} 