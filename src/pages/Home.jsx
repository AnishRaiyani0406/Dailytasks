import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

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
    image: 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?w=500&auto=format&fit=crop&q=60'
  }
]

const Home = () => {
  return (
    
    <section>

        <header className='bg-emerald-300  p-2 '>

           

            <div className='flex  justify-between items-center px-6 py-2 '>
                 <h1 className='text-3xl font-bold text-white  '>Grocery</h1>

                 <div className='flex gap-20 items-center'>
                    <Link className='hover:underline'>Home</Link>
                    <Link className='hover:underline'>About</Link>
                    <Link className='hover:underline'>Product</Link>
                </div>
             </div>
        </header>


        <main>
          <section  className='bg-emerald-50 py-20 px-6 text-center h-auto w-full'>

            <div>
                <h2 className='text-3xl font-semibold text-gray-700'>Buy Fresh Vegetable From Home</h2>
                <p className='text-xl text-gray-600 mt-4'>
                  Shop fresh organic produce, everyday essentials, and daily items at unbeatable prices.
                 </p>
            </div>

            <div className='flex justify-center gap-4 mt-5'>
                    <Link className='bg-emerald-400 rounded-2xl p-3  hover:bg-emerald-700'>Buy Product</Link>
            </div>
                
          </section>

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
                className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col'
              >
                
                <div className='h-48 w-full overflow-hidden bg-gray-100'>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>

                
                <div className='p-4 flex flex-col  justify-between'>
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
                    <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        </main>

        <Footer />



    </section>
  )
}

export default Home
