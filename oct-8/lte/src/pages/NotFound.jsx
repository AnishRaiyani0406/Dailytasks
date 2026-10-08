import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
        
        
        <h1 className="text-6xl font-extrabold text-emerald-600 mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Oops! Basket Empty</h2>
        <p className="text-sm text-slate-500 mb-6">
          The page or product you are looking for has been moved, removed, or doesn't exist in our store.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}