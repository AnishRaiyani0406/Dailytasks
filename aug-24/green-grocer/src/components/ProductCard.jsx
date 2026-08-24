import React from 'react'

const ProductCard = ({ product, onSelect, onAddToCart }) => {
  return (
    <div 
      onClick={() => onSelect(product)}
      className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col cursor-pointer group'
    >
    
        <div className='h-48 w-full overflow-hidden bg-gray-100 relative'>
        <img 
          src={product.image} 
          alt={product.name} 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
        <span className='absolute top-3 left-3 bg-white/90 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm'>
          {product.category}
        </span>
      </div>

      
      <div className='p-4 flex flex-col  justify-between'>
        <div>
          <h4 className='text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-1'>
            {product.name}
          </h4>
          <p className='text-xs text-gray-500 mt-1 line-clamp-2'>
            {product.description}
          </p>
        </div>

        <div className='flex justify-between items-center mt-4 pt-2 border-t border-gray-50'>
          <span className='text-lg font-bold text-gray-900'>
            {product.price}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation() // Stops card click from firing (doesn't open modal)
              onAddToCart(product)
            }}
            className='bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard