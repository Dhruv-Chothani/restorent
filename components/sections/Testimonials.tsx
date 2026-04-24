'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { containerVariants, itemVariants, scaleVariants } from '@/lib/animations'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'An absolutely unforgettable dining experience. Every course was a masterpiece.',
    author: 'Sarah Mitchell',
    role: 'Travel Writer',
  },
  {
    id: 2,
    quote: 'The attention to detail is impeccable. This is fine dining at its finest.',
    author: 'James Chen',
    role: 'Food Critic',
  },
  {
    id: 3,
    quote: 'We celebrated our anniversary here and it was the perfect evening. Highly recommended!',
    author: 'Emma & Robert',
    role: 'Guests',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [1800, 2800], [0, -80])
  const y2 = useTransform(scrollY, [1900, 2900], [0, -80])
  const y3 = useTransform(scrollY, [2000, 3000], [0, -80])

  return (
    <section ref={ref} className="section bg-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            What Our Guests Say
          </motion.p>
          <motion.h2 variants={itemVariants} className="heading-md text-primary">
            Testimonials
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const parallaxY = [y1, y2, y3][index]
            return (
              <motion.div
                key={testimonial.id}
                variants={scaleVariants}
                style={{ y: parallaxY }}
                className="bg-white p-8 rounded-lg shadow-lg border border-primary/10 hover:border-secondary/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(45, 32, 23, 0.15)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Star Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : 'hidden'}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  className="flex items-center gap-1 mb-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : 'hidden'}
                      transition={{ duration: 0.5, delay: index * 0.15 + i * 0.05 }}
                      className="text-secondary text-lg group-hover:scale-125 transition-transform"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : 'hidden'}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
                  className="font-serif italic text-foreground/70 mb-6 leading-relaxed group-hover:text-foreground transition-colors"
                >
                  &quot;{testimonial.quote}&quot;
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.4 }}
                  className="border-t border-primary/10 pt-4"
                >
                  <p className="font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                    {testimonial.author}
                  </p>
                  <p className="text-secondary text-sm uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
