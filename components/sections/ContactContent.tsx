'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'
import { useState } from 'react'

export default function ContactContent() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
    // Simulate form submission
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 bg-primary text-light pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </p>
          <h1 className="heading-lg text-light mb-6">
            Contact Us
          </h1>
          <p className="text-light/80 font-serif italic max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out with any questions or inquiries.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="section bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="heading-md text-primary mb-8">
                Contact Information
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">Address</h3>
                  <p className="text-foreground/70 font-serif italic">
                    123 Culinary Lane<br />
                    Cuisine City, CC 12345<br />
                    United States
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-secondary hover:text-secondary/80 transition-colors font-serif"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:info@luxerestaurant.com"
                    className="text-secondary hover:text-secondary/80 transition-colors font-serif"
                  >
                    info@luxerestaurant.com
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-serif font-bold text-primary mb-3">Hours</h3>
                  <ul className="space-y-2 text-foreground/70 font-serif italic text-sm">
                    <li>Tuesday - Thursday: 5:30 PM - 10:00 PM</li>
                    <li>Friday - Saturday: 5:30 PM - 11:00 PM</li>
                    <li>Sunday: 5:00 PM - 9:00 PM</li>
                    <li className="text-secondary">Monday: Closed</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="heading-md text-primary mb-8">
                Send us a Message
              </motion.h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-secondary/20 border border-secondary text-primary rounded-lg"
                >
                  <p className="font-serif font-bold">Thank you for your message!</p>
                  <p className="text-sm font-serif italic">We&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                  />
                </div>

                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                  />
                </div>

                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                  />
                </div>

                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-primary font-serif font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary/30 bg-white focus:outline-none focus:border-secondary transition-colors font-serif"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-secondary text-primary font-serif font-bold uppercase tracking-widest hover:bg-secondary/90 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
