'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'
import Image from 'next/image'

export default function WinePairing() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const pairings = [
    {
      wine: 'Burgundy Pinot Noir',
      course: 'Pan-Seared Wagyu',
      notes: 'Elegant red wine with silky tannins perfectly complements the richness of wagyu beef',
      year: '2018',
    },
    {
      wine: 'Loire Valley Sauvignon Blanc',
      course: 'Dover Sole Meunière',
      notes: 'Fresh, crisp white wine with mineral notes pairs beautifully with delicate fish',
      year: '2020',
    },
    {
      wine: 'Champagne Brut',
      course: 'Langoustine Bisque',
      notes: 'Effervescent bubbles and citrus notes enhance the sweetness of langoustine',
      year: '2017',
    },
    {
      wine: 'Sauternes',
      course: 'Chocolate Soufflé',
      notes: 'Sweet golden wine with honey notes is the perfect companion to chocolate desserts',
      year: '2015',
    },
  ]

  return (
    <section ref={ref} className="section bg-primary text-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            Expert Pairings
          </motion.p>
          <motion.h2 variants={itemVariants} className="heading-md text-light mb-6">
            Wine Pairings
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-light/80 max-w-2xl mx-auto font-serif italic"
          >
            Our sommelier carefully selects wines that enhance every dish on our menu
          </motion.p>
        </motion.div>

        {/* Wine Collection Image */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="relative h-96 rounded-lg overflow-hidden mb-16"
        >
          <Image
            src="/wine-collection.jpg"
            alt="Wine Collection at CafeDayNight"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Pairings Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {pairings.map((pairing, index) => (
            <motion.div
              key={pairing.wine}
              variants={itemVariants}
              className="p-8 border border-secondary/30 rounded-lg hover:border-secondary/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-secondary mb-1">
                    {pairing.wine}
                  </h3>
                  <p className="text-light/70 font-serif italic text-sm">
                    Vintage {pairing.year}
                  </p>
                </div>
              </div>
              <div className="border-t border-secondary/20 pt-4 mb-4">
                <p className="text-light/80 text-sm font-serif mb-2">
                  <span className="text-secondary font-bold">Pairs with:</span> {pairing.course}
                </p>
                <p className="text-light/70 font-serif italic text-sm">
                  {pairing.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-16 pt-16 border-t border-secondary/30"
        >
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-light mb-4">
              Sommelier Services
            </h3>
            <p className="text-light/80 font-serif italic mb-6">
              Our head sommelier is available to discuss wine selections and create custom pairings based on your preferences. Wine flights and tasting menus are available upon request.
            </p>
            <a
              href="/reservations"
              className="inline-block px-8 py-3 bg-secondary text-primary font-serif font-bold uppercase tracking-widest hover:bg-secondary/90 transition-all duration-300"
            >
              Book Your Experience
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
