import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css';

import AIAssistant from './AIAssistant';

const Layout = () => {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  return (
    <div className={`app-container ${aiAssistantOpen ? 'ai-open' : ''}`}>
      <Header
        onAIAssistantToggle={() => setAiAssistantOpen(!aiAssistantOpen)}
      />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />

      <AIAssistant
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
};

export default Layout;
