import Navbar from '@/components/Navbar'
import GalleryContent from '@/components/sections/GalleryContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Gallery - CafeDayNight Restaurant',
  description: 'Explore photos of our dishes, dining room, and culinary creations.',
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <GalleryContent />
      <Footer />
    </main>
  )
}
