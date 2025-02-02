import { useState, useEffect } from 'react'
import Experience from './components/Experience'
import Uran from './components/Uran'
import VantaBackground from './components/VantaBackground'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <VantaBackground isDarkMode={isDarkMode}>
        <Uran isDarkMode={isDarkMode} />
      </VantaBackground>
      <div className="ExperienceContainer">
        <Experience />
      </div>
    </>
  )
}

export default App