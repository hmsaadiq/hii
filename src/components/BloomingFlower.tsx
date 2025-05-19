import { motion } from 'framer-motion';

const BloomingFlower = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="fixed bottom-8 right-8 w-24 h-24"
    >
      <motion.img
        src="/flower.svg"
        alt="blooming flower"
        className="w-full h-full"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default BloomingFlower; 