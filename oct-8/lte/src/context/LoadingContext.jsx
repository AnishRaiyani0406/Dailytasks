import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  // Helper to wrap async frontend functions automatically
  const withLoading = async (asyncFn) => {
    showLoading();
    try {
      return await asyncFn();
    } finally {
      hideLoading();
    }
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, withLoading }}>
      {children}
      {isLoading && <LoadingSpinner />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-xl border border-emerald-100">
        <div className="relative flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin" />
          <span className="absolute text-base"></span>
        </div>
        <p className="text-xs font-semibold text-slate-700 tracking-wide">Fetching Data...</p>
      </div>
    </div>
  );
}