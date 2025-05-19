import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PetalAnimation from '../components/PetalAnimation';
import FloatingFlowers from '../components/FloatingFlowers';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden"
    >
      <PetalAnimation />
      <FloatingFlowers />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center px-4 z-10"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
        >
          This is for the girl I upset — and can't stop thinking about.
        </motion.h1>

       
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/apology')}
          className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
        >
          Let me speak...
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home; 