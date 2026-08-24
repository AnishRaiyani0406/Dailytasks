import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    price: '₹120 / kg',
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Organic Milk 1L',
    price: '₹65',
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    name: 'Whole Wheat Bread',
    price: '₹40',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    name: 'Fresh Carrots Pack',
    price: '₹50 / kg',
    category: 'Vegetables',
    image: 'https://imgs.search.brave.com/RcsKRqb4gXRAwHTtx07twN2IH_b3YDiNWprJljpxbKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzgy/Nzc2NTUvcGV4ZWxz/-cGhvdG8tMzgyNzc2/NTUvZnJlZS1waG90/by1vZi1mcmVzaC1v/cmdhbmljLWNhcnJv/dHMtd2l0aC1ncmVl/bi10b3BzLmpwZWc_/Y3M9dGlueXNyZ2Im/ZHByPTEmdz01MDA'
  }
]

const Home = () => {
  // State to track selected product for modal
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleAddToCart = (product, e) => {
    e.stopPropagation() // Prevents opening the modal when clicking Add to Cart
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <section>
      <header className='bg-emerald-300 p-2'>
        <div className='flex justify-between items-center px-6 py-2'>
          <h1 className='text-3xl font-bold text-white'>Grocery</h1>

          <div className='flex gap-20 items-center'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/about' className='hover:underline'>About</Link>
            <Link to='/product' className='hover:underline'>Product</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className='bg-emerald-50 py-20 px-6 text-center h-auto w-full'>
          <div>
            <h2 className='text-3xl font-semibold text-gray-700'>Buy Fresh Vegetable From Home</h2>
            <p className='text-xl text-gray-600 mt-4'>
              Shop fresh organic produce, everyday essentials, and daily items at unbeatable prices.
            </p>
          </div>

          <div className='flex justify-center gap-4 mt-5'>
            <Link to='/product' className='bg-emerald-400 rounded-2xl p-3 text-white hover:bg-emerald-700 transition-colors'>
              Buy Product
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className='max-w-7xl mx-auto px-6 py-12'>
          <div className='flex justify-between items-center mb-8'>
            <h3 className='text-2xl font-bold text-gray-800'>Featured Products</h3>
            <Link to='/product' className='text-emerald-600 hover:underline font-medium'>
              View All &rarr;
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col cursor-pointer'
              >
                <div className='h-48 w-full overflow-hidden bg-gray-100'>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>

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
                    <button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className='bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      
      {selectedProduct && (
        <div 
          onClick={() => setSelectedProduct(null)}
          className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className='bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative'
          >
            
            <button 
              onClick={() => setSelectedProduct(null)}
              className='absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10'
            >
              ✕
            </button>

            
            <div className='h-56 w-full bg-gray-100'>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className='w-full h-full object-cover'
              />
            </div>

            
            <div className='p-6'>
              <span className='text-xs font-semibold text-emerald-600 uppercase tracking-wider'>
                {selectedProduct.category}
              </span>
              <h3 className='text-2xl font-bold text-gray-800 mt-1 mb-2'>
                {selectedProduct.name}
              </h3>
              <p className='text-gray-600 text-sm mb-6'>
                Freshly sourced {selectedProduct.name.toLowerCase()} delivered directly to your doorstep with quality assurance.
              </p>

              <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                <span className='text-2xl font-bold text-gray-900'>
                  {selectedProduct.price}
                </span>
                <button 
                  onClick={(e) => {
                    handleAddToCart(selectedProduct, e)
                    setSelectedProduct(null)
                  }}
                  className='bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-lg transition-colors'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  )
}

export default Home