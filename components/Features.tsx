'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  MessageSquare, 
  TrendingUp 
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predict future trends with 95% accuracy.',
      color: 'text-purple-600'
    },
    {
      icon: Target,
      title: 'Smart Campaign Targeting',
      description: 'Automatically identify and target your ideal customers using behavioral patterns and demographic analysis.',
      color: 'text-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Performance',
      description: 'Monitor campaign performance in real-time with comprehensive dashboards and instant notifications.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Let AI continuously optimize your campaigns for maximum ROI while you focus on strategy and growth.',
      color: 'text-yellow-600'
    },
    {
      icon: MessageSquare,
      title: 'AI Content Generation',
      description: 'Generate compelling ad copy, social media posts, and email campaigns that convert using GPT-4 technology.',
      color: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption, compliance certifications, and data protection.',
      color: 'text-indigo-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand internationally with multi-language support, local market insights, and regional compliance.',
      color: 'text-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Forecasting',
      description: 'Anticipate market trends and customer behavior with AI-driven forecasting models and scenario planning.',
      color: 'text-orange-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            <span className="gradient-text dark:gradient-text-dark">Powerful Features</span> for{' '}
            <span className="gradient-text dark:gradient-text-dark">Modern Marketers</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to automate, optimize, and scale your marketing efforts 
            with cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="feature-card h-full text-center group">
                <CardContent>
                  <div className={`inline-flex p-3 rounded-lg bg-gray-100 mb-4 group-hover:bg-primary-100 transition-colors duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Showcase */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
              See the Difference AI Makes
            </h3>
            <p className="text-lg text-secondary-600 mb-8">
              Our AI suite has helped thousands of businesses increase their marketing 
              ROI by an average of 300%. Here's how we do it:
            </p>
            
            <div className="space-y-6">
              {[
                { stat: '95%', label: 'Prediction Accuracy' },
                { stat: '3x', label: 'Faster Campaign Setup' },
                { stat: '50%', label: 'Cost Reduction' },
                { stat: '24/7', label: 'Automated Monitoring' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="stat-number">{item.stat}</div>
                  <div className="stat-highlight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <BarChart3 className="w-20 h-20 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Live Analytics Dashboard</h4>
                  <p className="text-primary-100">Real-time insights at your fingertips</p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <motion.div
              className="absolute -top-4 -right-4 glass-effect rounded-lg p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+47%</div>
                <div className="text-sm text-secondary-600">ROI Increase</div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 glass-effect rounded-lg p-4 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12K</div>
                <div className="text-sm text-secondary-600">New Leads</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features