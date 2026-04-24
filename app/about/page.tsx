import Navbar from '@/components/Navbar'
import AboutContent from '@/components/sections/AboutContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us - CafeDayNight Restaurant',
  description: 'Learn about CafeDayNight Restaurant, our heritage, philosophy, and the team behind our culinary excellence.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  )
}
