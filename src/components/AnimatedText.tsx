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
  const lines = text.split('\n').map((line) => line.split(' ').filter(Boolean));
  let wordOffset = 0;
  const linesWithOffsets = lines.map((words) => {
    const startIndex = wordOffset;
    wordOffset += words.length;
    return { words, startIndex };
  });

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}>
      {linesWithOffsets.map(({ words, startIndex }, lineIndex) => (
        <span key={`line-${lineIndex}`} className='block'>
          {words.map((word, indexInLine) => {
            const currentWordIndex = startIndex + indexInLine;

            return (
              <motion.span
                key={`${word}-${currentWordIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: delay + currentWordIndex * staggerDelay,
                  ease: 'easeIn',
                }}>
                {word}
                {indexInLine < words.length - 1 && ' '}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.p>
  );
};
