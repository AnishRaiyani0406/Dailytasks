import { Link } from 'react-router-dom';

export default function ServerError({ resetError }) {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-8 shadow-sm">
        

        <h1 className="text-6xl font-extrabold text-red-500 mb-2">500</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Something Went Wrong</h2>
        <p className="text-sm text-slate-500 mb-6">
          Our servers encountered an unexpected issue while fetching your grocery details. Please try again in a moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetError || (() => window.location.reload())}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
