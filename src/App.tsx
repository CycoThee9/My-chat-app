import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [conversationId] = useState('conv-123'); // Replace with actual
  const [currentUserId] = useState('user-123'); // Replace with actual
  const [onlineUsers, setOnlineUsers] = useState(new Set<string>());

  if (!token) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">ChatApp</h1>
          <input
            type="text"
            placeholder="Enter your token"
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {
              if (token) localStorage.setItem('token', token);
            }}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <ChatWindow
      token={token}
      conversationId={conversationId}
      currentUserId={currentUserId}
      conversationName="John Doe"
      onlineUsers={onlineUsers}
    />
  );
};

export default App;