'use client'

import { useEffect, useRef } from 'react'

interface ProjectPreviewProps {
  onBookingClick?: () => void
}

export default function ProjectPreview({ onBookingClick }: ProjectPreviewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout
    let isUserInteracting = false

    const startAutoScroll = () => {
      if (isUserInteracting) return
      scrollInterval = setInterval(() => {
        if (isUserInteracting) return
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    const stopAutoScroll = () => {
      clearInterval(scrollInterval)
    }

    startAutoScroll()

    // Mouse events for desktop
    const handleMouseEnter = () => {
      isUserInteracting = true
      stopAutoScroll()
    }
    const handleMouseLeave = () => {
      isUserInteracting = false
      startAutoScroll()
    }

    // Touch events for mobile
    const handleTouchStart = () => {
      isUserInteracting = true
      stopAutoScroll()
    }
    const handleTouchEnd = () => {
      isUserInteracting = false
      setTimeout(() => {
        if (!isUserInteracting) {
          startAutoScroll()
        }
      }, 2000) // Resume auto-scroll 2 seconds after touch ends
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true })
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      clearInterval(scrollInterval)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      scrollContainer.removeEventListener('touchstart', handleTouchStart)
      scrollContainer.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const projects = [
    {
      title: 'Web アプリケーション開発',
      company: 'IT 企業（非公開）',
      location: 'リモート可 / 東京',
      price: '¥600,000〜¥700,000',
      skills: ['React', 'TypeScript', 'Node.js'],
      description: '社内向け管理画面の開発。チーム開発の経験を積みながら、モダンな技術スタックに触れられます。',
      reason: 'レビュー体制が充実しており、先輩エンジニアからのフィードバックが受けられます',
      suitedFor: '実務経験1〜2年のエンジニア',
      badge: 'おすすめ',
      badgeColor: 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
    },
    {
      title: '既存システムの保守・運用',
      company: '大手 SI 企業',
      location: '東京（週1リモート可）',
      price: '¥550,000〜¥650,000',
      skills: ['Java', 'Spring Boot', 'MySQL'],
      description: '既存システムの保守・運用と小規模な機能追加。安定した環境でじっくりスキルを身につけられます。',
      reason: '急な納期やプレッシャーが少なく、自分のペースで業務に取り組めます',
      suitedFor: 'フリーランス初めての方',
      badge: '初心者歓迎',
      badgeColor: 'bg-neon-purple/20 text-neon-purple border-neon-purple/30',
    },
    {
      title: 'モバイルアプリ開発サポート',
      company: 'スタートアップ企業',
      location: 'リモートメイン',
      price: '¥650,000〜¥750,000',
      skills: ['React Native', 'TypeScript', 'Firebase'],
      description: 'モバイルアプリの新機能開発。少人数チームでプロダクト作りに携われます。',
      reason: '裁量が大きく、自分のアイデアを反映しやすい環境です',
      suitedFor: 'モバイル開発に興味がある方',
      badge: '成長環境',
      badgeColor: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
    },
    {
      title: 'フロントエンド開発',
      company: 'EC サイト運営企業',
      location: 'リモート',
      price: '¥700,000〜¥800,000',
      skills: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      description: 'ECサイトのUI/UX改善プロジェクト。ユーザー体験を向上させる開発に携われます。',
      reason: 'デザイナーと密に連携でき、UI/UXスキルを磨けます',
      suitedFor: 'フロントエンド特化したい方',
      badge: '高単価',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    },
    {
      title: 'バックエンドAPI開発',
      company: 'SaaS企業',
      location: 'フルリモート',
      price: '¥680,000〜¥780,000',
      skills: ['Python', 'Django', 'PostgreSQL'],
      description: 'SaaS製品のバックエンドAPI開発。スケーラブルなシステム設計を学べます。',
      reason: 'モダンな開発環境で最新技術に触れられます',
      suitedFor: 'バックエンド志向の方',
      badge: '技術力UP',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
  ]

  // 配列を2倍にして無限スクロール効果を作る
  const duplicatedProjects = [...projects, ...projects]

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-slate-800/30 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            安心して始められる
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              案件例
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            フリーランス初心者でも参画しやすい案件を中心にご紹介
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              overflowX: 'auto'
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-slate-800/60 hover:bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group"
              >
                <div className="p-6 space-y-4">
                  {/* Badge & Price */}
                  <div className="flex items-start justify-between gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-neon-blue">{project.price}</div>
                      <div className="text-xs text-slate-500">月額</div>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white group-hover:text-neon-blue transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">{project.company}</p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Reason & Suited For */}
                  <div className="space-y-3 pt-4 border-t border-slate-700/50">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-sm text-slate-300">{project.reason}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm text-slate-300">{project.suitedFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-slate-800/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none" />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            他にも多数の案件をご用意しています。まずはお気軽にご相談ください。
          </p>
          <button
            onClick={onBookingClick}
            className="inline-block bg-cta hover:bg-cta/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cta/50 cursor-pointer"
          >
            案件について相談する
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
