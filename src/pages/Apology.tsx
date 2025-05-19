import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BloomingFlower from '../components/BloomingFlower';
import FloatingFlowers from '../components/FloatingFlowers';

const Apology = () => {
  const navigate = useNavigate();

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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-pink-100 p-4 relative"
    >
      <BloomingFlower />
      <FloatingFlowers />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl text-center"
      >
        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          I said something stupid. Not out of malice, just oblivion.
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          But the damage? Still mine to own.
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          You didn't deserve that. You never do.
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          I'm sorry for what I said,
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-6 text-gray-800">
          and for not realizing sooner how it landed.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg"
        >
         
          <p className="text-lg text-gray-700">
            Your smile means more to me than you'll ever know,
            and I promise to be more thoughtful with my words.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/hope')}
          className="mt-12 bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
        >
          Continue...
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Apology; 