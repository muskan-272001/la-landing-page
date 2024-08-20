// components/Counter.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = React.useState(start);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return Math.min(prev + Math.ceil((end - start) / (duration * 60)), end);
        }
        clearInterval(timer);
        return end;
      });
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, start, duration]);

  return (
    <motion.h3
      className="text-2xl font-bold text-yellow-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.h3>
  );
};

export default Counter;
