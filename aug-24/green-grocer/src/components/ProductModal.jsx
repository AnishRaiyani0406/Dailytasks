import React from 'react'

const ProductModal = ({ product, onClose, onAddToCart }) => {
  
  if (!product) return null

  return (
    
    <div 
      onClick={onClose}
      className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
    >
      
      <div 
        onClick={(e) => e.stopPropagation()} 
        className='bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative'
      >
        
        <button 
          onClick={onClose}
          className='absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center font-bold'
        >
          ✕
        </button>

        
        <div className='h-64 w-full bg-gray-100 relative'>
          <img 
            src={product.image} 
            alt={product.name} 
            className='w-full h-full object-cover'
          />
          <span className='absolute bottom-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>
            {product.category}
          </span>
        </div>

        
        <div className='p-6'>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>
            {product.name}
          </h3>
          
          <p className='text-gray-600 text-sm leading-relaxed mb-6'>
            {product.description}
          </p>

          
          <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
            <div>
              <span className='text-xs text-gray-400 block uppercase font-medium'>Price</span>
              <span className='text-2xl font-extrabold text-gray-900'>
                {product.price}
              </span>
            </div>

            <button 
              onClick={() => {
                onAddToCart(product)
                onClose()
              }}
              className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow transition-colors'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal