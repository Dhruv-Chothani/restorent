'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform } from 'framer-motion'
import { slideUpVariants, slideLeftVariants, slideRightVariants } from '@/lib/animations'
import Image from 'next/image'
import { useRef } from 'react'

export default function ChefStory() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [1000, 2000], [0, -100])
  const contentY = useTransform(scrollY, [1000, 2000], [0, 50])

  return (
    <section ref={ref} className="section bg-primary text-light overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideLeftVariants}
            style={{ y: contentY }}
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : 'hidden'}
              transition={{ duration: 0.8 }}
              className="text-secondary text-sm uppercase tracking-[0.3em] mb-4"
            >
              Our Heritage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-md text-light mb-6"
            >
              Chef&apos;s Vision
            </motion.h2>
            <div className="space-y-4 font-serif text-light/80 italic">
              {[
                'With over 20 years of experience in Michelin-starred kitchens across Europe, our head chef brings a passion for innovation and respect for tradition.',
                'Every dish is a story, carefully crafted to take you on a culinary journey that celebrates the finest ingredients and classical techniques.',
                'At CafeDayNight, we believe that exceptional food comes from exceptional ingredients, sourced directly from our trusted purveyors around the world.'
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : 'hidden'}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 pt-6 border-t border-secondary/30"
            >
              <p className="font-serif text-light">
                <span className="text-secondary">— Chef François Laurent</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Chef Image */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideRightVariants}
            style={{ y: imageY }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/chef-portrait.jpg"
              alt="Chef François Laurent"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : 'hidden'}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
