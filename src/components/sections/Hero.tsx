import Link from 'next/link'

interface HeroProps {
  onBookingClick: () => void
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-slate-300">フリーランスエンジニア向けサポート</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            <span className="block text-white mb-2">はじめてのフリーランスでも</span>
            <span className="block bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              安心して始められる
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            営業・単価交渉・契約に不安があっても大丈夫。
            <br className="hidden md:block" />
            フリーランス初心者の味方として、あなたの最初の一歩を全力でサポートします。
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>無理な案件を押し付けません</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>参画後もしっかりフォロー</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>エンジニア目線の担当者</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onBookingClick}
              className="group bg-cta hover:bg-cta/90 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-xl hover:shadow-cta/50 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
            >
              無料でオンライン面談を予約する
              <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <Link
              href="#how-it-works"
              className="glass hover:bg-white/15 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              利用の流れを見る
            </Link>
          </div>

          {/* Reassurance note */}
          <p className="text-sm text-slate-500 max-w-2xl mx-auto pt-2">
            まずは話を聞くだけでもOKです。不安や疑問を整理するための相談も大歓迎。
            <br />
            まだ案件が決まっていなくても、お気軽にご相談ください。
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
