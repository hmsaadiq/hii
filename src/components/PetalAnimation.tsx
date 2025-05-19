import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const PetalAnimation = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (id: number): Petal => ({
      id,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 10,
    });

    const initialPetals = Array.from({ length: 15 }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = prev.filter(p => p.id > 0);
        return [...newPetals, createPetal(Date.now())];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.img
          key={petal.id}
          src="/petal.svg"
          alt="petal"
          initial={{ y: -100, x: petal.x, rotate: 0, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            x: petal.x + (Math.random() - 0.5) * 200,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size,
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};

export default PetalAnimation; 