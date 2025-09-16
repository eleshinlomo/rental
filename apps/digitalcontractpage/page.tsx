
// components/DigitalContract.tsx
import { useState } from 'react';
import { FiFileText, FiEdit2, FiDownload, FiUser, FiHome, FiCalendar, FiDollarSign, FiPenTool, FiCheckCircle } from 'react-icons/fi';

const DigitalContract = () => {
  const [step, setStep] = useState<'select' | 'fill' | 'sign' | 'complete'>('select');
  const [contractType, setContractType] = useState<string>('');
  const [formData, setFormData] = useState({
    propertyAddress: '',
    landlordName: '',
    tenantName: '',
    rentAmount: '',
    startDate: '',
    endDate: '',
    terms: '12',
  });
  const [signature, setSignature] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState(false);

  const contractTemplates = [
    { id: 'standard', name: 'Standard Lease Agreement', description: 'Fixed term rental agreement with standard terms' },
    { id: 'month-to-month', name: 'Month-to-Month Agreement', description: 'Flexible rental agreement that renews monthly' },
    { id: 'roommate', name: 'Roommate Agreement', description: 'For shared housing situations' },
    { id: 'commercial', name: 'Commercial Lease', description: 'For business property rentals' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateContract = () => {
    setStep('fill');
  };

  const handleProceedToSign = () => {
    setStep('sign');
  };

  const handleSign = () => {
    // In a real app, this would capture the signature properly
    setSignature('Tenant Signature');
    setStep('complete');
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate PDF generation/download
    setTimeout(() => {
      setIsDownloading(false);
      alert('Contract downloaded successfully!');
    }, 1500);
  };

  const handleNewContract = () => {
    setStep('select');
    setContractType('');
    setFormData({
      propertyAddress: '',
      landlordName: '',
      tenantName: '',
      rentAmount: '',
      startDate: '',
      endDate: '',
      terms: '12',
    });
    setSignature('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FiFileText className="mr-2 text-indigo-600" /> Digital Contracts
        </h2>
        <p className="text-gray-600">Create, sign, and manage rental agreements digitally</p>
      </div>
      
      <div className="p-6">
        {step === 'select' && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Select a Contract Template</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {contractTemplates.map(template => (
                <div
                  key={template.id}
                  className={`p-4 border rounded-lg cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-all ${
                    contractType === template.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                  onClick={() => setContractType(template.id)}
                >
                  <div className="flex items-start">
                    <FiFileText className="text-indigo-600 text-xl mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-gray-800">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className={`px-4 py-2 rounded-lg font-medium ${
                contractType
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!contractType}
              onClick={handleGenerateContract}
            >
              Generate Contract
            </button>
          </div>
        )}
        
        {step === 'fill' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">Fill Contract Details</h3>
              <button
                className="text-sm text-indigo-600 hover:text-indigo-800"
                onClick={() => setStep('select')}
              >
                ← Back to templates
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiHome className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="propertyAddress"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Landlord Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="landlordName"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.landlordName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tenant Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="tenantName"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.tenantName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent Amount</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiDollarSign className="text-gray-400" />
                    </div>
                    <input
                      type="number"
                      name="rentAmount"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.rentAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lease Start Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiCalendar className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      name="startDate"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lease Term (months)</label>
                  <select
                    name="terms"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.terms}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="1">1 month</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setStep('select')}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                onClick={handleProceedToSign}
                disabled={!formData.propertyAddress || !formData.landlordName || !formData.tenantName || !formData.rentAmount || !formData.startDate}
              >
                Proceed to Sign
              </button>
            </div>
          </div>
        )}
        
        {step === 'sign' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">Review & Sign Contract</h3>
              <button
                className="text-sm text-indigo-600 hover:text-indigo-800"
                onClick={() => setStep('fill')}
              >
                ← Back to details
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-center mb-6">RENTAL AGREEMENT</h4>
              
              <div className="space-y-4">
                <p>This Rental Agreement is made this day between:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold">LANDLORD:</h5>
                    <p>{formData.landlordName}</p>
                  </div>
                  <div>
                    <h5 className="font-bold">TENANT:</h5>
                    <p>{formData.tenantName}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold">PROPERTY:</h5>
                  <p>{formData.propertyAddress}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold">MONTHLY RENT:</h5>
                    <p>${formData.rentAmount}</p>
                  </div>
                  <div>
                    <h5 className="font-bold">LEASE TERM:</h5>
                    <p>{formData.terms} months</p>
                  </div>
                  <div>
                    <h5 className="font-bold">START DATE:</h5>
                    <p>{new Date(formData.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h5 className="font-bold">STANDARD TERMS:</h5>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Rent is due on the 1st of each month</li>
                    <li>Late fee of $50 after 5 days</li>
                    <li>Security deposit equal to one month's rent</li>
                    <li>No smoking inside the property</li>
                    <li>Tenant responsible for utilities</li>
                    <li>Tenant must maintain renters insurance</li>
                    <li>No unauthorized subletting</li>
                    <li>Landlord must provide 24 hours notice before entering</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold mb-4">LANDLORD SIGNATURE</h5>
                  <div className="h-20 border-b-2 border-black"></div>
                  <p className="mt-1 text-sm">Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <h5 className="font-bold mb-4">TENANT SIGNATURE</h5>
                  {signature ? (
                    <div className="h-20 flex items-center justify-center text-indigo-600 font-bold">
                      {signature}
                    </div>
                  ) : (
                    <button
                      className="w-full h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                      onClick={handleSign}
                    >
                      <FiPenTool className="mr-2" /> Click to Sign
                    </button>
                  )}
                  <p className="mt-1 text-sm">Date: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setStep('fill')}
              >
                Back
              </button>
              <div className="space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 inline-flex items-center"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    'Processing...'
                  ) : (
                    <>
                      <FiDownload className="mr-2" /> Download PDF
                    </>
                  )}
                </button>
                {!signature && (
                  <button
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                    onClick={handleSign}
                  >
                    Sign Contract
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {step === 'complete' && (
          <div className="text-center py-12">
            <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contract Signed Successfully!</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Your digital contract has been signed and stored securely. Both parties will receive a copy via email.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium inline-flex items-center"
                onClick={handleDownload}
              >
                <FiDownload className="mr-2" /> Download Contract
              </button>
              <button
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                onClick={handleNewContract}
              >
                Create New Contract
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalContract;