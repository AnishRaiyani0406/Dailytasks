import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className='bg-emerald-300 p-2'>
        <div className='flex justify-between items-center px-6 py-2'>
          <h1 className='text-3xl font-bold text-white'>Grocery</h1>

          <div className='flex gap-20 items-center'>
            <Link className='hover:underline cursor-pointer'>Home</Link>
            <Link className='hover:underline cursor-pointer'>Product</Link>
            <Link className='hover:underline cursor-pointer'>Cart</Link>
          </div>
        </div>
      </header>

      
      <div className="flex flex-1">
       
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-emerald-400 text-white transition-all duration-300 overflow-hidden`}>
          <nav className='py-6 space-y-4'>
            <Link  className='block px-6 py-2 hover:bg-emerald-600 transition-colors'>Dashboard</Link>
            <Link  className='block px-6 py-2 hover:bg-emerald-600 transition-colors'>Products</Link>
            <Link  className='block px-6 py-2 hover:bg-emerald-600 transition-colors'>Orders</Link>
            <Link  className='block px-6 py-2 hover:bg-emerald-600 transition-colors'>Users</Link>
            <Link  className='block px-6 py-2 hover:bg-emerald-600 transition-colors'>Settings</Link>
          </nav>
        </aside>

        
        <div className='flex-1 flex flex-col'>
          
          <div className='bg-gray-100 p-4'>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='p-2 hover:bg-gray-200 rounded-lg transition-colors text-2xl'
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>
          </div>

          
          <main className='flex-1 overflow-y-auto p-8 bg-gray-50'>
            <h1 className='text-3xl font-bold text-gray-800'>Welcome to Admin</h1>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Admin