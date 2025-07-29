'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'; // ✅ Correct

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 340% increase in qualified leads within just 3 months. The AI insights are incredibly accurate and actionable.',
      results: { metric: '340%', label: 'Lead Increase' }
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Digital Dynamics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The automation features saved us 20+ hours per week, and the predictive analytics helped us identify our best-performing campaigns before our competitors even noticed the trends.',
      results: { metric: '20+', label: 'Hours Saved Weekly' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Growth Manager',
      company: 'StartupLab',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a startup, budget efficiency is crucial. ADmyBRAND helped us reduce customer acquisition costs by 45% while doubling our conversion rates. It\'s like having a full marketing team in one platform.',
      results: { metric: '45%', label: 'Cost Reduction' }
    },
    {
      name: 'David Park',
      role: 'VP Marketing',
      company: 'GlobalReach Corp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The multi-language support and global market insights helped us expand into 5 new countries successfully. The AI predictions were spot-on for each market\'s behavior patterns.',
      results: { metric: '5', label: 'New Markets' }
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Consultant',
      company: 'Thompson & Associates',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I recommend ADmyBRAND to all my clients. The ROI tracking is phenomenal, and the automated A/B testing has improved campaign performance across the board. It\'s a game-changer.',
      results: { metric: '250%', label: 'ROI Improvement' }
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'EcoTech Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The content generation feature creates compelling copy that converts better than what we were producing manually. Our email open rates increased by 67% in the first month.',
      results: { metric: '67%', label: 'Open Rate Boost' }
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold testimonial-title">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl testimonial-text">
            Join thousands of satisfied customers who have transformed their marketing 
            with our AI-powered suite.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="testimonial-card">
                <CardContent className="text-center p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  
                  <p className="text-xl md:text-2xl testimonial-quote mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-secondary-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-secondary-600">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-primary-600 font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                    <div className="text-center bg-primary-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">
                        {testimonials[currentIndex].results.metric}
                      </div>
                      <div className="text-sm text-secondary-600">
                        {testimonials[currentIndex].results.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-secondary-600 mb-8">
            Trusted by 10,000+ companies worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechFlow Inc.',
              'Digital Dynamics',
              'StartupLab',
              'GlobalReach',
              'EcoTech Solutions',
              'Thompson & Associates'
            ].map((company, index) => (
              <div
                key={index}
                className="text-center font-semibold text-secondary-500 text-sm md:text-base"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { stat: '10,000+', label: 'Active Users' },
            { stat: '300%', label: 'Average ROI Increase' },
            { stat: '99.9%', label: 'Uptime Guarantee' },
            { stat: '4.9/5', label: 'Customer Rating' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {item.stat}
              </div>
              <div className="text-secondary-600">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials