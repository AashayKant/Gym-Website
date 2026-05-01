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
    <section className="py-18 bg-background-secondary sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="glass-effect rounded-3xl p-5 sm:p-8 md:p-12">
            <div className="mb-7 text-center sm:mb-8">
              <Activity className="mx-auto mb-3 h-12 w-12 text-accent sm:mb-4 sm:h-16 sm:w-16" />
              <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
                BMI <span className="gradient-text">Calculator</span>
              </h2>
              <p className="text-sm text-foreground-secondary sm:text-base">Check your Body Mass Index instantly</p>
            </div>

            <div className="mb-6 grid gap-4 sm:mb-8 sm:gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g., 170"
                  className="w-full rounded-lg border border-white/10 bg-background-tertiary px-4 py-3.5 text-base focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 70"
                  className="w-full rounded-lg border border-white/10 bg-background-tertiary px-4 py-3.5 text-base focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              disabled={!height || !weight}
              className="w-full rounded-lg bg-gradient-to-r from-accent to-accent-secondary py-3.5 text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 disabled:cursor-not-allowed disabled:opacity-50 sm:py-4 sm:text-lg"
            >
              Calculate BMI
            </button>

            {bmi && bmiInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 rounded-xl bg-background-tertiary p-5 sm:mt-8 sm:p-6"
              >
                <div className="text-center mb-4">
                  <div className="mb-2 text-5xl font-bebas font-bold gradient-text sm:text-6xl">{bmi}</div>
                  <div className={`text-xl font-bold sm:text-2xl ${bmiInfo.color}`}>{bmiInfo.category}</div>
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
