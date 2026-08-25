import React from 'react'
import { Link } from 'react-router-dom'

const CHECKOUT_ITEMS = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    price: '₹120',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    price: '₹40',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60'
  }
];




const CheckOut = () => {

  return (

    <section className='min-h-screen bg-gray-50 flex flex-col justify-start'>

    <header className='bg-emerald-300 p-2'>
        <div className='flex justify-between items-center px-6 py-2'>

          <h1 className='text-3xl font-bold text-white'>Grocery</h1>

          <div className='flex gap-10 sm:gap-20 items-center'>
            <Link  className='hover:underline'>Home</Link>
            <Link  className='hover:underline'>Product</Link>
            <Link  className='hover:underline'>Cart</Link>
          </div>

        </div>
    </header>

    <main className='px-6 py-8  max-w-7xl mx-auto w-full '>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Checkout</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

            <section className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm'>

                <h2 className='text-xl font-semibold text-gray-800 border-b border-gray-100 mb-4 pb-3'>
                    Order Summary ({CHECKOUT_ITEMS.length} items)
                </h2>

                <div className='flex flex-col gap-4'>
              {CHECKOUT_ITEMS.map((item) => (
                <div 
                  key={item.id} 
                  className='flex items-center gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/50'
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className='w-16 h-16 object-cover rounded-md border border-gray-200' 
                  />
                  <div >
                    <h3 className='font-semibold text-gray-800'>{item.name}</h3>
                    <p className='text-sm text-gray-500'>Qty: {item.quantity}</p>
                  </div>
                  <span className='font-bold text-gray-900'>{item.price}</span>
                </div>
              ))}
            </div>

            </section>

            <section className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-fit'>
            <div>
              <h2 className='text-xl font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-4'>
                Payment Details
              </h2>

              <div className="flex flex-col gap-3 text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800">₹160</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="text-emerald-600 font-medium">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-medium text-gray-800">₹0</span>
                </div>


                <div className="border-t border-gray-200 pt-3 mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Payable</span>
                  <span className="text-2xl font-bold text-emerald-600">₹160</span>
                </div>
                
              </div>
            </div>

            
            <div className="mt-8">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm">
                Proceed to Payment
              </button>
            </div>
          </section>


        </div>

        
    </main>

    </section>

    


  )

}

export default CheckOut
