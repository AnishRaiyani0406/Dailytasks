import {Link} from 'react-router-dom' 

function Feedback(){

    return(

        <div>

            <header className='bg-emerald-300  p-2 '>

                <div className='flex  justify-between items-center px-6 py-2 '>
                    <h1 className='text-3xl font-bold text-white  '>Grocery</h1>

                    <div className='flex gap-20 items-center'>
                        <Link className='hover:underline'>Home</Link>
                        <Link className='hover:underline'>Product</Link>
                        <Link className='hover:underline'>Contact</Link>
                    </div>
                    
                </div>
            </header>

            <main className='grid grid-cols-2 mt-5 p-6'>

                <section className=''>

                    <h1 className='text-8xl font-medium mb-10 pl-20 '>Tell Us <br/> Your <br />Expierence.</h1>

                    <span className='pl-20 text-2xl '>Tell us about your experince and suggestion to improve it.</span>

                </section>

                <section>
 
                     <form className='flex flex-col'>

                        <label className='text-sm font-semibold text-gray-700' >Name : </label>
                        <input type="text" placeholder='Name' 
                         className = 'w-full px-4 py-2 rounded-lg border border-gray-300 mt-2 mb-1.5'/>

                        <label className='text-sm font-semibold text-gray-700'>E-Mail : </label>
                        <input type="email" placeholder='Enter Your Email' 
                         className = 'w-full px-4 py-2 rounded-lg border border-gray-300 mt-2 mb-1.5'/>
                        
                        <label className='text-sm font-semibold text-gray-700'>Contact No :</label>
                        <input type="tel" placeholder='Enter Your Contact Info'
                         className = 'w-full px-4 py-2 rounded-lg border border-gray-300 mt-2 mb-1.5' />
                        
                        <label className='text-sm font-semibold text-gray-700'>Message :</label>
                        <textarea rows = "4" placeholder='Enter Your Response'
                         className = 'w-full px-4 py-2 rounded-lg border border-gray-300 mt-2 mb-1.5'
                        ></textarea>


                        <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm mt-2'>Submit Your Feedback</button>

                     </form>

                </section>

            </main>


        </div>

    )
}

export default Feedback;