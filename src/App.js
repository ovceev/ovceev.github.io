import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initialize Telegram WebApp
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      const userData = tg.initDataUnsafe?.user; // Fetch user details
      setUser(userData);
    }
  }, []);

  const donateStars = async () => {
    // if (!user) {
    //   alert('User information is required to donate.');
    //   return;
    // }

    setIsAnimating(true); // Start animation
    setTimeout(() => setIsAnimating(false), 500); // Reset animation after 500ms

    // try {
    //   const response = await axios.post('http://localhost:5000/donate', {
    //     userId: user.id,
    //   });

    //   alert(response.data.message); // "Invoice sent to user."
    // } catch (error) {
    //   console.error('Error initiating donation:', error);
    //   alert('Failed to process your donation.');
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <p>Welcome, {user.first_name}!</p>
        ) : (
          <p>Welcome!</p>
        )}
        <button
          className={`donate-button ${isAnimating ? 'animating' : ''}`}
          onClick={donateStars}
        >
          Donate 200 Stars ⭐
        </button>
      </header>
    </div>
  );
}

export default App;
