import { motion } from 'framer-motion';

export const AnimatedText = ({
  text,
  className,
  delay = 0,
  staggerDelay = 0.15,
}: {
  text: string;
  className: string;
  delay?: number;
  staggerDelay?: number;
}) => {
  const words = text.split(' ');

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDelay,
            ease: 'easeIn',
          }}>
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.p>
  );
};
