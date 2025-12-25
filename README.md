# ROSCA SES - フリーランスエンジニア向けランディングページ

フリーランス初心者・これからフリーランスになるエンジニアを主対象としたSES会社向けランディングページです。

## 特徴

- **ネオン調グラデーション**: スタートアップ感のあるデザイン
- **ガラスモーフィズム**: 控えめな発光で安心・誠実な印象
- **フリーランス初心者向け**: 心理的ハードルを下げるUX設計
- **レスポンシブ対応**: モバイル・タブレット・デスクトップに最適化

## 技術スタック

- **Next.js 15**: React フレームワーク
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: ユーティリティファーストCSS
- **React 18**: 最新のReact機能

## デザイン方針

- ベースカラー: ダークネイビー / ダークグレー
- アクセント: ネオンブルー (#00D4FF)、シアン (#00FFFF)、パープル (#B967FF)
- フォント: Poppins (見出し) + Open Sans (本文)

## サイト構成

1. **Hero**: 共感型コピーとCTA
2. **サービス概要**: フリーランス初心者向けサポート
3. **案件一覧**: 初心者向け案件プレビュー
4. **強み**: 選ばれる理由
5. **利用の流れ**: 5ステップのフロー
6. **利用者の声**: 体験談
7. **お役立ちコンテンツ**: 初心者向け知識
8. **FAQ**: よくある質問
9. **Footer**: 会社情報とCTA

## セットアップ

### 依存関係のインストール

\`\`\`bash
npm install
# または
yarn install
# または
pnpm install
\`\`\`

### 開発サーバーの起動

\`\`\`bash
npm run dev
# または
yarn dev
# または
pnpm dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

\`\`\`bash
npm run build
# または
yarn build
# または
pnpm build
\`\`\`

### 本番環境での起動

\`\`\`bash
npm run start
# または
yarn start
# または
pnpm start
\`\`\`

## コンポーネント構造

\`\`\`
src/
├── app/
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx          # メインページ
│   └── globals.css       # グローバルスタイル
└── components/
    ├── Navbar.tsx        # ナビゲーションバー
    └── sections/
        ├── Hero.tsx      # ヒーローセクション
        ├── ServiceOverview.tsx
        ├── ProjectPreview.tsx
        ├── Strengths.tsx
        ├── HowItWorks.tsx
        ├── Testimonials.tsx
        ├── Resources.tsx
        ├── FAQ.tsx
        └── Footer.tsx
\`\`\`

## カスタマイズ

### カラーテーマの変更

\`tailwind.config.ts\` でカラーテーマをカスタマイズできます：

\`\`\`typescript
colors: {
  primary: '#F59E0B',      // プライマリカラー
  secondary: '#FBBF24',    // セカンダリカラー
  cta: '#8B5CF6',          // CTAカラー
  'neon-blue': '#00D4FF',  // ネオンブルー
  'neon-cyan': '#00FFFF',  // ネオンシアン
  'neon-purple': '#B967FF' // ネオンパープル
}
\`\`\`

### フォントの変更

\`src/app/globals.css\` で Google Fonts をカスタマイズできます。

## デプロイ

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ses_homepage)

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Cloudflare Pages

## ライセンス

MIT License

## サポート

質問や問題がある場合は、[Issues](https://github.com/yourusername/ses_homepage/issues) を作成してください。
