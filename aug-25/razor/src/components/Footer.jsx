import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <footer className='bg-gray-900 text-gray-300 pt-12 pb-6'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          
         
          <div class = "brandinfo">
            <h3 className='text-2xl font-bold text-emerald-400 mb-3'>Grocery</h3>
            <p className='text-sm text-gray-400 leading-relaxed'>
              Your trusted online grocery store delivering fresh farm produce and daily household essentials directly to your doorstep.
            </p>
          </div>

         
          <div class = "pagelink">
            <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/' className='hover:text-emerald-400 transition-colors'>Home</Link></li>
              <li><Link to='/about' className='hover:text-emerald-400 transition-colors'>About Us</Link></li>
              <li><Link to='/product' className='hover:text-emerald-400 transition-colors'>Products</Link></li>
              <li><a href='#contact' className='hover:text-emerald-400 transition-colors'>Contact Us</a></li>
            </ul>
          </div>

          
          <div class ='contact'>
            <h4 className='text-lg font-semibold text-white mb-4'>Contact Us</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>📍 123 Fresh Market Street, Suite 400</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@grocery.com</li>
              <li>⏰ Mon - Sat: 8:00 AM - 9:00 PM</li>
            </ul>
          </div>

          
          <div class="socialmedia">
            <h4 className='text-lg font-semibold text-white mb-4'>Follow Us</h4>
            <div className='flex gap-4'>
              <a 
                href='https://facebook.com' 
                target='_blank' 
                rel='noreferrer' 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors'
              >
                FB
              </a>
              <a 
                href='https://twitter.com' 
                target='_blank' 
                rel='noreferrer' 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors'
              >
                X
              </a>
              <a 
                href='https://instagram.com' 
                target='_blank' 
                rel='noreferrer' 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors'
              >
                IG
              </a>
              <a 
                href='https://linkedin.com' 
                target='_blank' 
                rel='noreferrer' 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors'
              >
                IN
              </a>
            </div>
          </div>

        </div>

        
        <div className='border-t border-gray-800 pt-6 text-center text-sm text-gray-500'>
          © 2026 Grocery Store. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer
