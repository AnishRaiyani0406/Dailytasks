import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    price: '₹120',
    unit: '/ kg',
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    price: '₹40',
    unit: '/pack',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60'
  },
];

function Cart() {
  return (

    <section className="min-h-screen flex flex-col justify-between">

      <header className='bg-emerald-300 p-2'>

        <div className='flex justify-between items-center px-6 py-2'>

          <h1 className='text-3xl font-bold text-white'>Grocery</h1>

          <div className='flex gap-20 items-center'>
            <Link  className='hover:underline'>Home</Link>
            <Link  className='hover:underline'>About</Link>
            <Link  className='hover:underline'>Product</Link>
            <Link  className='hover:underline font-semibold'>Cart</Link>
          </div>

        </div>

      </header>

      <main className="px-6 ">

        <section>

          <h1 className="text-center text-4xl font-semibold mt-6 mb-4">Your Cart (2 Items)</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-9 mt-5'>

            {PRODUCTS.map((product) => (
                
              <div 
                key={product.id} 
                className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between'
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

                  <div className='mt-4'>

                        <span className='text-lg font-bold text-gray-900 block mb-3'>
                        {product.price} {product.unit}
                        </span>

                    <div className="flex gap-2">
                        <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 rounded-md text-sm font-medium transition-colors">
                            Buy Now
                        </button>
                        <button className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border border-red-200">
                            Remove
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className=" ml-auto bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">

            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between items-center text-lg font-semibold border-t border-gray-200 pt-3">
              <span>Total Amount:</span>
              <span className="text-emerald-600 text-2xl font-bold">₹160</span>
            </div>
            <Link 
            to = "/checkout"
            className="block w-full text-center mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
          
        </section>
      </main>

      <Footer />
    </section>
  );
}

export default Cart;