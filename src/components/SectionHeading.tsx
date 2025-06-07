import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

{
  /* tailwind-class: before:content-["O_nama"] before:content-["Proizvodi"] */
}

const SectionHeading = ({ title, className = '' }: SectionHeadingProps) => {
  return (
    <motion.h2
      className={`text-6xl text-secondary uppercase my-6 flex items-center group font-intro font-bold ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}>
      <motion.span
        className={`inline-block py-2 transition-all duration-100 tracking-wide not-hover:transition-none before:content-["${title.replace(
          / /g,
          '_',
        )}"] before:text-[#be9a36] before:absolute before:top-[0.5rem] before:left-0 before:w-0 before:overflow-hidden before:transition-all before:duration-500 before:ease-in-out before:whitespace-nowrap hover:before:w-full`}
        whileHover={{
          scale: 1.15,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10,
          duration: 0.1,
        }}>
        {title}
      </motion.span>
    </motion.h2>
  );
};

export default SectionHeading;
