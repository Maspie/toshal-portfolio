
import { useState } from 'react';
import ChatbotPanel from './ChatbotPanel';

export default function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat Panel */}
      {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}
    </div>
  );
}
