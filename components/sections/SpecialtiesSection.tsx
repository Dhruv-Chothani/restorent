'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'
import Image from 'next/image'

export default function SpecialtiesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const specialties = [
    {
      title: 'Ingredient Sourcing',
      description: 'We work directly with premium suppliers worldwide to source the finest ingredients. From Hokkaido scallops to French butter, every component is selected for exceptional quality and freshness.',
      image: '/wine-collection.jpg',
    },
    {
      title: 'Seasonal Menus',
      description: 'Our menus change with the seasons, celebrating the best produce available. Chef François crafts new dishes that highlight the natural flavors of peak-season ingredients.',
      image: '/appetizer-plate.jpg',
    },
    {
      title: 'Wine Pairing',
      description: 'Our sommelier has curated an extensive wine collection featuring rare vintages and hidden gems. Expert pairings enhance every course, creating a harmonious gastronomic experience.',
      image: '/wine-collection.jpg',
    },
  ]

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
            What We Excel At
          </motion.p>
          <motion.h2 variants={itemVariants} className="heading-md text-primary mb-6">
            Our Specialties
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground/70 max-w-2xl mx-auto font-serif italic"
          >
            Discover the elements that make CafeDayNight Restaurant a destination for discerning diners
          </motion.p>
        </motion.div>

        {/* Specialties */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {specialty.title}
                </h3>
                <p className="text-foreground/70 font-serif italic leading-relaxed">
                  {specialty.description}
                </p>
              </div>
              <div className={`relative h-64 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-20 pt-16 border-t border-primary/20 text-center"
        >
          <motion.h3 variants={itemVariants} className="font-serif text-2xl font-bold text-primary mb-4">
            Ready to Experience Excellence?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-foreground/70 font-serif italic mb-8 max-w-xl mx-auto"
          >
            Book your table today and discover why CafeDayNight Restaurant is a culinary destination
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="/reservations"
            className="inline-block px-8 py-3 bg-primary text-light font-serif font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300"
          >
            Reserve Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
