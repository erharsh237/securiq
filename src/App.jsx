import React, { createContext, useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Security = lazy(() => import('./pages/Security'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));
const FAQ = lazy(() => import('./pages/FAQ'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

gsap.config({ nullTargetWarn: false });

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Suspense fallback={
          <div style={{ height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            <div className="loader-text">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/security" element={<Security />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '100px 20px', color: 'var(--text-primary)' }}>
                <h1>404 Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Go back home</a>
              </div>
            } />
          </Routes>
        </Suspense>
      </Router>
    </ThemeContext.Provider>
  );
}
