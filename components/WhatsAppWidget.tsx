'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ 
  phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_CONTACT_NUMBER || "+971501682057"), 
  message = "Hello! I'm interested in Ducorr's corrosion protection solutions." 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [botStatus, setBotStatus] = useState<{
    isReady: boolean;
    qrCode: string;
    message: string;
  }>({
    isReady: false,
    qrCode: '',
    message: 'Initializing...'
  });
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
  }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botEnabled = process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_BOT === 'true';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

    // Initialize bot and check status (only when enabled)
  useEffect(() => {
    const initializeBot = async () => {
      try {
        await fetch('/api/whatsapp/initialize', { method: 'POST' });
        const response = await fetch('/api/whatsapp/status');
        const data = await response.json();
        setBotStatus(data);
      } catch (error) {
        console.error('Error initializing bot:', error);
        setBotStatus(prev => ({ ...prev, message: 'Failed to initialize bot' }));
      }
    };

    if (botEnabled) {
      initializeBot();
    } else {
      setBotStatus(prev => ({ ...prev, message: 'WhatsApp bot disabled' }));
    }

    // Add welcome message
    setChatMessages([{
      id: '1',
      text: "Hello! Welcome to Ducorr. I'm here to help you with information about our corrosion protection solutions. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }]);
  }, [botEnabled]);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newMessage]);
    setUserMessage('');
    setIsTyping(true);

    try {
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(userMessage),
          isUser: false,
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    }
  };

  const getBotResponse = (message: string): string => {
    const msg = message.toLowerCase().trim();
    const contactPhone = process.env.NEXT_PUBLIC_WHATSAPP_CONTACT_NUMBER || "+971501682057";
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! Welcome to Ducorr. I'm here to help you with information about our corrosion protection solutions. How can I assist you today?";
    } else if (msg.includes('services') || msg.includes('products')) {
      return `We offer several corrosion protection solutions:

🔹 PlatePro - Advanced cathodic protection systems
🔹 TankBox - Underground storage tank protection
🔹 MarineShield - Marine corrosion protection
🔹 PowerCell - Power generation protection
🔹 PowerTide - Tidal energy protection
🔹 UniCell - Universal protection systems

Which service interests you most?`;
    } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
      return `You can reach us at:

📞 Phone: ${contactPhone}
📧 Email: sales@ducorr.com
🌐 Website: www.ducorr.com
📍 Address: Dubai, UAE

Would you like to schedule a consultation?`;
    } else if (msg.includes('price') || msg.includes('cost') || msg.includes('quote')) {
      return `For pricing information and quotes, please contact our sales team directly. They can provide customized pricing based on your specific requirements.

Would you like me to connect you with our sales team?`;
    } else if (msg.includes('about') || msg.includes('company')) {
      return `Ducorr is a leading provider of corrosion protection solutions in the Middle East. We specialize in:

✅ Cathodic Protection Systems
✅ Underground Storage Tank Protection
✅ Marine Corrosion Solutions
✅ Power Generation Protection
✅ Custom Engineering Solutions

Visit our website to learn more about our projects and expertise!`;
    } else if (msg.includes('help')) {
      return `I can help you with information about:

🔹 Our services and products
🔹 Contact information
🔹 Company information
🔹 Pricing and quotes
🔹 Technical support

What would you like to know?`;
    } else {
      return `Thank you for your message! I'm here to help with information about Ducorr's corrosion protection solutions.

You can ask me about:
- Our services and products
- Contact information
- Company details
- Pricing and quotes

How can I assist you today?`;
    }
  };

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-20 right-4 z-50 sm:bottom-20 md:bottom-24">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 h-96 sm:h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col sm:bottom-20 md:bottom-24">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={16} className="text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">Ducorr Support</h3>
                <p className="text-xs text-green-100">
                  {botStatus.isReady ? 'Online' : (botEnabled ? 'Connecting...' : 'Disabled')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.isUser
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.isUser ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!userMessage.trim()}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex space-x-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={16} />
                <span>Open WhatsApp</span>
              </button>
            </div>
            
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              <button className="flex items-center justify-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                <Phone size={12} />
                <span>Call</span>
              </button>
              <button className="flex items-center justify-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                <Mail size={12} />
                <span>Email</span>
              </button>
              <button className="flex items-center justify-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                <MapPin size={12} />
                <span>Location</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
