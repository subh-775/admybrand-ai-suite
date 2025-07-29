'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does the AI-powered analytics work?',
      answer: 'Our AI analyzes your marketing data using advanced machine learning algorithms to identify patterns, predict trends, and provide actionable insights. It processes data from multiple sources including social media, email campaigns, website analytics, and customer behavior to give you a comprehensive view of your marketing performance.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required. You can explore all the tools, set up campaigns, and see the results before deciding to upgrade to a paid plan.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Absolutely! ADmyBRAND integrates with over 100+ popular marketing tools including Google Analytics, Facebook Ads, Mailchimp, Salesforce, HubSpot, Shopify, and many more. Our API also allows custom integrations for enterprise clients.'
    },
    {
      question: 'How accurate are the AI predictions?',
      answer: 'Our AI models achieve 95%+ accuracy in predicting customer behavior and campaign performance. The accuracy improves over time as the system learns from your specific data patterns. We continuously update our algorithms using the latest machine learning research.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Data security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is stored in secure data centers with 24/7 monitoring and regular security audits.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with just one click. There are no cancellation fees or long-term contracts. If you cancel, you\'ll continue to have access to your account until the end of your billing period.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'We provide 24/7 customer support through live chat, email, and phone. Our Professional and Enterprise plans include priority support with dedicated account managers. We also offer extensive documentation, video tutorials, and webinar training sessions.'
    },
    {
      question: 'What makes ADmyBRAND different from competitors?',
      answer: 'ADmyBRAND stands out with its advanced AI capabilities, ease of use, and comprehensive feature set. Unlike other tools that focus on single aspects of marketing, we provide an all-in-one solution with predictive analytics, automated optimization, and real-time insights - all powered by cutting-edge AI technology.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-theme">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 faq-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-center mb-12 faq-subtitle">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-secondary-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="faq-answer leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="faq-item p-8 shadow-lg">
            <h3 className="faq-question mb-4">
              Still have questions?
            </h3>
            <p className="faq-answer mb-6">
              Our team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-secondary-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ