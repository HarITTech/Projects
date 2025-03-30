import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import song from '../assets/images/senso.mp3'; // Ensure this path is correct
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

// Sample images - replace with your actual images
const memories = [
  { id: 1, src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', caption: 'Our first date' },
  { id: 2, src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', caption: 'Beach sunset' },
  { id: 3, src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', caption: 'Your beautiful smile' },
  { id: 4, src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', caption: 'Special moments' },
];

const Senso = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [hearts, setHearts] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [currentNickname, setCurrentNickname] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Music starts automatically
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef(null);

  const nicknames = ["Suhani", "Susu", "Rani", "Maharani", "My Love", "My Queen"];
  const reasons = [
    "Your beautiful smile that lights up my entire world",
    "The way you make my heart skip a beat with just a glance",
    "Your endless kindness that makes everyone feel so special",
    "Your brilliant mind that never ceases to amaze me",
    "Your strength that inspires me to be a better man",
    "The magic you bring to every moment we share",
    "Your laughter that’s sweeter than any song",
    "The way you make me feel so loved and understood"
  ];

  const birthdayWishes = [
    "May your life be as beautiful as your soul, filled with love and joy!",
    "Wishing you a day as perfect as you are, my darling!",
    "May every star in the sky shine just for you today!",
    "Here’s to a year of dreams coming true and endless happiness!",
    "May you always know how precious you are to me!"
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

      {/* Sparkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 10 + 5}px` }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 5 }}
          >
            ✧
          </motion.div>
        ))}
      </div>

      {/* Music Player */}
      <audio ref={audioRef} autoPlay loop>
        <source src={song} type="audio/mp3" /> {/* Ensure this is an .mp3 file */}
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
          </motion.div>
        </div>

        {/* Memory Gallery */}
        <motion.div 
          className="flex justify-center mb-12 relative h-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${index === currentMemory ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-300/50">
                <img src={memory.src} alt={memory.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-xl drop-shadow-md">{memory.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
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

        {/* Love Letter Reveal */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
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
                My Dearest Suhani [ Susu ],<br/><br/>
                Today, as we celebrate you, I’m reminded how blessed I am to have you in my life. 
                You’re my dream come true, my safe haven, and my greatest adventure. I promise to love you 
                with every fiber of my being, to make you laugh, and to hold you close forever.<br/><br/>
                Yours eternally,<br/>
                Mahesh [ Coco ]
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

        {/* Final Message */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-5xl font-bold text-pink-800 mb-6">Forever Yours, My Love,</p>
          <p className="text-4xl text-pink-900 font-semibold">Mahesh</p>
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