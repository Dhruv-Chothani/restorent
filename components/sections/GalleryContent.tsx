'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { containerVariants, itemVariants, rotateVariants } from '@/lib/animations'
import Image from 'next/image'
import { useRef } from 'react'

const galleryItems = [
  { id: 1, title: 'Pan-Seared Wagyu', category: 'Signature Dish', image: '/dish-wagyu.jpg' },
  { id: 2, title: 'Dining Room Ambiance', category: 'Interior', image: '/gallery-dining.jpg' },
  { id: 3, title: 'Dover Sole Meunière', category: 'Entrée', image: '/dish-sole.jpg' },
  { id: 4, title: 'Appetizer Selection', category: 'Appetizers', image: '/appetizer-plate.jpg' },
  { id: 5, title: 'Wine Collection', category: 'Bar', image: '/wine-collection.jpg' },
  { id: 6, title: 'Chocolate Soufflé', category: 'Dessert', image: '/dessert-soufle.jpg' },
  { id: 7, title: 'Artisan Plating', category: 'Culinary', image: '/gallery-plating.jpg' },
  { id: 8, title: 'Restaurant Interior', category: 'Ambiance', image: '/restaurant-interior.jpg' },
]

export default function GalleryContent() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [4000, 5500], [0, -150])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 bg-primary text-light pt-32 pb-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary text-sm uppercase tracking-[0.3em] mb-4"
          >
            Visual Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="heading-lg text-light mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-light/80 font-serif italic max-w-2xl mx-auto"
          >
            Explore the beauty and elegance that defines CafeDayNight
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="section bg-light overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : 'hidden'}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-120 transition-transform duration-500"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end justify-start p-4"
                >
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : 'hidden'}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                      className="font-serif font-bold text-light text-sm mb-1"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : 'hidden'}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.25 }}
                      className="text-light/80 text-xs uppercase tracking-widest"
                    >
                      {item.category}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
