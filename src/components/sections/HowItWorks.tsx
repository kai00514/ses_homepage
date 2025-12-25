'use client'

import { useState } from 'react'

interface HowItWorksProps {
  onBookingClick?: () => void
}

export default function HowItWorks({ onBookingClick }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: '無料登録',
      description: 'フォームから簡単登録。所要時間は約3分。個人情報は厳重に管理します。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'オンライン面談',
      description: 'ビデオ通話で担当者と面談。スキルや希望条件、不安なことなど何でもお話しください。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: '案件相談',
      description: 'あなたのスキルや希望に合った案件を一緒に探します。単価や働き方の相談も可能です。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: '案件提案',
      description: '厳選した案件をご提案。無理な案件は提案しません。納得いくまで何度でも相談できます。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: '参画開始',
      description: '契約手続きをサポートし、案件参画後も定期的にフォロー。困ったことがあればいつでも相談可能です。',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-16 px-4 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              利用の流れ
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            登録から案件参画まで、シンプルな5ステップ
          </p>
        </div>

        {/* Compact Flow */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
          {/* Step indicators */}
          <div className="flex items-center justify-between mb-8 relative">
            {/* Progress bar */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple -translate-y-1/2 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Step buttons */}
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center cursor-pointer transition-all ${
                  activeStep === index ? 'scale-110' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all mb-2 ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/30'
                      : index < activeStep
                      ? 'bg-slate-700 text-neon-blue'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {index < activeStep ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span className={`text-xs font-medium hidden md:block ${activeStep === index ? 'text-white' : 'text-slate-500'}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 min-h-[200px]">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl flex items-center justify-center text-neon-blue">
                {steps[activeStep].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-heading font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    {steps[activeStep].number}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeStep === 0
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                前へ
              </button>

              <div className="text-sm text-slate-400">
                {activeStep + 1} / {steps.length}
              </div>

              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeStep === steps.length - 1
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                次へ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center glass rounded-2xl p-6 md:p-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 px-4 py-2 rounded-full text-sm text-neon-blue mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>安心ポイント</span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
              まだ案件が決まっていなくてもOK
            </h3>
            <p className="text-slate-400 leading-relaxed">
              「フリーランスになろうか迷っている」「どんな案件があるか知りたい」など、
              まだ具体的に決まっていない段階でも大歓迎です。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onBookingClick}
            className="inline-block bg-cta hover:bg-cta/90 text-white px-10 py-4 rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-xl hover:shadow-cta/50 hover:-translate-y-0.5 cursor-pointer"
          >
            無料でオンライン面談を予約する
          </button>
          <p className="text-sm text-slate-500 mt-4">
            まずは話を聞くだけでもOKです
          </p>
        </div>
      </div>
    </section>
  )
}
