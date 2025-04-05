

import { useState } from "react";
import ChatbotPanel from "./ChatbotPanel";
import { MessageSquare } from "lucide-react";

const ChatbotLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 group"
      >
        <MessageSquare size={24} />
        <span className="absolute bottom-16 mb-2 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with my AI Assistant
        </span>
      </button>

      {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotLauncher; 
