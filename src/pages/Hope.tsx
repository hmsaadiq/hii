import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import FloatingFlowers from '../components/FloatingFlowers';

const Hope = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [pushupCount, setPushupCount] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-4"
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <FloatingFlowers />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl text-center"
      >
        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          This won't fix everything. But it's a start.
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
        You deserve to be spoken to with care — always.



        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
         
I'm learning. And I'm sorry.
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
        I want to do better.
        </motion.p>


        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg mb-8"
        >
          
          <p className="text-lg text-gray-700">
          I'll keep trying until i see you smile again 🌸
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowConfetti(true)}
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
          >
            Accept Apology
          </motion.button>

          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Push-ups for every frown</h3>
            <div className="flex items-center justify-center">
              <div className="bg-pink-100 px-8 py-3 rounded-lg shadow-lg border border-pink-200 mr-6">
                <span className="text-3xl font-bold text-gray-800">{pushupCount}</span>
              </div>
              <button
                onClick={() => setPushupCount(prev => prev + 1)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors ml-4"
              >
                +1
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              I'll do these push-ups as a reminder to think before I speak. (youre right this is proof i speak too much 😆)
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hope; 