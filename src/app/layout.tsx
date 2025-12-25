import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'フリーランスエンジニアの安心サポート | ROSCA SES',
  description: 'はじめてのフリーランスでも安心。案件紹介から単価交渉、契約サポートまで。フリーランス初心者に寄り添うSES会社です。',
  openGraph: {
    title: 'フリーランスエンジニアの安心サポート | ROSCA SES',
    description: 'はじめてのフリーランスでも安心。案件紹介から単価交渉、契約サポートまで。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
