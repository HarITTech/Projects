import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import SuhaniBirthday from './pages/Senso';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

// Wrapper component to conditionally render Navbar and Footer
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isBirthdayPage = location.pathname === '/susu';

  return (
    <div className="min-h-screen flex flex-col">
      {!isBirthdayPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isBirthdayPage && <Footer />}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const checkPassword = (enteredPassword) => {
    const correctPassword = "ILUSUSU04";
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="*" element={
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </LayoutWrapper>
        } />
        
        {/* Password protected route without Navbar/Footer */}
        <Route 
          path="/susu" 
          element={
            isAuthenticated ? (
              <SuhaniBirthday />
            ) : (
              <PasswordGate checkPassword={checkPassword} />
            )
          } 
        />
      </Routes>
    </Router>
  );
};

// Birthday Countdown Component
const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('April 4, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-2xl shadow-lg text-white mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-center mb-4">Counting Down to Your Special Day!</h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
          >
            <span className="text-3xl font-extrabold">{item.value}</span>
            <span className="text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-4 text-center text-lg flex justify-center space-x-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>🎂</span>
        <span>🎉</span>
        <span>💖</span>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Password Gate Component with suspense and intrigue
const PasswordGate = ({ checkPassword }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHearts, setShowHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [stars, setStars] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [hintStep, setHintStep] = useState(0);
  const [sparkles, setSparkles] = useState([]);

  // Typing effect for title
  useEffect(() => {
    const fullText = "A Secret Awaits, My Love";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTitleText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Floating hearts effect
  useEffect(() => {
    const heartInterval = setInterval(() => {
      setShowHearts(prev => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 90 + 5,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 3 + 2
        }
      ]);
      if (showHearts.length > 15) setShowHearts(prev => prev.slice(1));
    }, 400);
    return () => clearInterval(heartInterval);
  }, [showHearts.length]);

  // Twinkling stars effect
  useEffect(() => {
    const starInterval = setInterval(() => {
      setStars(prev => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 5 + 3
        }
      ]);
      if (stars.length > 30) setStars(prev => prev.slice(1));
    }, 600);
    return () => clearInterval(starInterval);
  }, [stars.length]);

  // Sparkles around input
  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparkles(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4
        }
      ]);
      if (sparkles.length > 20) setSparkles(prev => prev.slice(1));
    }, 300);
    return () => clearInterval(sparkleInterval);
  }, [sparkles.length]);

  // Suspenseful hint reveal
  const hints = [
    "It starts with my feelings for you...",
    "Followed by your sweetest nickname...",
    "Ends with your special day’s number!"
  ];

  const handleHintClick = () => {
    setHintStep((prev) => (prev + 1) % (hints.length + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkPassword(password)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000);
      setError('');
      // Optional: Play a subtle success sound (uncomment if you have an audio file)
      // new Audio('/path/to/success.mp3').play();
    } else {
      setError('Not quite, my darling! Try again or seek a clue... ❤️');
      // Optional: Play a subtle error sound (uncomment if you have an audio file)
      // new Audio('/path/to/error.mp3').play();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 flex items-center justify-center relative overflow-hidden">
      {/* Background Video for Mystery */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2022/02/02/106382-673007973_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Hearts */}
      {showHearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400 z-10 drop-shadow-md"
          style={{ left: `${heart.left}%`, top: '110%', fontSize: `${heart.size}px` }}
          animate={{ y: [-20, -window.innerHeight], opacity: [1, 0], rotate: [0, 180] }}
          transition={{ duration: heart.duration, ease: "easeOut" }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Twinkling Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-300 z-10"
          style={{ left: `${star.left}%`, top: `${star.top}%`, fontSize: `${star.size}px` }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✧
        </motion.div>
      ))}

      {/* Confetti on Success */}
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} colors={['#ff6b6b', '#ff9ff3', '#feca57', '#48dbfb', '#ffeb3b']} />}

      {/* Main Content */}
      <motion.div 
        className="relative z-20 bg-white/85 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-lg w-full mx-4 border border-pink-300/50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Glowing Border Effect */}
        <motion.div 
          className="absolute inset-0 border-2 border-pink-500 rounded-3xl pointer-events-none"
          animate={{ boxShadow: isHovered ? "0 0 30px rgba(236, 72, 153, 0.6)" : "0 0 10px rgba(236, 72, 153, 0.3)" }}
          transition={{ duration: 0.5 }}
        />

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-pink-400 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-pink-400 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-pink-400 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-400 rounded-br-3xl"></div>

        <div className="text-center mb-10">
          <motion.h2 
            className="text-5xl font-extrabold bg-gradient-to-r from-pink-700 via-rose-600 to-purple-700 bg-clip-text text-transparent mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {titleText}
          </motion.h2>
          <p className="text-xl text-pink-800 mb-4 font-semibold">
            Unlock a magical surprise, Suhani!
          </p>
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-4xl">🔒</span>
            <span className="text-4xl text-pink-500">💖</span>
            <span className="text-4xl">🎁</span>
          </motion.div>
          <p className="text-sm text-pink-600 italic leading-relaxed">
            "A treasure waits behind this riddle, my darling..."
          </p>
        </div>

        {/* Birthday Countdown */}
        <BirthdayCountdown />

        <form onSubmit={handleSubmit} className="space-y-8 relative">
          <div className="relative">
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Whisper the secret key..."
              className="w-full px-6 py-4 text-lg border-2 border-pink-400 rounded-xl bg-white/50 focus:outline-none focus:ring-4 focus:ring-pink-500/50 focus:border-pink-500 placeholder-pink-400 transition-all duration-300"
              required
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
            />
            {/* Sparkles around input */}
            {sparkles.map(sparkle => (
              <motion.div
                key={sparkle.id}
                className="absolute text-yellow-400 z-10"
                style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%`, fontSize: `${sparkle.size}px` }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                ✦
              </motion.div>
            ))}
          </div>

          {error && (
            <motion.div
              className="bg-pink-100 border-l-4 border-pink-600 text-pink-800 p-4 rounded-lg flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl">💔</span>
              <p>{error}</p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-8 rounded-xl text-xl font-bold shadow-lg flex items-center justify-center space-x-3 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Unlock the Mystery</span>
            <motion.span 
              className="text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </motion.button>
        </form>

        {/* Suspenseful Hint System */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.button
            className="text-pink-600 underline text-sm font-semibold"
            onClick={handleHintClick}
            whileHover={{ scale: 1.1, color: "#9333ea" }}
            whileTap={{ scale: 0.95 }}
          >
            {hintStep === 0 ? "Need a Hint, My Love?" : "Another Clue?"}
          </motion.button>
          {hintStep > 0 && (
            <motion.p
              className="mt-4 text-sm text-pink-700 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {hints[hintStep - 1]}
            </motion.p>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute bottom-20 left-20 text-6xl text-pink-300"
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌸
        </motion.div>
        <motion.div 
          className="absolute top-20 right-20 text-6xl text-purple-300"
          animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🌹
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;