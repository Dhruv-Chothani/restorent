import Navbar from '@/components/Navbar'
import ContactContent from '@/components/sections/ContactContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact - CafeDayNight Restaurant',
  description: 'Get in touch with CafeDayNight Restaurant for reservations, events, or inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
