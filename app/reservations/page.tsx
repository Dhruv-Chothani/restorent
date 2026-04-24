import Navbar from '@/components/Navbar'
import ReservationContent from '@/components/sections/ReservationContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Reservations - CafeDayNight Restaurant',
  description: 'Make a reservation at CafeDayNight Restaurant and secure your table for an unforgettable dining experience.',
}

export default function ReservationsPage() {
  return (
    <main>
      <Navbar />
      <ReservationContent />
      <Footer />
    </main>
  )
}
