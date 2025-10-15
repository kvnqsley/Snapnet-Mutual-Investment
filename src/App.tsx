import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="social-icons">
          <a href="#" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5dd9a3">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5dd9a3">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Medium">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5dd9a3">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
        </div>
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#5dd9a3">
            <rect x="4" y="8" width="24" height="2" />
            <rect x="4" y="12" width="20" height="2" />
            <rect x="4" y="16" width="16" height="2" />
            <rect x="4" y="20" width="12" height="2" />
            <rect x="4" y="24" width="8" height="2" />
          </svg>
          <span>Finance</span>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="left-content">
            <h1>Mutual Investment</h1>
            <p>At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="right-content">
            <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Person sitting with laptop */}
              <g transform="translate(200, 150)">
                <circle cx="50" cy="30" r="25" fill="#5dd9a3" opacity="0.8"/>
                <rect x="25" y="55" width="50" height="30" rx="5" fill="#2a2a2a"/>
                <rect x="30" y="60" width="40" height="20" rx="2" fill="#1a1a1a"/>
                <rect x="35" y="65" width="30" height="10" rx="1" fill="#5dd9a3"/>
              </g>

              {/* Browser window with charts */}
              <g transform="translate(50, 50)">
                <rect x="0" y="0" width="150" height="100" rx="5" fill="#2a2a2a"/>
                <rect x="5" y="5" width="140" height="15" rx="2" fill="#1a1a1a"/>
                <circle cx="10" cy="12" r="3" fill="#5dd9a3"/>
                <circle cx="18" cy="12" r="3" fill="#ffffff"/>
                <circle cx="26" cy="12" r="3" fill="#ffffff"/>
                {/* Simple chart lines */}
                <path d="M10 30 L40 20 L70 35 L100 15 L130 25" stroke="#5dd9a3" strokeWidth="2" fill="none"/>
                <path d="M10 50 L40 40 L70 55 L100 35 L130 45" stroke="#5dd9a3" strokeWidth="2" fill="none" opacity="0.6"/>
              </g>

              {/* Floating dollar signs */}
              <text x="350" y="100" fontSize="24" fill="#5dd9a3" fontWeight="bold">$</text>
              <text x="380" y="80" fontSize="20" fill="#5dd9a3" fontWeight="bold">$</text>
              <text x="410" y="120" fontSize="18" fill="#5dd9a3" fontWeight="bold">$</text>

              {/* Upward arrow */}
              <path d="M300 200 L310 180 L320 200 L315 200 L315 220 L305 220 L305 200 Z" fill="#5dd9a3"/>

              {/* Plant/leaf elements */}
              <path d="M450 250 Q460 240 470 250 Q480 260 470 270 Q460 280 450 270 Q440 260 450 250" fill="#5dd9a3" opacity="0.7"/>
              <path d="M430 280 Q440 270 450 280 Q460 290 450 300 Q440 310 430 300 Q420 290 430 280" fill="#5dd9a3" opacity="0.5"/>
            </svg>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#5dd9a3">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </main>
    </div>
  );
};

export default App;
