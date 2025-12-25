'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavbarProps {
  onBookingClick: () => void
}

export default function Navbar({ onBookingClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg shadow-neon-blue/10' : 'glass'
      } rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-neon-gradient rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-heading font-semibold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              ROSCA
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#service" className="text-sm text-slate-300 hover:text-neon-blue transition-colors cursor-pointer">
              サービス
            </Link>
            <Link href="#projects" className="text-sm text-slate-300 hover:text-neon-blue transition-colors cursor-pointer">
              案件一覧
            </Link>
            <Link href="#how-it-works" className="text-sm text-slate-300 hover:text-neon-blue transition-colors cursor-pointer">
              利用の流れ
            </Link>
            <Link href="#testimonials" className="text-sm text-slate-300 hover:text-neon-blue transition-colors cursor-pointer">
              利用者の声
            </Link>
            <Link href="#faq" className="text-sm text-slate-300 hover:text-neon-blue transition-colors cursor-pointer">
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={onBookingClick}
            className="bg-cta hover:bg-cta/90 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cta/50 cursor-pointer"
          >
            無料面談を予約
          </button>
        </div>
      </div>
    </nav>
  )
}
