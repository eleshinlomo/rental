
// components/RentDue.tsx
import { FiCalendar, FiDollarSign, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const RentDue = () => {
  const months = [
    { month: 'January', amount: 1200, status: 'paid' },
    { month: 'February', amount: 1200, status: 'paid' },
    { month: 'March', amount: 1200, status: 'paid' },
    { month: 'April', amount: 1200, status: 'paid' },
    { month: 'May', amount: 1200, status: 'due', dueDate: 'May 5, 2025' },
    { month: 'June', amount: 1200, status: 'upcoming' },
    { month: 'July', amount: 1200, status: 'upcoming' },
    { month: 'August', amount: 1200, status: 'upcoming' },
    { month: 'September', amount: 1200, status: 'upcoming' },
    { month: 'October', amount: 1200, status: 'upcoming' },
    { month: 'November', amount: 1200, status: 'upcoming' },
    { month: 'December', amount: 1200, status: 'upcoming' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FiDollarSign className="mr-2 text-indigo-600" /> Rent Due
        </h2>
        <p className="text-gray-600">Track your rental payments and due dates</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-600 font-medium">Total Paid</h3>
              <FiCheckCircle className="text-green-500 text-xl" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-2">$4,800</p>
            <p className="text-sm text-gray-500 mt-1">4 months</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-600 font-medium">Current Due</h3>
              <FiAlertTriangle className="text-yellow-500 text-xl" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-2">$1,200</p>
            <p className="text-sm text-gray-500 mt-1">Due Dec 5, 2025</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-600 font-medium">Upcoming</h3>
              <FiCalendar className="text-blue-500 text-xl" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mt-2">$8,400</p>
            <p className="text-sm text-gray-500 mt-1">7 months</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {months.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'paid' ? 'bg-green-100 text-green-800' :
                      item.status === 'due' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status === 'paid' ? 'Paid' : item.status === 'due' ? 'Due' : 'Upcoming'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.status === 'paid' ? 'Paid on time' : item.dueDate || `${item.month} 5, 2025`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RentDue;