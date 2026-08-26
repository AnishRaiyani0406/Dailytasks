import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (

    <div>

         <header className='bg-emerald-300  p-2 '>

            <div className='flex  justify-between items-center px-6 py-2 '>
                 <h1 className='text-3xl font-bold text-white  '>Grocery</h1>

                 <div className='flex gap-20 items-center'>
                    <Link className='hover:underline'>Home</Link>
                    <Link className='hover:underline'>Product</Link>
                    <Link className='hover:underline'>Cart</Link>
                </div>
                
             </div>
        </header>

        <main className='px-6 py-12 max-w-5xl mx-auto w-full'>

          <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm md:col-span-2">

            <form className="flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="enter your email"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Contact No</label>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800 text-sm resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm mt-2"
              >
                Submit Message
              </button>
            </form>
          </section>
        </main>

       
    </div>
  )
}

export default Contact
