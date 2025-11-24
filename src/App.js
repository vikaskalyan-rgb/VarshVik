import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BackgroundMusic from './components/BackgroundMusic';
import Header from './components/Header';
import Organization from './components/Organization';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Where from './components/Where';
import Footer from './components/Footer';

function App() {
  // DARK MODE IS DEFAULT
  const [theme, setTheme] = useState('dark');

  // Load saved theme on mount (defaults to dark if nothing saved)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // If user has a saved preference, use it
      setTheme(savedTheme);
      document.body.classList.toggle('light-theme', savedTheme === 'light');
    } else {
      // Default to dark mode (no class needed)
      setTheme('dark');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  return (
    <>
      {/* GLOBAL THEME TOGGLE BUTTON - ALWAYS VISIBLE */}
      <button 
        className="theme-toggle-btn-global" 
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="sun-icon">☀</span>
        <span className="moon-icon">🌙</span>
      </button>

      <Sidebar />
      <BackgroundMusic />
      <div id='oliven-main'>
        <Header />
        <Organization />
        <Story />
        <Gallery />
        <Countdown />
        <Where />
        <Footer />
      </div>
    </>
  );
}

export default App;