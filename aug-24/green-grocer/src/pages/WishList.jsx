import React from 'react'
import { Link } from 'react-router-dom'

const WISHLIST_PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    price: '₹120 / kg',
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    name: 'Fresh Carrots Pack',
    price: '₹50 / kg',
    category: 'Vegetables',
    image: 'https://images.pexels.com/photos/38277655/pexels-photo-38277655/free-photo-of-fresh-organic-carrots-with-green-tops.jpeg?cs=srgb&dl=pexels-photo-38277655.jpg&w=500'
  }
]

const WishList = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-12'>
      <div className='flex justify-between items-center mb-8'>
        <h3 className='text-2xl font-bold text-gray-800'>Wishlist Products</h3>
        <span className='text-emerald-600 font-medium'>
          {WISHLIST_PRODUCTS.length} Items Saved
        </span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {WISHLIST_PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col relative'
          >
            {/* Remove Button */}
            <button 
              className='absolute top-3 right-3 bg-white/90 hover:bg-red-50 text-gray-400 hover:text-red-500 w-7 h-7 rounded-full shadow-sm flex items-center justify-center text-sm transition-colors z-10'
              title='Remove from wishlist'
            >
              ✕
            </button>

            {/* Product Image */}
            <div className='h-48 w-full overflow-hidden bg-gray-100'>
              <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Product Details */}
            <div className='p-4 flex flex-col justify-between '>
              <div>
                <span className='text-xs font-semibold text-emerald-600 uppercase tracking-wider'>
                  {product.category}
                </span>
                <h4 className='text-lg font-semibold text-gray-800 mt-1 mb-2'>
                  {product.name}
                </h4>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <span className='text-lg font-bold text-gray-900'>
                  {product.price}
                </span>
               
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WishList