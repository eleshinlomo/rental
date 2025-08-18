
import { FaHome, FaEnvelope, FaFileSignature, FaBell, FaMoneyBillWave } from 'react-icons/fa';
import { MdEvStation } from 'react-icons/md';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-indigo-800 mb-6">
          Simplify Your Rental Experience
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          The all-in-one platform connecting landlords and tenants with powerful tools for seamless property management.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
            Get Started - It's Free
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-all">
            See Demo
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Powerful Features for Landlords & Tenants
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard 
            icon={<FaMoneyBillWave className="text-indigo-600 text-4xl" />}
            title="Seamless Rent Payments"
            description="Secure online payments with automatic tracking and receipts. Tenants can pay directly through the platform."
          />
          
          {/* Feature 2 */}
          <FeatureCard 
            icon={<FaEnvelope className="text-indigo-600 text-4xl" />}
            title="Integrated Messaging"
            description="Direct communication between landlords and tenants with email notifications and message history."
          />
          
          {/* Feature 3 */}
          <FeatureCard 
            icon={<FaFileSignature className="text-indigo-600 text-4xl" />}
            title="Digital Contracts"
            description="Generate, sign, and store rental agreements digitally with legally binding e-signatures."
          />
          
          {/* Feature 4 */}
          <FeatureCard 
            icon={<FaBell className="text-indigo-600 text-4xl" />}
            title="Rent Due Alerts"
            description="Automated reminders for upcoming and overdue payments with customizable notification settings."
          />
          
          {/* Feature 5 */}
          <FeatureCard 
            icon={<MdEvStation className="text-indigo-600 text-4xl" />}
            title="Eviction Notices"
            description="Generate proper eviction notices with templates that comply with local regulations."
          />
          
          {/* Feature 6 */}
          <FeatureCard 
            icon={<FaHome className="text-indigo-600 text-4xl" />}
            title="Property Management"
            description="Track multiple properties, tenants, and payments all in one dashboard."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Rental Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of landlords and tenants who are already enjoying stress-free property management.
          </p>
          <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all">
            Sign Up Now - Free 30-Day Trial
          </button>
        </div>
      </div>
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

export default LandingPage;