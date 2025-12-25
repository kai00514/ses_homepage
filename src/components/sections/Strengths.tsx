export default function Strengths() {
  const strengths = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'フリーランス初心者の\n支援実績が豊富',
      description: 'これまで多くのフリーランス初心者をサポートしてきた実績があります。初めての案件参画から、キャリア形成まで一貫してサポートします。',
      stat: '100+',
      statLabel: '支援実績',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'エンジニア目線で\n話せる担当者',
      description: '技術的な知識を持つ担当者が対応するため、専門的な相談も可能です。あなたのスキルセットや志向性を正しく理解し、最適な案件をご提案します。',
      stat: '95%',
      statLabel: '満足度',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '参画後も\nしっかりフォロー',
      description: '案件参画後も定期的に面談を実施し、困りごとや不安なことをヒアリング。必要に応じてクライアントとの調整も行います。',
      stat: '月1回',
      statLabel: '定期面談',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: '最初の一歩を\n失敗させない',
      description: 'フリーランスとしての最初の一歩は非常に重要です。無理な案件を押し付けず、あなたにとって最適なスタートを切れるようサポートします。',
      stat: '100%',
      statLabel: '誠実対応',
    },
  ]

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              ROSCA が
            </span>
            <br className="md:hidden" />
            選ばれる理由
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            フリーランス初心者の味方として、あなたをサポートします
          </p>
        </div>

        {/* Strengths list */}
        <div className="space-y-4">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group bg-slate-900/30 hover:bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center text-neon-blue">
                  {strength.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-heading font-semibold text-white group-hover:text-neon-blue transition-colors">
                      {strength.title.replace('\n', ' ')}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-heading font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                        {strength.stat}
                      </span>
                      <span className="text-xs text-slate-400">{strength.statLabel}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center glass rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
              「営業されない」安心感
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              私たちは、無理な案件を押し付けたり、強引に営業をかけたりすることは一切ありません。
              <br className="hidden md:block" />
              あなたのペースで、あなたに合った案件を一緒に探していきます。
              <br className="hidden md:block" />
              「まだ決めていない」「とりあえず相談したい」という段階でも大歓迎です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
