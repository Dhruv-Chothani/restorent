'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { containerVariants, itemVariants, scaleVariants, slideUpVariants } from '@/lib/animations'
import Image from 'next/image'
import { useRef } from 'react'

const dishes = [
  {
    id: 1,
    name: 'Pan-Seared Wagyu',
    description: 'Japanese A5 wagyu with truffle reduction, seared to perfection with caramelized edges, topped with edible gold leaf and fresh microgreens',
    price: '$89',
    category: 'Signature',
    image: '/dish-wagyu.jpg',
  },
  {
    id: 2,
    name: 'Appetizer Selection',
    description: 'Curated selection of our finest appetizers including foie gras terrine, oysters Rockefeller, and langoustine bisque',
    price: '$38',
    category: 'Appetizer',
    image: '/appetizer-plate.jpg',
  },
  {
    id: 3,
    name: 'Dover Sole Meunière',
    description: 'Classic French preparation with brown butter, fresh lemon, seasonal vegetables, and aromatic herbs',
    price: '$76',
    category: 'Entrée',
    image: '/dish-sole.jpg',
  },
]

export default function FeaturedDishes() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -50])
  const y2 = useTransform(scrollY, [300, 1200], [0, -50])
  const y3 = useTransform(scrollY, [600, 1500], [0, -50])

  return (
    <section ref={ref} className="section bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            Our Selection
          </motion.p>
          <motion.h2 variants={itemVariants} className="heading-md text-primary mb-6">
            Signature Dishes
          </motion.h2>
          <motion.p
            variants={slideUpVariants}
            className="text-foreground/70 max-w-2xl mx-auto font-serif italic"
          >
            Carefully curated plates that showcase our chef&apos;s mastery and passion for culinary excellence
          </motion.p>
        </motion.div>

        {/* Dishes Grid */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {dishes.map((dish, index) => {
            const parallaxY = [y1, y2, y3][index]
            return (
              <motion.div
                key={dish.id}
                variants={scaleVariants}
                className="group relative flex flex-col h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with Parallax */}
                <motion.div
                  style={{ y: parallaxY }}
                  className="relative h-64 mb-6 overflow-hidden rounded-lg"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/30"
                  />
                </motion.div>
                <div className="flex-1 bg-white p-6 space-y-4 rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-xl font-bold text-primary mb-2"
                      >
                        {dish.name}
                      </motion.h3>
                      <p className="text-secondary text-xs uppercase tracking-widest mb-3">
                        {dish.category}
                      </p>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-secondary font-serif text-lg font-bold whitespace-nowrap"
                    >
                      {dish.price}
                    </motion.span>
                  </div>
                  <p className="text-foreground/70 font-serif italic text-sm">
                    {dish.description}
                  </p>
                  <div className="pt-4 border-t border-primary/20 group-hover:border-secondary/50 transition-colors duration-300">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-secondary font-serif text-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      View Full Menu →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
