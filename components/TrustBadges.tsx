import { FaPlay } from "react-icons/fa"
import { scrollToSection } from "./Common"

const TrustBadges = ()=>{

    return (

         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 text-left">
                    <h1 className="text-5xl font-bold text-indigo-800 mb-6">
                      Simplify Your <span className="text-indigo-600">Rental Experience</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10">
                      The all-in-one platform connecting landlords and tenants with powerful tools for seamless property management. Save time, reduce stress, and automate your rental workflow.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex-1"
                       onClick={()=>scrollToSection('waitlist')}
                      >
                        Get Started - It&apos;s Free
                      </button>
                      <button className="border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-all flex-1 flex items-center justify-center gap-2"
                       onClick={()=>scrollToSection('product-video')}
                      >
                        <FaPlay /> See Demo
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex -space-x-2">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                          className="w-10 h-10 rounded-full border-2 border-white" 
                          alt="User" 
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                          className="w-10 h-10 rounded-full border-2 border-white" 
                          alt="User" 
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                          className="w-10 h-10 rounded-full border-2 border-white" 
                          alt="User" 
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-gray-600 text-sm">500+ Landlords & Tenants can&apos;t wait</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-gray-600 text-sm ml-1">4.9/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 relative">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                
                      <video src='/videos/rentease_video2.mp4' className='w-full h-auto' 
                      playsInline
                          loop 
                          muted 
                          controls 
                          autoPlay
                       />
            
                    </div>
                  </div>
                </div>
    )
}

export default TrustBadges