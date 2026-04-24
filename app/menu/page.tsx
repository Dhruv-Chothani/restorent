import Navbar from '@/components/Navbar'
import MenuHero from '@/components/sections/MenuHero'
import MenuItems from '@/components/sections/MenuItems'
import WinePairing from '@/components/sections/WinePairing'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Menu - CafeDayNight Restaurant',
  description: 'Explore our complete menu featuring fine dining dishes crafted by our award-winning chef.',
}

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <MenuHero />
      <MenuItems />
      <WinePairing />
      <Footer />
    </main>
  )
}
