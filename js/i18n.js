/**
 * North Tokyo COOP Hub - Internationalization
 * Supports Japanese (ja) and English (en)
 */

const i18n = {
  ja: {
    app: {
      title: '北東京CO-OP Hub',
      subtitle: 'コミュニティプラットフォーム',
      version: 'v1.0.0'
    },
    login: {
      scanPrompt: 'QRコードをスキャンしてログイン',
      demoMode: 'デモモード：役割を選択',
      demoButton: 'デモログイン',
      privacyText: 'プライバシーファースト設計'
    },
    roles: {
      reijikai: { name: '委員会', badge: '委員会' },
      shokuin: { name: '職員', badge: '職員' },
      volunteer: { name: 'ボランティア', badge: 'ボランティア' }
    },
    nav: {
      home: 'ホーム',
      news: 'ニュース',
      community: 'コミュニティ',
      events: 'イベント',
      more: 'その他',
      knowledge: '知識倉庫',
      profile: 'プロフィール',
      decisions: '意思決定',
      contentManagement: 'コンテンツ管理',
      shop: '商品注文',
      settings: '設定',
      logout: 'ログアウト'
    },
    dashboard: {
      welcome: 'こんにちは',
      activeRequests: 'アクティブな依頼',
      upcomingEvents: '今後のイベント',
      quickActions: 'クイックアクション',
      requestHelp: '助けを求める',
      requestHelpDesc: 'コミュニティに依頼を投稿',
      browseEvents: 'イベントを見る',
      browseEventsDesc: '参加登録'
    },
    community: {
      title: 'コミュニティ',
      description: 'コミュニティ助け合い機能で、メンバー同士がサポートし合えます。'
    },
    knowledge: {
      title: '知識倉庫',
      description: 'FAQ、ガイド、レシピなどの情報を検索できます。'
    },
    decisions: {
      title: '意思決定',
      description: '提案の作成と投票ができます。'
    },
    admin: {
      title: 'コンテンツ管理',
      description: 'ニュース、イベント、ナレッジベースを管理できます。'
    },
    profile: {
      title: 'プロフィール',
      area: '地域',
      role: '役割'
    }
  },
  
  en: {
    app: {
      title: 'North Tokyo COOP Hub',
      subtitle: 'Community Platform',
      version: 'v1.0.0'
    },
    login: {
      scanPrompt: 'Scan QR code to login',
      demoMode: 'Demo: Select a role',
      demoButton: 'Demo Login',
      privacyText: 'Privacy-first design'
    },
    roles: {
      reijikai: { name: 'Committee', badge: 'Committee' },
      shokuin: { name: 'Staff', badge: 'Staff' },
      volunteer: { name: 'Volunteer', badge: 'Volunteer' }
    },
    nav: {
      home: 'Home',
      news: 'News',
      community: 'Community',
      events: 'Events',
      more: 'More',
      knowledge: 'Knowledge',
      profile: 'Profile',
      decisions: 'Decisions',
      contentManagement: 'Content',
      shop: 'Shop',
      settings: 'Settings',
      logout: 'Logout'
    },
    dashboard: {
      welcome: 'Welcome',
      activeRequests: 'Active Requests',
      upcomingEvents: 'Upcoming Events',
      quickActions: 'Quick Actions',
      requestHelp: 'Request Help',
      requestHelpDesc: 'Post to community board',
      browseEvents: 'Browse Events',
      browseEventsDesc: 'Register to participate'
    },
    community: {
      title: 'Community',
      description: 'Community mutual aid allows members to support each other.'
    },
    knowledge: {
      title: 'Knowledge Base',
      description: 'Search FAQs, guides, recipes and more.'
    },
    decisions: {
      title: 'Decisions',
      description: 'Create proposals and vote on decisions.'
    },
    admin: {
      title: 'Content Management',
      description: 'Manage news, events, and knowledge base.'
    },
    profile: {
      title: 'Profile',
      area: 'Area',
      role: 'Role'
    }
  }
};

// Make available globally
window.i18n = i18n;