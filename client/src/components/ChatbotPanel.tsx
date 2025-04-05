
import { useState } from 'react';
import { askOpenRouter } from '../services/openRouterService';
import handleBotResponse from '../services/handleBotResponse';

interface ChatbotPanelProps {
  onClose: () => void;
}

export default function ChatbotPanel({ onClose }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMsg = input.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    const reply = await askOpenRouter(userMsg);
    try {
      const parsed = JSON.parse(reply);
      handleBotResponse(parsed);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col">
      <div className="flex justify-between items-center p-2 border-b">
        <span className="font-semibold">Toshal's Assistant</span>
        <button onClick={onClose}>✖️</button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1 text-sm">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button className="ml-2 px-3 py-1 text-white bg-purple-600 rounded text-sm" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
