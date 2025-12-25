'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import ServiceOverview from '@/components/sections/ServiceOverview'
import ProjectPreview from '@/components/sections/ProjectPreview'
import Strengths from '@/components/sections/Strengths'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Resources from '@/components/sections/Resources'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/Navbar'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <>
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
      <main className="min-h-screen">
        <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
        <ServiceOverview />
        <ProjectPreview onBookingClick={() => setIsBookingModalOpen(true)} />
        <Strengths />
        <HowItWorks onBookingClick={() => setIsBookingModalOpen(true)} />
        <Testimonials />
        <Resources onBookingClick={() => setIsBookingModalOpen(true)} />
        <FAQ onBookingClick={() => setIsBookingModalOpen(true)} />
      </main>
      <Footer onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
