import React, { useState } from 'react';


const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Fresh Alphonso Mangoes', category: 'Fruits', price: 499, unit: '1 kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80' },
  { id: 2, name: 'Organic Bananas', category: 'Fruits', price: 60, unit: '1 dozen', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&q=80' },
  { id: 3, name: 'Red Kashmir Apples', category: 'Fruits', price: 180, unit: '1 kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80' },
  { id: 4, name: 'Fresh Green Broccoli', category: 'Vegetables', price: 90, unit: '500g', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&q=80' },
  { id: 5, name: 'Organic Carrots', category: 'Vegetables', price: 45, unit: '500g', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80' },
  { id: 6, name: 'Fresh Tomatoes', category: 'Vegetables', price: 35, unit: '1 kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80' },
  { id: 7, name: 'Farm Fresh Spinach (Palak)', category: 'Vegetables', price: 25, unit: '1 bunch', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80' },
  { id: 8, name: 'Full Cream Cow Milk', category: 'Dairy', price: 66, unit: '1 Litre', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80' },
  { id: 9, name: 'Fresh Paneer (Cottage Cheese)', category: 'Dairy', price: 120, unit: '200g', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80' },
  { id: 10, name: 'Fresh Strawberries', category: 'Fruits', price: 150, unit: '250g box', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80' },
  { id: 11, name: 'Green Bell Peppers (Capsicum)', category: 'Vegetables', price: 50, unit: '500g', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80' },
  { id: 12, name: 'Fresh Whole Eggs', category: 'Dairy', price: 85, unit: '6 pcs', image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&q=80' },
  { id: 13, name: 'Organic Onions', category: 'Vegetables', price: 40, unit: '1 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?w=500&q=80' },
  { id: 14, name: 'Fresh Potatoes', category: 'Vegetables', price: 30, unit: '1 kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80' },
  { id: 15, name: 'Fresh Pomegranates', category: 'Fruits', price: 210, unit: '1 kg', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&q=80' },
  { id: 16, name: 'Artisanal Whole Wheat Bread', category: 'Bakery', price: 55, unit: '400g', image: 'https://images.unsplash.com/photo-1585478259715-876a6a81ae08?w=500&q=80' },
  { id: 17, name: 'Green Grapes', category: 'Fruits', price: 90, unit: '500g', image: 'https://images.unsplash.com/photo-1596368708380-42fc2641e4ce?w=500&q=80' },
  { id: 18, name: 'Fresh Mushrooms', category: 'Vegetables', price: 65, unit: '200g pack', image: 'https://images.unsplash.com/photo-1504470695779-75300268aa0e?w=500&q=80' },
  { id: 19, name: 'Fresh Cucumbers', category: 'Vegetables', price: 30, unit: '500g', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&q=80' },
  { id: 20, name: 'Organic Lemons', category: 'Vegetables', price: 40, unit: '250g', image: 'https://images.unsplash.com/photo-1534531141161-e41d133a8979?w=500&q=80' },
  { id: 21, name: 'Fresh Watermelon', category: 'Fruits', price: 80, unit: '1 pc (approx 2kg)', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80' },
  { id: 22, name: 'Fresh Curd (Dahi)', category: 'Dairy', price: 40, unit: '400g tub', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },
  { id: 23, name: 'Sweet Oranges (Mosambi)', category: 'Fruits', price: 120, unit: '1 kg', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80' },
  { id: 24, name: 'Fresh Cauliflower', category: 'Vegetables', price: 45, unit: '1 pc', image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&q=80' },
];

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

 
  const totalPages = Math.ceil(SAMPLE_PRODUCTS.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = SAMPLE_PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🥦 Fresh Groceries</h1>
            <p className="text-gray-500 text-sm mt-1">
              Showing <span className="font-semibold text-gray-800">{indexOfFirstItem + 1}</span> to{' '}
              <span className="font-semibold text-gray-800">
                {Math.min(indexOfLastItem, SAMPLE_PRODUCTS.length)}
              </span>{' '}
              of <span className="font-semibold text-gray-800">{SAMPLE_PRODUCTS.length}</span> products
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col ">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-xs text-gray-400">{product.unit}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">{product.name}</h3>
                
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-xl shadow-sm">
            
            
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>

            
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Page <span className="font-semibold">{currentPage}</span> of{' '}
                  <span className="font-semibold">{totalPages}</span>
                </p>
              </div>

              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  
                  
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ‹ Prev
                  </button>

                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold transition-colors ${
                        currentPage === page
                          ? 'z-10 bg-emerald-600 text-white  focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
                          : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next ›
                  </button>
                </nav>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}