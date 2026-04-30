'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { calculateBMI, getBMICategory } from '@/lib/utils';

export function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    if (height && weight) {
      const calculatedBMI = calculateBMI(parseFloat(weight), parseFloat(height));
      setBmi(calculatedBMI);
    }
  };

  const bmiInfo = bmi ? getBMICategory(bmi) : null;

  return (
    <section className="py-24 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="glass-effect p-8 md:p-12 rounded-3xl">
            <div className="text-center mb-8">
              <Activity className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bebas font-bold mb-4">
                BMI <span className="gradient-text">Calculator</span>
              </h2>
              <p className="text-foreground-secondary">Check your Body Mass Index instantly</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g., 170"
                  className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 70"
                  className="w-full px-4 py-3 bg-background-tertiary border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              disabled={!height || !weight}
              className="w-full py-4 bg-gradient-to-r from-accent to-accent-secondary rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate BMI
            </button>

            {bmi && bmiInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-background-tertiary rounded-xl"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl font-bebas font-bold gradient-text mb-2">{bmi}</div>
                  <div className={`text-2xl font-bold ${bmiInfo.color}`}>{bmiInfo.category}</div>
                </div>
                <p className="text-foreground-secondary text-center">{bmiInfo.recommendation}</p>
                <a
                  href="/contact"
                  className="mt-4 flex items-center justify-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
