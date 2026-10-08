import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-emerald-50/40 text-slate-800 flex flex-col font-sans antialiased">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
           
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl"></span>
                <div>
                  <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-tight">
                    Green<span className="text-emerald-600">Basket</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold tracking-wider uppercase block">
                    100% Organic & Fresh
                  </span>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center gap-2">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-100/80 text-emerald-800'
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                    }`
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-100/80 text-emerald-800'
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                    }`
                  }
                >
                  Register
                </NavLink>

                <NavLink
                  to="/checkout"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                        : 'bg-emerald-600/90 text-white hover:bg-emerald-700'
                    }`
                  }
                >
                  <span></span>
                  <span>Cart & Checkout</span>
                </NavLink>
              </nav>
            </div>
          </div>
        </header>

       
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />

            
            <Route path="/500" element={<ServerError />} />

           
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        
        <footer className="border-t border-emerald-100 bg-white py-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GreenBasket Fresh Produce Ltd. Freshly delivered to your doorstep.</p>
        </footer>

   
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'text-sm font-medium shadow-xl rounded-2xl border border-emerald-100',
            style: {
              background: '#064e3b',
              color: '#ffffff',
              padding: '12px 18px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f43f5e',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}