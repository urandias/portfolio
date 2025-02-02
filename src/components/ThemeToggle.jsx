
const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
      <button 
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>}
      </button>
    );
  };
  
  export default ThemeToggle;