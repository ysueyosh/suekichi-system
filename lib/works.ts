export type WorkCategory =
  | "internal-system"
  | "web-site-app"
  | "mobile-app"
  | "ai-solution";

export interface Work {
  id: string;
  category: WorkCategory;
  title: string;
  summary: string;
  detail: string;
  problem: string;
  solution: string[];
  result: string;
  techStack: string[];
  imageUrl: string;
  tags: string[];
}

export const worksData: Work[] = [
  // --- 社内システム ---
  {
    id: "internal-sales-dashboard",
    category: "internal-system",
    title: "営業管理ダッシュボード開発",
    summary:
      "スプレッドシート管理から脱却。リアルタイムで予実管理が可能な社内ツール。",
    detail:
      "営業チーム20名が使用する、案件進捗と予実管理を一元化するWebアプリケーション。",
    problem:
      "Excelでの集計作業に毎日1時間を要しており、データ共有のタイムラグが発生していた。",
    solution: [
      "直感的なドラッグ＆ドロップで案件ステータスを変更できるカンバン方式を採用",
      "外部SFAツールとAPI連携し、二重入力を排除",
      "Slack通知機能を実装し、大きな受注や目標達成をチーム全体で即座に共有",
    ],
    result:
      "集計作業が完全に自動化され、月間20時間の工数削減。リアルタイムな意思決定が可能に。",
    techStack: ["Vue.js", "Firebase", "Google Cloud Functions", "Slack API"],
    imageUrl: "/images/works/dashboard-demo.jpg",
    tags: ["業務システム", "効率化", "社内ツール"],
  },
  {
    id: "internal-inventory-system",
    category: "internal-system",
    title: "倉庫在庫管理システム刷新",
    summary: "ハンディターミナルと連動し、在庫差異をゼロにする管理システム。",
    detail: "物流倉庫における入出庫・棚卸業務をデジタル化するシステム開発。",
    problem:
      "手書き伝票と目視確認によるピッキングミスが多発し、在庫差異の調査に時間を取られていた。",
    solution: [
      "QRコードリーダー対応のWebアプリを導入し、現場での誤入力を防止",
      "在庫アラート機能を実装し、発注漏れを防ぐ仕組みを構築",
      "タブレット端末に最適化したUI設計で、現場作業員の学習コストを低減",
    ],
    result: "在庫差異率が0.05%未満に改善。棚卸にかかる時間が3日から1日に短縮。",
    techStack: ["Next.js", "Supabase", "PWA"],
    imageUrl: "/images/works/inventory.jpg",
    tags: ["在庫管理", "DX", "現場改善"],
  },
  {
    id: "internal-hr-platform",
    category: "internal-system",
    title: "人事評価プラットフォーム",
    summary: "複雑な評価フローをシステム化し、納得感のある評価制度運用を支援。",
    detail:
      "全社員100名の人事評価プロセス（目標設定・面談・フィードバック）を一元管理するシステム。",
    problem:
      "評価シートの配布・回収・集計がメールベースで行われており、人事部の負荷が限界に達していた。",
    solution: [
      "ワークフローエンジンを組み込み、承認プロセスを自動化",
      "過去の評価履歴をグラフで可視化し、成長過程を一目で確認可能に",
      "権限管理を厳密に設計し、情報の秘匿性を担保",
    ],
    result:
      "人事部の管理工数を月40時間削減。評価フィードバックの質が向上し、社員満足度がアップ。",
    techStack: ["Laravel", "React", "MySQL", "AWS"],
    imageUrl: "/images/works/hr-system.jpg",
    tags: ["人事システム", "ワークフロー", "業務効率化"],
  },

  // --- Webサイト・アプリ ---
  {
    id: "web-lp-modern",
    category: "web-site-app",
    title: "SaaS製品 LP制作",
    summary: "CVR改善を目的とした、BtoB SaaSプロダクトのランディングページ。",
    detail:
      "次世代型SaaS「CloudFlow」のサービスローンチに伴うLP制作プロジェクト。",
    problem: "旧LPは情報が整理されておらず、直帰率が高かった。",
    solution: [
      "ファーストビューで「何ができるか」を3秒で伝えるコピーとデザイン",
      "ユーザー心理に基づいたコンテンツ配置（共感→解決策→証拠→オファー）",
      "マイクロアニメーションを活用し、スクロールを促す演出",
    ],
    result: "CVRが1.2%から2.8%へ向上。CPA（獲得単価）を30%削減。",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/images/works/lp-saas.jpg",
    tags: ["LP制作", "Webデザイン", "SaaS"],
  },
  {
    id: "web-ec-organic",
    category: "web-site-app",
    title: "オーガニック食品ECサイト",
    summary: "小規模生産者と消費者をつなぐ、産直ECプラットフォーム。",
    detail: "全国の有機農家が出品できるCtoCマーケットプレイスの構築。",
    problem:
      "既存のECパッケージでは、生産者ごとの送料設定や定期便に対応できなかった。",
    solution: [
      "Shopify Headless構成を採用し、フロントエンドの自由度を確保",
      "定期購入サブスクリプション機能をカスタムアプリとして開発",
      "生産者向け管理画面をシンプルにし、ITリテラシーを問わず使えるように設計",
    ],
    result: "リリース初年度で流通総額5,000万円を達成。定期購入継続率90%。",
    techStack: ["Shopify", "Remix", "GraphQL"],
    imageUrl: "/images/works/ec-organic.jpg",
    tags: ["ECサイト", "Webアプリ", "Headless CMS"],
  },
  {
    id: "web-media-tech",
    category: "web-site-app",
    title: "技術オウンドメディア構築",
    summary: "エンジニア採用につなげるための技術ブログメディア。",
    detail:
      "自社の技術力を発信し、テックブランディングを強化するためのメディアサイト。",
    problem: "Wordpressの保守コストが高く、表示速度も遅いためSEOで不利だった。",
    solution: [
      "Jamstack構成（Next.js + MicroCMS）へ移行し、爆速な表示を実現",
      "Notionライクなエディタを導入し、エンジニアが記事を書きやすい環境を整備",
      "記事ごとのOGP自動生成機能を実装し、SNS拡散を促進",
    ],
    result: "PV数が移行前の3倍に増加。経由応募のエンジニア採用コストがゼロに。",
    techStack: ["Next.js", "MicroCMS", "Vercel"],
    imageUrl: "/images/works/tech-media.jpg",
    tags: ["メディア", "Jamstack", "SEO"],
  },

  // --- スマホアプリ ---
  {
    id: "app-fitness-tracker",
    category: "mobile-app",
    title: "フィットネス記録アプリ",
    summary:
      "継続を習慣化する、ゲーミフィケーション要素を取り入れた運動記録アプリ。",
    detail:
      "ジム通いや自宅トレーニングを記録し、SNS機能でシェアできるiOS/Androidアプリ。",
    problem:
      "市場に高機能なアプリはあるが、複雑すぎて続かないユーザーが多かった。",
    solution: [
      "「記録まで2タップ」を徹底したシンプルなUI/UX",
      "継続日数に応じたバッジ獲得やランキング機能でモチベーション維持",
      "React Nativeを採用し、iOS/Androidを単一コードベースで開発",
    ],
    result:
      "App Storeで星4.6の高評価を獲得。DAU（デイリーアクティブユーザー）率40%を維持。",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
    imageUrl: "/images/works/fitness-app.jpg",
    tags: ["スマホアプリ", "toC", "ヘルスケア"],
  },
  {
    id: "app-field-report",
    category: "mobile-app",
    title: "建設現場 報告アプリ",
    summary:
      "現場から写真を撮って送るだけ。報告書作成時間をゼロにする業務アプリ。",
    detail:
      "建設現場の作業員が、日報や進捗報告をスマホから簡単に行えるアプリ。",
    problem:
      "現場終了後に事務所に戻ってPCで報告書を作成しており、長時間労働の原因になっていた。",
    solution: [
      "現場で撮影した写真に手書きメモを書き込める機能を実装",
      "音声入力に対応し、汚れた手袋のままでも入力可能に",
      "オフライン対応を行い、電波の悪い地下現場でも使用可能に",
    ],
    result: "1人あたり月間15時間の残業削減を実現。",
    techStack: ["Flutter", "Dart", "AWS Amplify"],
    imageUrl: "/images/works/field-report.jpg",
    tags: ["業務アプリ", "DX", "建設"],
  },
  {
    id: "app-matching-event",
    category: "mobile-app",
    title: "イベントマッチングアプリ",
    summary: "カンファレンスや展示会でのビジネスマッチングを加速させるアプリ。",
    detail:
      "イベント参加者同士が興味関心に基づいてマッチングし、商談予約ができるアプリ。",
    problem:
      "イベント中の名刺交換だけでは、後日の商談になかなか繋がっていなかった。",
    solution: [
      "事前に参加者のプロフィールを閲覧し、興味ありを送れる機能",
      "会場マップと連動したリアルタイム位置情報共有（任意）",
      "QRコードによるデジタル名刺交換機能",
    ],
    result: "イベント期間中の商談発生数が従来比2.5倍に増加。",
    techStack: ["React Native", "GraphQL", "Node.js"],
    imageUrl: "/images/works/event-app.jpg",
    tags: ["マッチングアプリ", "イベント", "コミュニケーション"],
  },

  // --- AIソリューション ---
  {
    id: "ai-cs-chatbot",
    category: "ai-solution",
    title: "カスタマーサポート自動化AI",
    summary: "問い合わせの70%を自動解決する、RAG活用型チャットボット。",
    detail:
      "ECサイトのカスタマーサポート部門に導入した、独自データ学習型AIボット。",
    problem: "商品に関する定型的な問い合わせ対応にスタッフが忙殺されていた。",
    solution: [
      "社内マニュアルや過去の問い合わせ履歴(FAQ)をVector Databaseに蓄積",
      "GPT-4とお問い合わせ内容を照らし合わせ、文脈に沿った回答を生成",
      "解決しなかった場合のみ有人対応へエスカレーションするフローを構築",
    ],
    result: "有人対応件数が60%削減。応答速度が即時になり顧客満足度も向上。",
    techStack: ["OpenAI API", "Pinecone", "LangChain", "Python"],
    imageUrl: "/images/works/ai-chat.jpg",
    tags: ["生成AI", "チャットボット", "業務効率化"],
  },
  {
    id: "ai-document-analysis",
    category: "ai-solution",
    title: "契約書リスク検知AI",
    summary: "法務チェックをサポート。契約書のリスク条項を数秒で洗い出し。",
    detail: "法務担当者が行う契約書レビュー業務を支援するSaaSプロダクト。",
    problem:
      "契約書のチェックに膨大な時間がかかり、事業スピードのボトルネックになっていた。",
    solution: [
      "契約書(PDF/Word)をアップロードすると、不利な条項や抜け漏れをAIが指摘",
      "修正案の提示までを自動で行い、担当者の判断をサポート",
      "Azure AI Document Intelligenceを活用し、高精度なOCR処理を実現",
    ],
    result: "契約締結までのリードタイムを平均5日から2日に短縮。",
    techStack: ["Azure OpenAI", "React", "Python", "FastAPI"],
    imageUrl: "/images/works/ai-legal.jpg",
    tags: ["LegalTech", "自然言語処理", "SaaS"],
  },
  {
    id: "ai-demand-forecast",
    category: "ai-solution",
    title: "小売店向け 需要予測システム",
    summary: "過去の販売データと気象情報を分析し、翌日の来店数と売上を予測。",
    detail:
      "多店舗展開する飲食チェーン向けの、食品ロス削減とシフト最適化システム。",
    problem: "店長の勘と経験に頼った発注により、廃棄ロスや欠品が頻発していた。",
    solution: [
      "過去3年のPOSデータと天気予報、近隣イベント情報を学習させた予測モデル構築",
      "日別・時間帯別の客数予測をダッシュボードで可視化",
      "推奨発注量を自動算出し、発注作業をアシスト",
    ],
    result: "食品廃棄ロスを20%削減。適正なスタッフ配置により人件費率を改善。",
    techStack: ["Python", "scikit-learn", "BigQuery", "Looker Studio"],
    imageUrl: "/images/works/ai-forecast.jpg",
    tags: ["データ分析", "機械学習", "小売DX"],
  },
];
