'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const textY = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-dish.jpg"
          alt="CafeDayNight Restaurant Hero Dish"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative h-full flex flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-secondary text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-serif">
            Welcome to Excellence
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-lg text-light mb-6 max-w-4xl drop-shadow-2xl"
        >
          Culinary Perfection Awaits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-light/80 text-lg md:text-xl max-w-2xl mb-12 font-serif italic"
        >
          Indulge in an unforgettable gastronomic journey where tradition meets innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/menu"
              className="px-8 py-4 bg-secondary text-primary font-serif font-bold uppercase tracking-widest hover:shadow-2xl transition-all duration-300 inline-block"
            >
              Explore Menu
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/reservations"
              className="px-8 py-4 border-2 border-secondary text-secondary font-serif font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all duration-300 inline-block"
            >
              Make a Reservation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-secondary/70 text-xs uppercase tracking-widest">Scroll to Explore</span>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-secondary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
