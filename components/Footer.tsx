'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12 mb-12 border-b border-secondary/20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">CAFEDAYNIGHT</h3>
            <p className="text-light/70 font-serif italic text-sm">
              Experience culinary excellence in an atmosphere of refined elegance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-bold mb-4">Restaurant</h4>
            <ul className="space-y-2">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/reservations', label: 'Reservations' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-1 text-sm text-light/70 font-serif italic">
              <li>Tue - Thu: 5:30 PM - 10:00 PM</li>
              <li>Fri - Sat: 5:30 PM - 11:00 PM</li>
              <li>Sun: 5:00 PM - 9:00 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-light/70 font-serif italic">
              <li>
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a href="mailto:info@luxerestaurant.com" className="hover:text-secondary transition-colors">
                  info@cafedaynight.com
                </a>
              </li>
              <li>123 Culinary Lane, Cuisine City, CC 12345</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-light/60">
          <p className="font-serif italic">
            © {currentYear} CafeDayNight Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Accessibility', href: '#' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary transition-colors text-xs uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
