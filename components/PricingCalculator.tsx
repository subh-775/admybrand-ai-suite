import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/Utils';

const features = [
  { name: 'AI Copywriting', price: 19 },
  { name: 'Ad Campaign Optimizer', price: 39 },
  { name: 'Audience Insights', price: 29 },
  { name: 'ROI Tracker', price: 49 },
  { name: 'SEO Analyzer', price: 25 },
];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFeature = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const total = selected.reduce((sum, name) => {
    const feature = features.find((f) => f.name === name);
    return sum + (feature?.price || 0);
  }, 0);

  return (
    <section className="py-16 bg-white dark:bg-secondary-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Estimate Your Monthly Cost
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-8">
          Select the AI features you need and calculate your estimated monthly
          subscription.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {features.map((feature) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={feature.name}
              className={cn(
                'cursor-pointer border rounded-lg p-4 transition-all duration-300',
                selected.includes(feature.name)
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400'
                  : 'border-gray-200 hover:border-blue-300 dark:border-gray-700'
              )}
              onClick={() => toggleFeature(feature.name)}
            >
              <h3 className="font-medium text-lg mb-1">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                ${feature.price}/month
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-xl font-semibold">
          Total: <span className="text-blue-600 dark:text-blue-400">${total}</span>/month
        </div>
      </div>
    </section>
  );
}
