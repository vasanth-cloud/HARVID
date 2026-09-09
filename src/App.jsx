import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Modal from './components/common/Modal';
import Toast from './components/common/Toast';
import Hero from './components/public/Hero';
import Services from './components/public/Services';
import Products from './components/public/Products';
import AboutUs from './components/public/AboutUs';
import Contact from './components/public/Contact';

function MainApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 5000);
  };

  return (
    <div className="min-h-screen font-sans relative transition-colors duration-200">
      
      {/* Main Navigation Header */}
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content View */}
      <main>
        <Hero 
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          setActiveSection={setActiveSection}
        />

        <Services 
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        <Products 
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        <AboutUs />

        <Contact 
          onShowToast={showToast}
        />
      </main>

      {/* Global Footer */}
      <Footer 
        setActiveSection={setActiveSection}
      />

      {/* Consultation Booking Modal */}
      <Modal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Toast Notification */}
      <Toast 
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
