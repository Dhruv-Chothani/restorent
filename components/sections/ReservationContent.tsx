'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'
import { useState } from 'react'
import Image from 'next/image'

export default function ReservationContent() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 bg-primary text-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            Book Your Table
          </p>
          <h1 className="heading-lg text-light mb-6">
            Reservations
          </h1>
          <p className="text-light/80 font-serif italic max-w-2xl mx-auto">
            Experience an unforgettable evening at CafeDayNight Restaurant
          </p>
        </motion.div>
      </section>

      {/* Reservation Form */}
      <section ref={ref} className="section bg-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: '🕐', title: 'Hours', description: 'Tue-Thu 5:30PM, Fri-Sat 5:30PM, Sun 5:00PM' },
                { icon: '👥', title: 'Party Size', description: 'Up to 12 guests at a table, larger groups available' },
                { icon: '📞', title: 'Phone', description: 'Call us at +1 (234) 567-8900' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : 'hidden'}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                  className="text-center p-6 border border-primary/20 rounded-lg hover:border-secondary/50 transition-colors"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70 font-serif italic text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-12"
            />

            {/* Form */}
            <motion.div variants={itemVariants}>
              <h2 className="heading-md text-primary mb-8 text-center">Book Your Table</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-secondary/20 border border-secondary rounded-lg"
                >
                  <p className="font-serif font-bold text-primary mb-2">Reservation Confirmed!</p>
                  <p className="text-foreground/70 font-serif italic text-sm">
                    We&apos;ve received your reservation request. A confirmation email will be sent shortly with all the details.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Number of Guests *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={today}
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-serif font-bold mb-2">Preferred Time *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                    >
                      <option value="">Select a time</option>
                      {['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                    placeholder="Allergies, dietary preferences, celebrations, etc."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-secondary text-primary font-serif font-bold uppercase tracking-widest hover:bg-secondary/90 transition-all duration-300 text-lg"
                >
                  Reserve Your Table
                </motion.button>

                <p className="text-foreground/60 font-serif italic text-center text-sm">
                  * Required fields. You&apos;ll receive a confirmation email once your reservation is confirmed.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="section bg-primary text-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="heading-md text-light mb-12 text-center">
              Experience The Ambiance
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={itemVariants}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/restaurant-interior.jpg"
                  alt="CafeDayNight Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center space-y-4"
              >
                <h3 className="font-serif text-2xl font-bold text-light">Elegant Setting</h3>
                <p className="text-light/80 font-serif italic">
                  Our intimate dining room features carefully curated décor, soft golden lighting, and a refined atmosphere perfect for special occasions and memorable dinners. Every element is designed to enhance your culinary journey.
                </p>
                <ul className="space-y-2 text-light/80 font-serif">
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Private dining areas available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Intimate tables for couples</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Group celebration packages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Sommelier wine pairings</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center space-y-4 order-2 md:order-1"
              >
                <h3 className="font-serif text-2xl font-bold text-light">Our Signature</h3>
                <p className="text-light/80 font-serif italic">
                  What truly sets CafeDayNight apart is our commitment to exceptional service. Every staff member is trained to anticipate your needs and create a seamless, memorable dining experience that exceeds expectations.
                </p>
                <ul className="space-y-2 text-light/80 font-serif">
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Personalized service excellence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Custom menu design available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Dietary accommodations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-secondary">•</span>
                    <span>Wine expert recommendations</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="relative h-64 rounded-lg overflow-hidden order-1 md:order-2"
              >
                <Image
                  src="/gallery-dining.jpg"
                  alt="Fine Dining Experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
