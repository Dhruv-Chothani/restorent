'use client'

import { motion } from 'framer-motion'

export default function MenuHero() {
  return (
    <section className="relative min-h-96 bg-primary text-light pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
      >
        <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
          Culinary Offerings
        </p>
        <h1 className="heading-lg text-light mb-6">
          Our Menu
        </h1>
        <p className="text-light/80 font-serif italic max-w-2xl mx-auto">
          Explore our carefully curated selection of dishes created with passion and precision
        </p>
      </motion.div>
    </section>
  )
}
