'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Zap, TrendingUp } from 'lucide-react'
import { Button } from './ui/Button'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
             bg-gradient-to-br from-primary-50 via-white to-secondary-50 
             dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black 
             text-black dark:text-white transition-colors duration-300">

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex mb-6">
            <div className="glass-effect rounded-full px-6 py-2 flex items-center space-x-2 text-sm font-medium text-secondary-700 dark:text-secondary-300">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>#1 AI Marketing Suite</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Marketing with{' '}
            <span className="gradient-text dark:gradient-text-dark">AI-Powered</span> Intelligence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Automate campaigns, analyze data, and boost ROI with our cutting-edge AI suite. 
            Join 10,000+ marketers who've revolutionized their growth strategy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-secondary-600 dark:text-secondary-300 font-medium">10,000+ Active Users</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-secondary-600 dark:text-secondary-300 font-medium">300% ROI Increase</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <span className="text-secondary-600 dark:text-secondary-300 font-medium">24/7 AI Support</span>
            </div>
          </motion.div>

          {/* Hero Image/Video Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl h-64 md:h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">AI Dashboard Preview</h3>
                  <p className="text-primary-100">Interactive demo coming soon</p>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -left-4 glass-effect rounded-lg p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 glass-effect rounded-lg p-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
