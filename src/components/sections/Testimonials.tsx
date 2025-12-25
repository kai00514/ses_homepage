'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: '田中 健太さん',
      role: 'フロントエンドエンジニア',
      experience: 'フリーランス歴: 6ヶ月',
      avatar: 'TK',
      content: 'フリーランスになるのが不安でしたが、担当者の方が親身に相談に乗ってくれました。営業トークではなく、本当に私に合った案件を提案してくれたので、安心して初案件に参画できました。',
      highlight: '安心して初案件に参画',
    },
    {
      name: '佐藤 美咲さん',
      role: 'バックエンドエンジニア',
      experience: 'フリーランス歴: 1年',
      avatar: 'SM',
      content: '単価交渉の仕方が全くわからなかったのですが、エンジニア目線で相場感や交渉のポイントを教えてもらえました。おかげで納得のいく条件で契約できました。',
      highlight: '納得のいく条件で契約',
    },
    {
      name: '山田 大輔さん',
      role: 'フルスタックエンジニア',
      experience: 'フリーランス歴: 3ヶ月',
      avatar: 'YD',
      content: '「まだ案件を決めていなくてもOK」という言葉に救われました。実際に相談してみると、丁寧にキャリアプランを一緒に考えてくれて、無理な提案は一切ありませんでした。',
      highlight: '丁寧にキャリアプランを考えてくれた',
    },
    {
      name: '鈴木 翔太さん',
      role: 'モバイルアプリエンジニア',
      experience: 'フリーランス歴: 8ヶ月',
      avatar: 'SS',
      content: '参画後もしっかりフォローしてくれるのが心強いです。月1回の面談で困ったことを相談でき、必要に応じてクライアントとの調整もしてくれます。',
      highlight: '参画後のフォローが心強い',
    },
  ]

  return (
    <section id="testimonials" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              利用者の声
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            フリーランスなりたてのエンジニアの体験談
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-1">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.experience}</p>
                </div>

                {/* Quote icon */}
                <svg className="w-10 h-10 text-blue-100 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                「{testimonial.content}」
              </p>

              {/* Highlight */}
              <div className="flex items-center gap-2 text-sm pt-4 border-t border-slate-200">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-600 font-medium">{testimonial.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          {[
            { value: '100+', label: '支援実績' },
            { value: '95%', label: '満足度' },
            { value: '85%', label: 'リピート率' },
            { value: '24h', label: '平均回答時間' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>個人情報保護方針遵守</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>強引な営業なし</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>完全無料</span>
          </div>
        </div>
      </div>
    </section>
  )
}
