'use client'

import React from 'react'

const DemoSection = () => {
  return (
    <section
      id="demo"
      className="py-20 bg-white text-black dark:bg-gray-900 dark:text-white text-center transition-theme"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"> 
          <span className="gradient-text dark:gradient-text-dark">See ADmyBRAND in Action</span>
        </h2>
        <p className="text-lg mb-8 text-secondary-700 dark:text-gray-300">
          Watch this short demo animation to experience our AI Suite
        </p>
        <img
          src="/mydemo.gif"
          alt="ADmyBRAND Demo"
          className="w-full rounded-xl shadow-lg mx-auto"
        />
      </div>
    </section>
  )
}

export default DemoSection
