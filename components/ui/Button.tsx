'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/Utils'; // case-sensitive and corrected

const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
const variants = {
  default: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
};
const sizes = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-6',
};

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...props}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };