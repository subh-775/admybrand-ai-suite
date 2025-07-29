'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/Utils' // ✅ Correct with alias + capital

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false, 
  glass = false 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300'
  const hoverStyles = hover ? 'card-hover cursor-pointer' : ''
  const glassStyles = glass ? 'glass-effect' : 'bg-white shadow-lg border border-gray-200'

  return (
    <motion.div
      className={cn(baseStyles, hoverStyles, glassStyles, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
)

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('', className)}>
    {children}
  </div>
)

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200', className)}>
    {children}
  </div>
)

export { Card, CardHeader, CardContent, CardFooter }