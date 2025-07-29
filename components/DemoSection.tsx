'use client'

import React from 'react'

const DemoSection = () => {
  return (
    <section
      id="demo"
      className="py-20 bg-gray-900 text-white dark:bg-gray-900 dark:text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 See ADmyBRAND in Action</h2>
        <p className="text-lg mb-8">
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
