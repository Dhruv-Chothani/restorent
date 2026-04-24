'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideUpVariants, containerVariants, itemVariants } from '@/lib/animations'

export default function AboutContent() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-96 bg-primary text-light pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1 className="heading-lg text-light mb-6">
            About CafeDayNight
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="section bg-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="heading-md text-primary mb-4">Our Heritage</h2>
              <p className="text-foreground/80 font-serif italic leading-relaxed mb-4">
                Founded in 2010, CafeDayNight Restaurant has become a beacon of culinary excellence in the city. What started as Chef François Laurent&apos;s vision to create a space where tradition meets innovation has blossomed into one of the most celebrated fine dining establishments.
              </p>
              <p className="text-foreground/80 font-serif italic leading-relaxed">
                Our commitment to sourcing the finest ingredients, employing classical techniques, and embracing culinary creativity has earned us recognition and loyalty from guests around the world.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
            />

            <motion.div variants={itemVariants}>
              <h2 className="heading-md text-primary mb-4">Our Philosophy</h2>
              <p className="text-foreground/80 font-serif italic leading-relaxed mb-4">
                At CafeDayNight, we believe that exceptional dining is about more than just food. It&apos;s about creating memories, celebrating moments, and connecting with others through the universal language of cuisine.
              </p>
              <p className="text-foreground/80 font-serif italic leading-relaxed">
                Every dish is a reflection of our passion, every service a demonstration of our dedication, and every experience a testament to our commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
            />

            <motion.div variants={itemVariants}>
              <h2 className="heading-md text-primary mb-4">Our Team</h2>
              <p className="text-foreground/80 font-serif italic leading-relaxed mb-4">
                Our team consists of award-winning chefs, skilled sommeliers, and hospitality professionals who share a passion for creating unforgettable experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {['Chef Laurent', 'Head Sommelier', 'Pastry Chef'].map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                    className="text-center p-6 border border-primary/20 rounded-lg hover:border-secondary/50 transition-colors"
                  >
                    <div className="text-4xl mb-3">👨‍🍳</div>
                    <p className="font-serif font-bold text-primary">{role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
            />

            <motion.div variants={itemVariants}>
              <h2 className="heading-md text-primary mb-4">Awards & Recognition</h2>
              <ul className="space-y-3 text-foreground/80 font-serif italic">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">★</span>
                  <span>Michelin Star (2015-Present)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">★</span>
                  <span>Best Fine Dining Restaurant (2020, 2022, 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">★</span>
                  <span>Chef of the Year - Food Critics Association (2019)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">★</span>
                  <span>Wine Program Excellence Award (2023)</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
