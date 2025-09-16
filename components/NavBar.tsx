import Link from 'next/link'
import { scrollToSection } from './Common'
import Image from 'next/image'


const NavBar = ()=>{

    return (

        <div>
         
         <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="relative h-10 w-10 flex items-center">
            <Image src='/rental_ease_logo.png' alt='logo' fill  className="text-indigo-600 text-3xl mr-2" />
            <span className="text-xl ml-12 font-bold text-indigo-800">Rentalora</span>
        </div>
          <div className="hidden md:flex gap-6">
            <button onClick={()=>scrollToSection("features")} className="text-gray-600 hover:text-indigo-600">Features</button>
            <button onClick={()=>scrollToSection("how-it-works")} className="text-gray-600 hover:text-indigo-600">How It Works</button>
            <button onClick={()=>scrollToSection("testimonials")} className="text-gray-600 hover:text-indigo-600">Testimonials</button>
            <button onClick={()=>scrollToSection("pricing")} className="text-gray-600 hover:text-indigo-600">Pricing</button>
          </div>
    
        <div className='flex gap-3'>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow transition-all"
                onClick={()=>scrollToSection('waitlist')}
                >
                Sign up
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow transition-all"
                onClick={()=>scrollToSection('waitlist')}
                >
                Sign in
            </button>
        </div>
        </div>
      </nav>
        </div>
    )
}

export default NavBar