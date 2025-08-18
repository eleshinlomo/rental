
// components/Messaging.tsx
import { useState } from 'react';
import { FiSend, FiMail, FiUser, FiChevronLeft } from 'react-icons/fi';

type Message = {
  id: number;
  sender: 'me' | 'them';
  text: string;
  timestamp: string;
};

type Conversation = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: boolean;
  messages: Message[];
};

const Messaging = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: 'John Smith (Apartment 4B)',
      avatar: 'JS',
      lastMessage: 'The faucet is still leaking...',
      unread: true,
      messages: [
        { id: 1, sender: 'them', text: 'Hi, the faucet in the kitchen is leaking.', timestamp: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Thanks for letting me know. I\'ll send a plumber tomorrow.', timestamp: '11:15 AM' },
        { id: 3, sender: 'them', text: 'The faucet is still leaking after the plumber came.', timestamp: '3:45 PM' },
      ],
    },
    {
      id: 2,
      name: 'Sarah Johnson (House 22)',
      avatar: 'SJ',
      lastMessage: 'Rent has been transferred',
      unread: false,
      messages: [
        { id: 1, sender: 'them', text: 'Just wanted to confirm that the rent has been transferred.', timestamp: '9:00 AM' },
        { id: 2, sender: 'me', text: 'Received, thank you!', timestamp: '9:30 AM' },
      ],
    },
  ]);
  
  const [activeConversation, setActiveConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');
  
  const handleSendMessage = () => {
    if (!newMessage.trim() || activeConversation === null) return;
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversation) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            {
              id: conv.messages.length + 1,
              sender: 'me',
              text: newMessage,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ],
          lastMessage: newMessage,
        };
      }
      return conv;
    });
    
    // setConversations(updatedConversations);
    setNewMessage('');
  };

  return (
    <div className="flex h-[600px] bg-white rounded-xl shadow-md overflow-hidden">
      {/* Conversation List */}
      <div className={`w-full md:w-1/3 border-r border-gray-200 ${activeConversation ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <FiMail className="mr-2 text-indigo-600" /> Messages
          </h2>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${activeConversation === conv.id ? 'bg-indigo-50' : ''}`}
              onClick={() => setActiveConversation(conv.id)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mr-3">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-800 truncate">{conv.name}</h3>
                  <p className={`text-sm truncate ${conv.unread ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                    {conv.lastMessage}
                  </p>
                </div>
                {conv.unread && (
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Message View */}
      {activeConversation ? (
        <div className="flex-1 flex flex-col md:block">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <button 
              className="md:hidden mr-2 text-gray-500"
              onClick={() => setActiveConversation(null)}
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mr-3">
              {conversations.find(c => c.id === activeConversation)?.avatar}
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              {conversations.find(c => c.id === activeConversation)?.name}
            </h3>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {conversations.find(c => c.id === activeConversation)?.messages.map(msg => (
              <div
                key={msg.id}
                className={`mb-4 flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${msg.sender === 'me' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg"
                onClick={handleSendMessage}
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <FiMail className="mx-auto text-5xl text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-500 mb-2">Select a conversation</h3>
            <p className="text-gray-400">Choose from your existing conversations or start a new one</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messaging;