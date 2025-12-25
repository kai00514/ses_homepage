export default function ServiceOverview() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: '初心者に優しい案件紹介',
      description: 'フリーランスなりたて、またはこれから独立予定のエンジニア向けに、無理のない案件をご紹介。高単価訴求よりも「安心して始められる」を優先します。',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: '単価・契約の相談サポート',
      description: '営業・単価交渉・契約に不安があっても大丈夫。エンジニア目線で話せる担当者が、あなたの状況に合わせて丁寧にサポートします。',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: '参画後のフォロー体制',
      description: '案件参画後も定期的にフォロー。困ったことや不安なことがあれば、いつでも相談できる体制を整えています。',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '無理な案件は提案しません',
      description: '「売り込まない」「無理な案件を押し付けない」を徹底。あなたのキャリアとライフスタイルに合った案件だけをご提案します。',
    },
  ]

  return (
    <section id="service" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            フリーランス初心者に
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              特化したサポート
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            案件紹介だけでなく、単価・契約・働き方の相談まで。
            <br />
            フリーランス初心者の味方として、あなたをサポートします。
          </p>
        </div>

        {/* Services grid */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/30 hover:bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center text-neon-blue">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div className="mt-16 glass rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            最初の一歩を失敗させない
          </h3>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            フリーランスとして独立する最初の一歩は、誰もが不安なものです。
            <br className="hidden md:block" />
            私たちは、あなたが安心してフリーランスとしてのキャリアをスタートできるよう、
            <br className="hidden md:block" />
            全力でサポートします。まずはお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  )
}
