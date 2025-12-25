'use client'

import { useState } from 'react'

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'フリーランス未経験でも大丈夫ですか？',
      answer: 'はい、大丈夫です。私たちはフリーランス初心者の支援に特化しており、これまで多くの未経験者をサポートしてきました。開業届の出し方から、確定申告の準備、案件の選び方まで、一から丁寧にサポートします。',
    },
    {
      question: 'スキルに自信がなくても相談できますか？',
      answer: 'もちろんです。スキルレベルに応じた案件をご提案しますので、ご自身のスキルに不安がある方でも安心してご相談ください。むしろ、スキルに不安がある段階で相談いただくことで、より適切な案件選びができます。',
    },
    {
      question: 'オンライン面談では何を話すのですか？',
      answer: 'まずはあなたの現在のスキルセット、これまでの経験、今後のキャリア希望などをヒアリングします。その上で、フリーランスとしての働き方、単価の相場、おすすめの案件などについてご説明します。気になることは何でもお聞きください。',
    },
    {
      question: '無理に案件を勧められることはありませんか？',
      answer: '一切ありません。私たちは「営業されない安心感」を大切にしており、無理な案件の押し付けや強引な営業は行いません。あなたが納得できる案件が見つかるまで、何度でも相談していただけます。',
    },
    {
      question: '利用料金はかかりますか？',
      answer: '登録、オンライン面談、案件紹介、契約サポートなど、すべて無料です。案件参画後も追加料金は一切発生しません。安心してご利用ください。',
    },
    {
      question: 'どのくらいの期間で案件に参画できますか？',
      answer: '人によって異なりますが、最短で面談から1〜2週間程度で参画できるケースもあります。ただし、「急いで決める」ことよりも「納得して決める」ことを優先しています。じっくり時間をかけて案件を選びたい方も歓迎です。',
    },
    {
      question: '地方在住ですが利用できますか？',
      answer: 'はい、利用できます。オンライン面談を実施しているため、全国どこからでもご利用いただけます。また、リモートワーク可能な案件も多数ご用意しています。',
    },
    {
      question: '参画後のサポートはありますか？',
      answer: 'はい、参画後も月1回の定期面談を実施し、困りごとや不安なことをヒアリングします。必要に応じてクライアントとの調整も行いますので、安心して業務に取り組んでいただけます。',
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              よくある質問
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            フリーランス初心者の方からよくいただく質問
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <span className="text-lg font-heading font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-neon-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-slate-400 leading-relaxed border-t border-slate-700/50 pt-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center glass rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            まだ疑問や不安がありますか？
          </h3>
          <p className="text-slate-400 mb-6">
            どんな小さなことでも構いません。
            <br className="md:hidden" />
            オンライン面談でお気軽にご相談ください。
          </p>
          <button
            onClick={onBookingClick}
            className="inline-block bg-cta hover:bg-cta/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cta/50 cursor-pointer"
          >
            無料面談を予約する
          </button>
        </div>
      </div>
    </section>
  )
}
