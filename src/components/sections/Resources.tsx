'use client'

import { useEffect, useRef } from 'react'

interface ResourcesProps {
  onBookingClick?: () => void
}

export default function Resources({ onBookingClick }: ResourcesProps) {
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setupAutoScroll = (scrollContainer: HTMLDivElement | null) => {
      if (!scrollContainer) return

      let scrollInterval: NodeJS.Timeout

      const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0
          } else {
            scrollContainer.scrollLeft += 1
          }
        }, 30)
      }

      startAutoScroll()

      const handleMouseEnter = () => clearInterval(scrollInterval)
      const handleMouseLeave = () => startAutoScroll()

      scrollContainer.addEventListener('mouseenter', handleMouseEnter)
      scrollContainer.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        clearInterval(scrollInterval)
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    const cleanup1 = setupAutoScroll(scrollRef1.current)
    const cleanup2 = setupAutoScroll(scrollRef2.current)

    return () => {
      cleanup1?.()
      cleanup2?.()
    }
  }, [])

  const allResources = [
    {
      category: '基礎知識',
      title: 'フリーランス1年目の注意点',
      description: '開業届の出し方、確定申告の準備、健康保険の切り替えなど。',
      tags: ['初心者向け', '手続き'],
      readTime: '5分',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      thumbnail: '📋',
    },
    {
      category: '契約形態',
      title: 'SESと請負の違いを理解する',
      description: 'SES契約と請負契約の違い、メリット・デメリットを解説。',
      tags: ['契約', 'SES'],
      readTime: '4分',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      thumbnail: '📝',
    },
    {
      category: '単価・報酬',
      title: '適正単価の考え方と交渉術',
      description: 'スキルや経験に応じた単価の相場、単価交渉のタイミングと方法。',
      tags: ['単価', '交渉'],
      readTime: '6分',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      thumbnail: '💰',
    },
    {
      category: '契約書',
      title: '契約書の基礎知識とチェックポイント',
      description: '契約書で確認すべき重要項目、トラブルを避けるためのチェックリスト。',
      tags: ['契約書', '法律'],
      readTime: '7分',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      thumbnail: '📄',
    },
    {
      category: 'キャリア',
      title: 'フリーランスエンジニアのキャリアパス',
      description: 'スキルアップの方法、単価を上げるためのステップを解説。',
      tags: ['キャリア', 'スキルアップ'],
      readTime: '8分',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      thumbnail: '📈',
    },
    {
      category: '税金・保険',
      title: '確定申告と経費計上の基本',
      description: '白色申告と青色申告の違い、経費として計上できる項目を解説。',
      tags: ['税金', '確定申告'],
      readTime: '9分',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      thumbnail: '🧾',
    },
    {
      category: '営業・集客',
      title: '案件獲得のための営業戦略',
      description: 'クライアント開拓、紹介営業、SNS活用など効果的な営業手法。',
      tags: ['営業', '集客'],
      readTime: '7分',
      color: 'from-rose-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50',
      thumbnail: '💼',
    },
    {
      category: 'リスク管理',
      title: 'フリーランスのリスクヘッジ',
      description: '保険の選び方、貯蓄の考え方、収入が途切れた時の対策。',
      tags: ['リスク', '保険'],
      readTime: '6分',
      color: 'from-cyan-400 to-sky-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-sky-50',
      thumbnail: '🛡️',
    },
  ]

  // 配列を2分割して2行表示用に準備
  const firstRow = [...allResources.slice(0, 4), ...allResources.slice(0, 4)]
  const secondRow = [...allResources.slice(4, 8), ...allResources.slice(4, 8)]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-purple-700 mb-4">
            📚 学習コンテンツ
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
            お役立ちコンテンツ
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            フリーランス初心者が知っておくべき基礎知識
          </p>
        </div>

        {/* First row - auto scroll */}
        <div className="relative mb-6">
          <div
            ref={scrollRef1}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {firstRow.map((resource, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`${resource.bgColor} h-28 flex items-center justify-center text-5xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {resource.thumbnail}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-2 py-1 bg-gradient-to-r ${resource.color} text-white rounded-full text-xs font-medium`}>
                      {resource.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {resource.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - auto scroll */}
        <div className="relative">
          <div
            ref={scrollRef2}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {secondRow.map((resource, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`${resource.bgColor} h-28 flex items-center justify-center text-5xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {resource.thumbnail}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-2 py-1 bg-gradient-to-r ${resource.color} text-white rounded-full text-xs font-medium`}>
                      {resource.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {resource.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 border-2 border-purple-100">
          <div className="inline-block w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
            もっと詳しく知りたい方へ
          </h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            オンライン面談では、これらのトピックについてより詳しくご説明し、
            あなたの状況に合わせたアドバイスをさせていただきます。
          </p>
          <button
            onClick={onBookingClick}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            無料面談で相談する
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
