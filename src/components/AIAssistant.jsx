import { X, Bot, Users } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './AiAssistant.css';

const AIAssistant = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your AI assistant. How can I help you with your projects today?",
    },
  ]);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.classList.contains('ai-assistant-overlay')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = {
        'summarize project status':
          "Here's a summary of your projects:\n1. Marketing Campaign (65% complete)\n2. Product Launch (42% complete)\n3. Website Redesign (78% complete)",
        'list overdue tasks':
          'You have 1 overdue task:\n- Q3 Planning (due Aug 5, 15% complete)',
        'generate weekly report':
          "I've generated your weekly report. Would you like me to email it to the team?",
        default: `I received your message: "${inputValue}". I can help with project summaries, task status, and generating reports.`,
      };

      const responseKey = inputValue.toLowerCase();
      const aiResponse = aiResponses[responseKey] || aiResponses['default'];

      const newAiMessage = {
        id: messages.length + 2,
        sender: 'ai',
        text: aiResponse,
      };

      setMessages((prev) => [...prev, newAiMessage]);
    }, 800);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    handleSendMessage();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="ai-assistant-overlay" />
      <div className="ai-assistant">
        <div className="ai-assistant-header">
          <h2 className="ai-assistant-title">AI Assistant</h2>
          <button onClick={onClose} className="ai-assistant-close">
            <X className="icon-sm" />
          </button>
        </div>

        <div className="ai-assistant-content">
          <div className="ai-assistant-intro">
            <p className="ai-assistant-text">
              Ask me anything about your tasks or projects. I can help with:
            </p>
            <div className="ai-assistant-options">
              <button
                className="ai-option-button"
                onClick={() => handleQuickAction('Summarize project status')}
              >
                Summarize project status
              </button>
              <button
                className="ai-option-button"
                onClick={() => handleQuickAction('List overdue tasks')}
              >
                List overdue tasks
              </button>
              <button
                className="ai-option-button"
                onClick={() => handleQuickAction('Generate weekly report')}
              >
                Generate weekly report
              </button>
            </div>
          </div>

          <div className="ai-chat-container" ref={chatContainerRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`ai-message ${
                  message.sender === 'user' ? 'user-message' : ''
                }`}
              >
                {message.sender === 'ai' && (
                  <div className="ai-avatar">
                    <Bot className="icon-sm" />
                  </div>
                )}
                <div
                  className={`ai-message-bubble ${
                    message.sender === 'user' ? 'user-bubble' : ''
                  }`}
                >
                  {message.text.split('\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className={`ai-message-text ${
                        message.sender === 'user' ? 'user-text' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {message.sender === 'user' && (
                  <div className="ai-avatar user-avatar">
                    <Users className="icon-sm" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="ai-assistant-input-container">
          <div className="ai-assistant-input-wrapper">
            <input
              type="text"
              placeholder="Ask AI assistant..."
              className="ai-assistant-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="ai-send-button"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
