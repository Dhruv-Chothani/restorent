import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedDishes from '@/components/sections/FeaturedDishes'
import ChefStory from '@/components/sections/ChefStory'
import SpecialtiesSection from '@/components/sections/SpecialtiesSection'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedDishes />
      <ChefStory />
      <SpecialtiesSection />
      <Testimonials />
      <Footer />
    </main>
  )
}
