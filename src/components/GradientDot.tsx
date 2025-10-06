import React from 'react';

interface GradientDotProps {
  fromColor?: string;
  toColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GradientDot: React.FC<GradientDotProps> = ({
  fromColor = 'from-primary',
  toColor = 'to-primary',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <span
      className={`${sizeClasses[size]} bg-gradient-to-r ${fromColor} ${toColor} rounded-full ${className}`}
    />
  );
};

export default GradientDot;
