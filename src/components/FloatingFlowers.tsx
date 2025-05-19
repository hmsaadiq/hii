import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Flower {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const createFlower = (id: number): Flower => ({
      id,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 30 + Math.random() * 20,
      rotation: Math.random() * 360,
    });

    const initialFlowers = Array.from({ length: 8 }, (_, i) => createFlower(i));
    setFlowers(initialFlowers);

    const interval = setInterval(() => {
      setFlowers(prev => {
        const newFlowers = prev.filter(f => f.id > 0);
        return [...newFlowers, createFlower(Date.now())];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <motion.img
          key={flower.id}
          src="/flower.svg"
          alt="floating flower"
          initial={{ y: -100, x: flower.x, rotate: flower.rotation, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            x: flower.x + (Math.random() - 0.5) * 300,
            rotate: flower.rotation + 360,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: flower.size,
            height: flower.size,
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingFlowers; 