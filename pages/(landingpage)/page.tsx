import { FaHome, FaEnvelope, FaFileSignature, FaBell, FaMoneyBillWave, FaPlay, FaCheck, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { MdEvStation, MdOutlineSupportAgent } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import ScrollTopButton from '../../components/scrollTopButton';
import { createWaitList, CreateWaitListProps } from '../../components/api';
import { useEffect, useState } from 'react';
import RentPayment from '../(apps)/rentpaymentpage/page';
import RentDue from '../(apps)/rentduepage/page';
import Messaging from '../messagingpage/page';
import DigitalContract from '../(apps)/digitalcontractpage/page';
import Image from 'next/image';
// import rentaleaseVideo from '/videos/rentease_video.mp4'

const LandingPage = () => {

  const [firstname, setFistName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('Enter your email below')
  const [error, setError] = useState('')
  const [color, setColor] = useState('gray')

  const scrollToSection = (id: string)=>{
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }



  const handleCreateWaitlist = async () => {
  setError('')
  
  // Basic validation for empty email
  if (!email) {
    setError('Please enter an email')
    return
  }
  

  // Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address')
    return
  }
  
  const payload: CreateWaitListProps = {
    email
  }
  
  try {
    const response = await createWaitList(payload)
    console.log('RESPONSE', response)
    
    if (response.ok) {
      setMessage(response.message)
      setEmail('')
      setError('')
    } else {
      setError(response.error)
    }
  } catch (error) {
    setError('An unexpected error occurred. Please try again.')
    console.error('Error creating waitlist:', error)
  }
}

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
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
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow transition-all"
           onClick={()=>scrollToSection('waitlist')}
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
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
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-6">Trusted by leading property managers and landlords</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <img src="https://logo.clearbit.com/realtor.com" alt="Realtor" className="h-8" />
            <img src="https://logo.clearbit.com/zillow.com" alt="Zillow" className="h-8" />
            <img src="https://logo.clearbit.com/redfin.com" alt="Redfin" className="h-8" />
            <img src="https://logo.clearbit.com/apartments.com" alt="Apartments.com" className="h-8" />
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="py-20 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">See Rentalora in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our demo to see how Rentalora can transform your rental management process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden" id='product-video'>
            <div className="aspect-w-16 aspect-h-9">
              {/* Product Video*/}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <video src='/videos/rentease_video.mp4' className='w-full h-auto' 
                  playsInline
                  loop 
                  muted 
                  controls 
                  autoPlay 
                  />
                  <p className="text-gray-600">Product demo video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20" id="features">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Powerful Features for Landlords & Tenants
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Everything you need to manage your rental properties efficiently
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <FeatureCard 
            icon={<FaMoneyBillWave className="text-indigo-600 text-4xl" />}
            title="Seamless Rent Payments"
            description="Secure online payments with automatic tracking and receipts. Tenants can pay directly through the platform with multiple payment options."
          />
          
          {/* Feature 2 */}
          <FeatureCard 
            icon={<FaEnvelope className="text-indigo-600 text-4xl" />}
            title="Integrated Messaging"
            description="Direct communication between landlords and tenants with email notifications and message history. Never lose track of important conversations."
          />
          
          {/* Feature 3 */}
          <FeatureCard 
            icon={<FaFileSignature className="text-indigo-600 text-4xl" />}
            title="Digital Contracts"
            description="Generate, sign, and store rental agreements digitally with legally binding e-signatures. Templates for all 50 states included."
          />
          
          {/* Feature 4 */}
          <FeatureCard 
            icon={<FaBell className="text-indigo-600 text-4xl" />}
            title="Rent Due Alerts"
            description="Automated reminders for upcoming and overdue payments with customizable notification settings for both parties."
          />
          
          {/* Feature 5 */}
          <FeatureCard 
            icon={<MdEvStation className="text-indigo-600 text-4xl" />}
            title="Eviction Notices"
            description="Generate proper eviction notices with templates that comply with local regulations. Step-by-step guidance through the process."
          />
          
          {/* Feature 6 */}
          <FeatureCard 
            icon={<FaHome className="text-indigo-600 text-4xl" />}
            title="Property Management"
            description="Track multiple properties, tenants, and payments all in one dashboard. Generate reports for taxes and accounting."
          />
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">And so much more...</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Maintenance Requests</h4>
                <p className="text-gray-600 text-sm">Tenants can submit requests with photos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Document Storage</h4>
                <p className="text-gray-600 text-sm">Secure cloud storage for all rental documents</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Renters Insurance</h4>
                <p className="text-gray-600 text-sm">Integrated insurance options for tenants</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Credit Reporting</h4>
                <p className="text-gray-600 text-sm">Optional positive rent payment reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-indigo-200">Properties listed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$0+</div>
              <p className="text-indigo-200">Rent Processed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-indigo-200">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50</div>
              <p className="text-indigo-200">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Rentalora will save me 10+ hours per month on rent collection and paperwork. My tenants love easy payment system."
              name="Sarah Johnson"
              role="Property Manager"
              imgSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
            <TestimonialCard 
              quote="As a tenant, I appreciate how transparent and easy the demo platform is. Paying rent takes seconds and I get instant receipts."
              name="Michael Chen"
              role="Tenant"
              imgSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
            <TestimonialCard 
              quote="The digital contracts feature alone is worth the subscription. No more printing, scanning, or mailing documents."
              name="David Rodriguez"
              role="Landlord"
              imgSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works for you. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Landlord"
              price="10%"
              period="/month(each property)"
              description="Perfect for individual landlords with 1-2 properties"
              features={[
                "Up to 2 properties",
                "Basic rent collection",
                "Digital contracts",
                "Email support",
                "Maintenance requests",
              ]}
              highlighted={false}
            />
            <PricingCard 
              title="Professional"
              price="8%"
              period="/month(each property)"
              description="For landlords with multiple properties"
              features={[
                "Up to 10 properties",
                "Advanced reporting",
                "Maintenance requests",
                "Priority support"
              ]}
              highlighted={true}
            />
            <PricingCard 
              title="Enterprise"
              price="5%"
              period="/month(each property)"
              description="For property management companies"
              features={[
                "Up to 30 properties",
                "Team accounts",
                "API access",
                "Dedicated account manager"
              ]}
              highlighted={false}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <FAQItem 
              question="Is there a long-term contract?"
              answer="Yes, all plans can be tailored to be either month-to-month or year-to-year. Landlord can choose if lease can be canceled at anytime."
            />
            <FAQItem 
              question="How do tenants pay rent through the platform?"
              answer="Tenants can pay via credit/debit card, ACH bank transfer, or Apple/Google Pay. We support all major payment methods."
            />
            <FAQItem 
              question="Is my data secure?"
              answer="Absolutely. We use bank-level 256-bit encryption and comply with all financial data protection regulations."
            />
            <FAQItem 
              question="Can I try before I buy?"
              answer="Yes! Our Starter plan is free for 30 days with basic features. You can upgrade anytime to access more advanced features."
            />
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Rental Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of landlords and tenants who are already enjoying stress-free property management.
          </p>
          {/* Message */}
          <p className={`font-extrabold pb-2 text-sm  ${error ? 'text-red-400' : ''}`}>{error ? error : message}</p>

          <div className="max-w-md mx-auto bg-white rounded-lg p-1 shadow-lg" id='waitlist'>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
                required
              />
              <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-800 transition-all whitespace-nowrap"
               onClick={handleCreateWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          
          <p className="text-indigo-200 mt-4 text-sm">
            Get early access and exclusive discounts when we launch.
          </p>
        </div>
      </div>

      {/* Footer */}
      
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Rentalora. All rights reserved.</p>
          </div>

          <ScrollTopButton />
         
        </div>
      
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, name, role, imgSrc }: { quote: string, name: string, role: string, imgSrc: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      
    </div>
  );
};

const PricingCard = ({ title, price, period, description, features, highlighted }: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[], 
  highlighted: boolean 
}) => {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden ${highlighted ? 'border-2 border-indigo-600 transform md:-translate-y-4' : 'border border-gray-200'}`}>
      <div className={`p-6 ${highlighted ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className={`ml-1 ${highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>{period}</span>
        </div>
        <p className={`mb-6 ${highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>{description}</p>
        <button className={`w-full py-3 rounded-lg font-bold ${highlighted ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'} transition-colors`}>
          Get Started
        </button>
      </div>
      <div className="bg-gray-50 p-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <FaCheck className={`mt-1 mr-2 flex-shrink-0 ${highlighted ? 'text-indigo-600' : 'text-gray-500'}`} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default LandingPage;