'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ href, label, onClick, className = '' }: NavLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      <Link
        href={href}
        onClick={onClick}
        className={`text-primary hover:text-tertiary transition-all duration-300 font-medium tracking-wide font-poppins ${className}`}>
        {label}
      </Link>
    </motion.div>
  );
};

export default NavLink;
