'use client'

import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

type Step = 'calendar' | 'form' | 'complete'

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>('calendar')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    message: '',
  })

  if (!isOpen) return null

  // 今月のカレンダーを生成
  const generateCalendar = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startDayOfWeek = firstDay.getDay()

    const days = []
    // 空白の日を追加
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null)
    }
    // 実際の日を追加
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    return days
  }

  const availableTimes = [
    '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const handleDateSelect = (date: Date | null) => {
    if (!date) return
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (date >= today) {
      setSelectedDate(date)
      setSelectedTime('')
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleNextToForm = () => {
    if (selectedDate && selectedTime) {
      setStep('form')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の予約処理を行う
    setStep('complete')
  }

  const handleClose = () => {
    setStep('calendar')
    setSelectedDate(null)
    setSelectedTime('')
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      skills: '',
      message: '',
    })
    onClose()
  }

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  const days = generateCalendar()
  const weekDays = ['日', '月', '火', '水', '木', '金', '土']
  const today = new Date()
  const monthName = `${today.getFullYear()}年${today.getMonth() + 1}月`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Calendar Step */}
        {step === 'calendar' && (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                オンライン面談を予約
              </h2>
              <p className="text-slate-400">
                ご希望の日時を選択してください
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold text-white">{monthName}</h3>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-4">
                  {/* Week days */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {weekDays.map((day, index) => (
                      <div
                        key={index}
                        className="text-center text-sm font-medium text-slate-400 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Days */}
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((date, index) => {
                      if (!date) {
                        return <div key={`empty-${index}`} />
                      }

                      const isToday = date.toDateString() === today.toDateString()
                      const isPast = date < today && !isToday
                      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()

                      return (
                        <button
                          key={index}
                          onClick={() => !isPast && handleDateSelect(date)}
                          disabled={isPast}
                          className={`
                            aspect-square rounded-lg text-sm font-medium transition-all
                            ${isPast ? 'text-slate-600 cursor-not-allowed' : 'cursor-pointer'}
                            ${isToday ? 'border-2 border-neon-blue' : ''}
                            ${isSelected ? 'bg-neon-blue text-white' : 'text-slate-300 hover:bg-slate-700'}
                            ${!isPast && !isSelected ? 'hover:scale-110' : ''}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Time selection */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {selectedDate ? formatDate(selectedDate) : '日付を選択してください'}
                </h3>

                {selectedDate && (
                  <div className="space-y-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          w-full px-6 py-3 rounded-xl font-medium transition-all
                          ${selectedTime === time
                            ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/30'
                            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Next button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNextToForm}
                disabled={!selectedDate || !selectedTime}
                className={`
                  px-8 py-3 rounded-xl font-medium transition-all
                  ${selectedDate && selectedTime
                    ? 'bg-cta hover:bg-cta/90 text-white shadow-lg shadow-cta/30 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }
                `}
              >
                次へ進む
              </button>
            </div>
          </div>
        )}

        {/* Form Step */}
        {step === 'form' && (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                新規登録
              </h2>
              <p className="text-slate-400">
                {selectedDate && formatDate(selectedDate)} {selectedTime}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  電話番号 <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  実務経験年数
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-neon-blue transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="未経験">未経験</option>
                  <option value="1年未満">1年未満</option>
                  <option value="1-2年">1-2年</option>
                  <option value="3-5年">3-5年</option>
                  <option value="5年以上">5年以上</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  主なスキル・言語
                </label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="JavaScript, React, Node.js など"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  相談したいこと・メッセージ
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="フリーランスとして独立を考えていますが、何から始めればよいか相談したいです。"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('calendar')}
                  className="flex-1 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
                >
                  戻る
                </button>
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-cta hover:bg-cta/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-cta/30"
                >
                  予約を確定する
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Complete Step */}
        {step === 'complete' && (
          <div className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                予約が完了しました！
              </h2>
              <p className="text-slate-400 mb-8">
                {selectedDate && formatDate(selectedDate)} {selectedTime}
                <br />
                ご登録いただいたメールアドレスに確認メールをお送りしました。
              </p>

              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="font-heading font-semibold text-white mb-4">次のステップ</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>確認メールをご確認ください</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>面談前日にリマインドメールが届きます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>当日はビデオ通話URLからご参加ください</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleClose}
                className="px-8 py-3 bg-cta hover:bg-cta/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-cta/30"
              >
                閉じる
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
