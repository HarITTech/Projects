import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import song from '../assets/images/senso.mp3'; // Ensure this path is correct
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

// Sample images - replace with your actual images
const memories = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
    caption: 'Our love story begins...' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1559769732-3a943df124b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    caption: 'Special moments with you' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1629495025620-26d5f4ada7c2?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    caption: 'Your beautiful smile' 
  },
  { 
    id: 4, 
    src: 'https://plus.unsplash.com/premium_vector-1727278874720-f5a8f2246190?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    caption: 'My heart belongs to you' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', 
    caption: 'Forever in your eyes' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1559769732-3a943df124b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    caption: 'Our special connection' 
  }
];

const Senso = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [hearts, setHearts] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [stars, setStars] = useState([]); // Added stars from old page
  const [currentNickname, setCurrentNickname] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef(null);

  const nicknames = ["Suhani", "Susu", "Rani", "My Maharani", "My Love", "My Queen", "My Angel"]; // Added "My Angel" from old page
  const reasons = [
    "Your beautiful smile that lights up my entire world",
    "The way you make my heart skip a beat with just a glance",
    "Your endless kindness that makes everyone feel so special",
    "Your brilliant mind that never ceases to amaze me",
    "Your strength that inspires me to be a better man",
    "The magic you bring to every moment we share",
    "Your laughter that’s sweeter than any song",
    "The way you make me feel so loved and understood",
    "Your grace that turns every day into a fairy tale", // Added from old page
    "Your warmth that feels like home" // Added from old page
  ];

  const birthdayWishes = [
    "May your life be as beautiful as your soul, filled with love and joy!",
    "Wishing you a day as perfect as you are, my darling!",
    "May every star in the sky shine just for you today!",
    "Here’s to a year of dreams coming true and endless happiness!",
    "May you always know how precious you are to me!",
    "Wishing you endless adventures and infinite love!" // Added from old page
  ];

  // Special moments section with romantic illustrations
const specialMoments = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Your Sweetest Behaviour',
    description: 'The day my heart knew you were special'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1616863496857-01ffd220265e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Your Laughter',
    description: 'The most beautiful sound in my world'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/reserve/165aTVpzTXGMXu1azUdy_IMG_8468.JPG?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Late Night Talks',
    description: 'When time stands still with you'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1741247842040-c1a7c27b219f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Your Comfort',
    description: 'Where I find my peace'
  }
];

  const favoriteMoments = [ // Added from old page
    "Our first RP With my Awesome Wife",
    "Every night, when you are over me.",
    "Watching you laugh at my silly jokes",
    "Our late-night talks about everything and nothing",
    "The day you said 'I love you' first"
  ];

  const promises = [ // Added from old page
    "To always be your biggest supporter",
    "To make you smile every single day",
    "To hold your hand through every storm",
    "To cherish you more with each passing year",
    "To build a future filled with our dreams"
  ];

  // Floating hearts effect
  useEffect(() => {
    const heartInterval = setInterval(() => {
      setHearts(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * 100, size: Math.random() * 25 + 15, duration: Math.random() * 3 + 2 }
      ]);
      if (hearts.length > 20) setHearts(prev => prev.slice(1));
    }, 200);
    return () => clearInterval(heartInterval);
  }, [hearts.length]);

  // Floating balloons effect
  useEffect(() => {
    const balloonInterval = setInterval(() => {
      setBalloons(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * 100, color: ['#ff6b6b', '#ff9ff3', '#feca57', '#48dbfb'][Math.floor(Math.random() * 4)] }
      ]);
      if (balloons.length > 10) setBalloons(prev => prev.slice(1));
    }, 1000);
    return () => clearInterval(balloonInterval);
  }, [balloons.length]);

  // Twinkling stars effect (adjusted from old page to match new page)
  useEffect(() => {
    const starInterval = setInterval(() => {
      setStars(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 10 + 5 }
      ]);
      if (stars.length > 40) setStars(prev => prev.slice(1));
    }, 500);
    return () => clearInterval(starInterval);
  }, [stars.length]);

  // Rotate memories
  useEffect(() => {
    const memoryInterval = setInterval(() => {
      setCurrentMemory((prev) => (prev + 1) % memories.length);
    }, 4000);
    return () => clearInterval(memoryInterval);
  }, []);

  // Initial effects
  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(false), 10000);
    const nicknameInterval = setInterval(() => {
      setCurrentNickname((prev) => (prev + 1) % nicknames.length);
    }, 2000);
    const contentTimer = setTimeout(() => setShowContent(true), 500);
    return () => {
      clearTimeout(confettiTimer);
      clearInterval(nicknameInterval);
      clearTimeout(contentTimer);
    };
  }, []);

  // Music handler
  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden relative bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src="https://cdn.pixabay.com/video/2022/02/02/106382-673007973_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-300/20 to-purple-300/20"></div>
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti numberOfPieces={500} recycle={false} colors={['#ff6b6b', '#ff9ff3', '#feca57', '#48dbfb', '#ffeb3b']} />}

      {/* Floating Hearts */}
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute text-red-500 z-10 drop-shadow-lg"
          style={{ left: `${heart.x}%`, top: '110%', fontSize: `${heart.size}px` }}
          animate={{ y: [-20, -window.innerHeight], opacity: [1, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: heart.duration, ease: "easeOut" }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Floating Balloons */}
      {balloons.map(balloon => (
        <motion.div
          key={balloon.id}
          className="absolute z-10"
          style={{ left: `${balloon.x}%`, top: '110%' }}
          animate={{ y: [-20, -window.innerHeight], x: [0, Math.random() * 50 - 25], opacity: [1, 0] }}
          transition={{ duration: Math.random() * 5 + 5, ease: "easeOut" }}
        >
          <span className="text-4xl drop-shadow-md" style={{ color: balloon.color }}>🎈</span>
        </motion.div>
      ))}

      {/* Twinkling Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-300 z-10 drop-shadow-sm"
          style={{ left: `${star.x}%`, top: `${star.y}%`, fontSize: `${star.size}px` }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "easeInOut" }}
        >
          ✧
        </motion.div>
      ))}

      {/* Music Player */}
      <audio ref={audioRef} autoPlay loop>
        <source src={song} type="audio/mp3" />
      </audio>

      {/* Main Content */}
      <motion.div 
        className="max-w-5xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 relative overflow-hidden border border-pink-400/50 z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={showContent ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-pink-500 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-pink-500 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-pink-500 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-pink-500 rounded-br-3xl"></div>

        {/* Music Toggle Button */}
        <motion.button
          className="absolute top-4 right-4 p-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMusic}
        >
          {isMusicPlaying ? (
            <>
              <BsFillPauseCircleFill className="text-2xl" />
              <span className="text-lg">Pause</span>
            </>
          ) : (
            <>
              <BsFillPlayCircleFill className="text-2xl" />
              <span className="text-lg">Play</span>
            </>
          )}
        </motion.button>

        {/* Header */}
        <div className="text-center mb-12 relative">
          <motion.h1 
            className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-pink-700 via-rose-600 to-purple-700 bg-clip-text text-transparent drop-shadow-xl"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Happy Birthday {nicknames[currentNickname]}!
          </motion.h1>
          <p className="text-3xl text-pink-700 font-semibold">April 4th, 2025</p>
          <motion.div 
            className="flex justify-center mt-6 space-x-6"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-4xl">🎂</span>
            <span className="text-4xl">🎁</span>
            <span className="text-4xl">🎉</span>
            <span className="text-4xl">💝</span>
            <span className="text-4xl">🎀</span> {/* Added from old page */}
          </motion.div>
        </div>

        {/* Memory Gallery - Updated with romantic images */}
        <motion.div 
          className="flex justify-center mb-10 relative h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentMemory ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-pink-200/70">
                <img 
                  src={memory.src} 
                  alt={memory.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-medium text-shadow">{memory.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Moments Section - New romantic section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Moments That Stole My Heart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialMoments.map((moment) => (
              <motion.div
                key={moment.id}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-5 rounded-xl border border-pink-200/50 shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={moment.src} 
                    alt={moment.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-pink-700">{moment.title}</h3>
                <p className="text-pink-600">{moment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Love Message */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-3xl text-pink-800 mb-8 font-semibold tracking-wide">
            To My One and Only Suhani,
          </p>
          <div className="relative">
            <motion.div 
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-6xl text-pink-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❝
            </motion.div>
            <p className="text-4xl text-pink-900 font-medium italic leading-relaxed px-12">
              You are the melody to my heart, the colors in my sky, and the reason I smile every day. 
              My love for you grows deeper with every breath, and I’d cross oceans just to see you happy.
            </p>
            <motion.div 
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-6xl text-pink-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❞
            </motion.div>
          </div>
        </motion.div>

        {/* Reasons I Love You */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent">
            Why I’m Head Over Heels for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-400/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 40px -5px rgba(236, 72, 153, 0.4)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <p className="text-xl text-pink-900 flex items-start">
                  <motion.span 
                    className="text-3xl text-pink-600 mr-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ❀
                  </motion.span> 
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Favorite Moments */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent">
            Our Favorite Moments Together
          </h2>
          <div className="space-y-4">
            {favoriteMoments.map((moment, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-pink-400/50 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(236, 72, 153, 0.3)" }}
              >
                <span className="text-2xl text-pink-600 mr-4">🌟</span>
                <p className="text-xl text-pink-900">{moment}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Love Letter Reveal */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLetter(!showLetter)}
          >
            {showLetter ? 'Hide My Heartfelt Letter' : 'Reveal My Love Letter'}
          </motion.button>
          {showLetter && (
            <motion.div
              className="mt-10 bg-white/95 p-10 rounded-3xl border-2 border-pink-400/50 shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <motion.div 
                className="absolute -top-6 -left-6 text-5xl text-pink-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                💌
              </motion.div>
              <p className="text-2xl text-pink-900 italic leading-relaxed">
                My Dearest Suhani [Susu],<br/><br/>
                Today, as we celebrate you, I’m reminded how blessed I am to have you in my life. 
                You’re my dream come true, my safe haven, and my greatest adventure. I promise to love you 
                with every fiber of my being, to make you laugh, and to hold you close forever.<br/><br/>
                Yours eternally,<br/>
                Mahesh [Coco]
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Birthday Wishes */}
        <motion.div 
          className="bg-gradient-to-r from-pink-700/95 to-purple-700/95 p-12 rounded-3xl text-white mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="absolute -right-16 -top-16 text-9xl text-white/10">🎉</div>
          <h3 className="text-5xl font-bold mb-8 text-center">My Birthday Wishes For You</h3>
          <div className="space-y-4">
            {birthdayWishes.map((wish, index) => (
              <motion.p
                key={index}
                className="text-xl text-center leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
              >
                <span className="text-2xl mr-2">✨</span> {wish}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Promises to You */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent">
            My Promises to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-400/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 40px -5px rgba(236, 72, 153, 0.4)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1 }}
              >
                <p className="text-xl text-pink-900 flex items-start">
                  <motion.span 
                    className="text-3xl text-purple-600 mr-4"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💞
                  </motion.span>
                  {promise}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-5xl font-bold text-pink-800 mb-6">Forever Yours, My Love,</p>
          <p className="text-4xl text-pink-900 font-semibold">Mahesh [Coco]</p> {/* Updated with [Coco] from old page */}
          <motion.div 
            className="mt-10 text-8xl"
            animate={{ scale: [1, 1.4, 1], rotate: [0, 15, -15, 0], color: ['#ff6b6b', '#ff9ff3', '#ff6b6b'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💖
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Senso;