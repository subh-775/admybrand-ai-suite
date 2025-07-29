'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { Button } from './ui/Button'; // ✅ Correct
import { Card, CardContent, CardHeader } from './ui/Card'

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 29, annual: 24 },
      description: 'Perfect for small businesses getting started with AI marketing',
      features: [
        'Up to 5,000 contacts',
        'Basic AI analytics',
        '3 campaign templates',
        'Email support',
        'Social media integration',
        'Basic reporting'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      icon: Star,
      price: { monthly: 79, annual: 65 },
      description: 'Advanced features for growing marketing teams',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI insights',
        'Unlimited campaigns',
        'Priority support',
        'A/B testing',
        'Custom integrations',
        'Team collaboration',
        'Advanced reporting'
      ],
      popular: true,
      color: 'border-primary-500 ring-2 ring-primary-500'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 199, annual: 165 },
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'AI-powered predictions',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'API access',
        'Advanced security',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false,
      color: 'border-purple-500'
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
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mb-6 feature-header">
            Choose Your <span className="gradient-text dark:gradient-text-dark">Perfect Plan</span>
          </h2>
          <p className="text-xl feature-subtext max-w-3xl mx-auto mb-8">
            Start with a free trial, then choose the plan that scales with your business. 
            No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900 dark:text-gray-300 dark:hover:text-white'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-secondary-600 hover:text-secondary-900 dark:text-gray-300 dark:hover:text-white'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`plan-card relative h-full ${plan.color} ${
                  plan.popular ? 'transform lg:scale-105 lg:shadow-2xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    plan.popular ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary-600' : 'text-secondary-600'
                    }`} />
                  </div>
                  
                  <h3 className="plan-title text-secondary-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-secondary-900 dark:text-white">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-secondary-600 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? 'bg-primary-600 hover:bg-primary-700' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing FAQ */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
            All plans include
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: '30-day free trial', description: 'Try all features risk-free' },
              { title: '24/7 support', description: 'Get help whenever you need it' },
              { title: 'No setup fees', description: 'Start immediately, no hidden costs' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-secondary-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing