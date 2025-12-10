/**
 * North Tokyo COOP Hub - Mock Data
 * Sample data for POC demonstration
 */

const CoopData = {
  // User profiles by role
  users: {
    reijikai: {
      name: '佐藤 太郎',
      nameEn: 'Taro Sato',
      id: 'NT-00001',
      area: '練馬区',
      areaEn: 'Nerima',
      avatar: '👔'
    },
    shokuin: {
      name: '鈴木 花子',
      nameEn: 'Hanako Suzuki',
      id: 'NT-00123',
      area: '板橋区',
      areaEn: 'Itabashi',
      avatar: '💼'
    },
    volunteer: {
      name: '田中 美咲',
      nameEn: 'Misaki Tanaka',
      id: 'NT-12345',
      area: '北区',
      areaEn: 'Kita',
      avatar: '🤝'
    }
  },

  // News articles
  news: {
    ja: [
      {
        id: 1,
        title: '年末の配送スケジュールについて',
        excerpt: '12月の配送スケジュールが変更になります。詳しくはこちらをご確認ください。',
        category: 'お知らせ',
        date: '2024年12月5日',
        author: '事務局'
      },
      {
        id: 2,
        title: '新商品のご紹介：有機野菜セット',
        excerpt: '有機野菜の新しいラインナップが登場しました。旬の野菜をお届けします。',
        category: '新商品',
        date: '2024年12月3日',
        author: '商品部'
      },
      {
        id: 3,
        title: '冬の料理レシピ特集',
        excerpt: '寒い季節にぴったりの温かいレシピをご紹介。組合員さんからの投稿レシピも。',
        category: 'レシピ',
        date: '2024年12月1日',
        author: '編集部'
      },
      {
        id: 4,
        title: '組合員アンケート結果報告',
        excerpt: '先月実施したアンケートの結果をまとめました。ご協力ありがとうございました。',
        category: 'お知らせ',
        date: '2024年11月28日',
        author: '事務局'
      }
    ],
    en: [
      {
        id: 1,
        title: 'Year-End Delivery Schedule',
        excerpt: 'December delivery schedule has been updated. Please check for details.',
        category: 'Notice',
        date: 'Dec 5, 2024',
        author: 'Office'
      },
      {
        id: 2,
        title: 'New Products: Organic Vegetable Set',
        excerpt: 'New organic vegetable lineup is now available. Fresh seasonal vegetables.',
        category: 'Products',
        date: 'Dec 3, 2024',
        author: 'Products Dept'
      },
      {
        id: 3,
        title: 'Winter Recipe Collection',
        excerpt: 'Warm recipes perfect for the cold season. Includes member submissions.',
        category: 'Recipes',
        date: 'Dec 1, 2024',
        author: 'Editorial'
      },
      {
        id: 4,
        title: 'Member Survey Results',
        excerpt: 'Summary of last month\'s survey results. Thank you for participating.',
        category: 'Notice',
        date: 'Nov 28, 2024',
        author: 'Office'
      }
    ]
  },

  // Events
  events: {
    ja: [
      {
        id: 1,
        title: '親子料理教室',
        month: '12月',
        day: '15',
        time: '10:00-12:00',
        location: '練馬センター',
        capacity: 20,
        registered: 12
      },
      {
        id: 2,
        title: '年末大掃除ワークショップ',
        month: '12月',
        day: '20',
        time: '14:00-16:00',
        location: 'オンライン',
        capacity: 50,
        registered: 35
      },
      {
        id: 3,
        title: '新年会',
        month: '1月',
        day: '10',
        time: '18:00-20:00',
        location: '板橋センター',
        capacity: 30,
        registered: 8
      },
      {
        id: 4,
        title: '味噌作り体験',
        month: '1月',
        day: '25',
        time: '10:00-14:00',
        location: '北センター',
        capacity: 15,
        registered: 15
      }
    ],
    en: [
      {
        id: 1,
        title: 'Family Cooking Class',
        month: 'Dec',
        day: '15',
        time: '10:00-12:00',
        location: 'Nerima Center',
        capacity: 20,
        registered: 12
      },
      {
        id: 2,
        title: 'Year-End Cleaning Workshop',
        month: 'Dec',
        day: '20',
        time: '14:00-16:00',
        location: 'Online',
        capacity: 50,
        registered: 35
      },
      {
        id: 3,
        title: 'New Year Party',
        month: 'Jan',
        day: '10',
        time: '18:00-20:00',
        location: 'Itabashi Center',
        capacity: 30,
        registered: 8
      },
      {
        id: 4,
        title: 'Miso Making Experience',
        month: 'Jan',
        day: '25',
        time: '10:00-14:00',
        location: 'Kita Center',
        capacity: 15,
        registered: 15
      }
    ]
  },

  // Community requests (mutual aid)
  requests: {
    ja: [
      {
        id: 1,
        type: 'request',
        service: 'childcare',
        title: '12/20 午後のお子さん見守り',
        description: '病院の予約があり、2時間ほど子どもを見ていてほしいです。',
        author: '山田さん',
        area: '練馬区',
        date: '12月20日 14:00-16:00',
        status: 'open'
      },
      {
        id: 2,
        type: 'offer',
        service: 'transport',
        title: '週末の買い物送迎できます',
        description: '土日の午前中、スーパーへの送迎可能です。練馬区周辺。',
        author: '佐藤さん',
        area: '練馬区',
        date: '毎週土日',
        status: 'open'
      },
      {
        id: 3,
        type: 'request',
        service: 'shopping',
        title: '重い荷物の買い物代行',
        description: 'お米と飲料水の買い出しをお願いしたいです。',
        author: '高橋さん',
        area: '板橋区',
        date: '希望日相談',
        status: 'matched'
      }
    ],
    en: [
      {
        id: 1,
        type: 'request',
        service: 'childcare',
        title: 'Childcare on Dec 20 afternoon',
        description: 'Need someone to watch my child for 2 hours during doctor appointment.',
        author: 'Yamada-san',
        area: 'Nerima',
        date: 'Dec 20, 14:00-16:00',
        status: 'open'
      },
      {
        id: 2,
        type: 'offer',
        service: 'transport',
        title: 'Weekend shopping rides available',
        description: 'Can provide rides to supermarket on weekend mornings. Nerima area.',
        author: 'Sato-san',
        area: 'Nerima',
        date: 'Every Sat/Sun',
        status: 'open'
      },
      {
        id: 3,
        type: 'request',
        service: 'shopping',
        title: 'Heavy grocery shopping help',
        description: 'Need help buying rice and water bottles.',
        author: 'Takahashi-san',
        area: 'Itabashi',
        date: 'Flexible',
        status: 'matched'
      }
    ]
  },

  // ============================================
  // GOVERNANCE PROPOSALS (Reijikai Only)
  // ============================================
  proposals: {
    ja: [
      {
        id: 1,
        title: '2025年度活動計画案',
        description: '来年度の活動計画について審議します。重点施策として地域連携の強化と若年層の参加促進を掲げています。',
        category: 'policy',
        categoryDisplay: '方針',
        status: 'active',
        statusDisplay: '投票中',
        createdBy: '運営委員会',
        createdAt: '2024-12-01',
        deadline: '2024-12-20',
        votes: { yes: 23, no: 5, abstain: 2 },
        totalVotes: 30,
        totalEligible: 45,
        participationRate: 67,
        userVoted: false,
        userVote: null
      },
      {
        id: 2,
        title: '新年会開催予算承認',
        description: '1月10日開催予定の新年会の予算（50,000円）の承認をお願いします。会場費、飲食費、記念品代を含みます。',
        category: 'budget',
        categoryDisplay: '予算',
        status: 'active',
        statusDisplay: '投票中',
        createdBy: 'イベント委員会',
        createdAt: '2024-12-05',
        deadline: '2024-12-15',
        votes: { yes: 18, no: 2, abstain: 5 },
        totalVotes: 25,
        totalEligible: 45,
        participationRate: 56,
        userVoted: false,
        userVote: null
      },
      {
        id: 3,
        title: '配送ルート変更提案',
        description: '効率化のため、練馬区エリアの配送ルートを変更する提案です。一部の組合員様の配送時間が変わります。',
        category: 'policy',
        categoryDisplay: '方針',
        status: 'closed',
        statusDisplay: '終了',
        createdBy: '物流委員会',
        createdAt: '2024-11-15',
        deadline: '2024-11-30',
        votes: { yes: 35, no: 8, abstain: 2 },
        totalVotes: 45,
        totalEligible: 45,
        participationRate: 100,
        result: 'approved',
        userVoted: true,
        userVote: 'yes'
      }
    ],
    en: [
      {
        id: 1,
        title: 'FY2025 Activity Plan Proposal',
        description: 'Deliberation on next year\'s activity plan. Key initiatives include strengthening regional cooperation and promoting youth participation.',
        category: 'policy',
        categoryDisplay: 'Policy',
        status: 'active',
        statusDisplay: 'Voting',
        createdBy: 'Steering Committee',
        createdAt: '2024-12-01',
        deadline: '2024-12-20',
        votes: { yes: 23, no: 5, abstain: 2 },
        totalVotes: 30,
        totalEligible: 45,
        participationRate: 67,
        userVoted: false,
        userVote: null
      },
      {
        id: 2,
        title: 'New Year Party Budget Approval',
        description: 'Request for approval of the budget (¥50,000) for the New Year party on January 10. Includes venue, catering, and souvenirs.',
        category: 'budget',
        categoryDisplay: 'Budget',
        status: 'active',
        statusDisplay: 'Voting',
        createdBy: 'Events Committee',
        createdAt: '2024-12-05',
        deadline: '2024-12-15',
        votes: { yes: 18, no: 2, abstain: 5 },
        totalVotes: 25,
        totalEligible: 45,
        participationRate: 56,
        userVoted: false,
        userVote: null
      },
      {
        id: 3,
        title: 'Delivery Route Change Proposal',
        description: 'Proposal to change delivery routes in Nerima area for efficiency. Some members\' delivery times will change.',
        category: 'policy',
        categoryDisplay: 'Policy',
        status: 'closed',
        statusDisplay: 'Closed',
        createdBy: 'Logistics Committee',
        createdAt: '2024-11-15',
        deadline: '2024-11-30',
        votes: { yes: 35, no: 8, abstain: 2 },
        totalVotes: 45,
        totalEligible: 45,
        participationRate: 100,
        result: 'approved',
        userVoted: true,
        userVote: 'yes'
      }
    ]
  },

  // ============================================
  // COMMUNITY POLLS (All Members)
  // ============================================
  polls: {
    ja: [
      {
        id: 1,
        title: '来年の料理教室で習いたいメニューは？',
        description: '2025年の料理教室のテーマを決めるアンケートです。皆さんのご意見をお聞かせください。',
        type: 'single', // single choice
        category: 'event',
        categoryDisplay: 'イベント',
        status: 'active',
        statusDisplay: '投票受付中',
        createdBy: 'イベント担当',
        createdByRole: 'shokuin',
        createdAt: '2024-12-08',
        deadline: '2024-12-25',
        options: [
          { id: 'a', text: '和食（おせち料理）', votes: 45 },
          { id: 'b', text: '韓国料理', votes: 32 },
          { id: 'c', text: 'イタリアン', votes: 28 },
          { id: 'd', text: 'ヘルシースイーツ', votes: 19 }
        ],
        totalVotes: 124,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 2,
        title: 'ニュースレターの配信頻度について',
        description: '現在月1回のニュースレターについて、皆様のご希望をお聞かせください。',
        type: 'single',
        category: 'general',
        categoryDisplay: '一般',
        status: 'active',
        statusDisplay: '投票受付中',
        createdBy: '広報委員会',
        createdByRole: 'reijikai',
        createdAt: '2024-12-05',
        deadline: '2024-12-20',
        options: [
          { id: 'a', text: '週1回', votes: 15 },
          { id: 'b', text: '月2回', votes: 42 },
          { id: 'c', text: '月1回（現状維持）', votes: 38 },
          { id: 'd', text: '必要な時だけ', votes: 25 }
        ],
        totalVotes: 120,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 3,
        title: '好きな季節の野菜セットは？',
        description: '人気の季節野菜セットを調査中です。複数選択可能です。',
        type: 'multiple', // multiple choice
        category: 'product',
        categoryDisplay: '商品',
        status: 'active',
        statusDisplay: '投票受付中',
        createdBy: '商品企画部',
        createdByRole: 'shokuin',
        createdAt: '2024-12-10',
        deadline: '2024-12-31',
        options: [
          { id: 'a', text: '春野菜セット', votes: 67 },
          { id: 'b', text: '夏野菜セット', votes: 89 },
          { id: 'c', text: '秋野菜セット', votes: 54 },
          { id: 'd', text: '冬野菜セット', votes: 72 }
        ],
        totalVotes: 156, // unique voters
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 4,
        title: '年末年始の営業について',
        description: '12/29〜1/3の営業についてのアンケートは終了しました。ご協力ありがとうございました。',
        type: 'single',
        category: 'general',
        categoryDisplay: '一般',
        status: 'closed',
        statusDisplay: '終了',
        createdBy: '事務局',
        createdByRole: 'shokuin',
        createdAt: '2024-11-20',
        deadline: '2024-12-01',
        options: [
          { id: 'a', text: '全日休業', votes: 45 },
          { id: 'b', text: '12/31と1/1のみ休業', votes: 78 },
          { id: 'c', text: '1/1のみ休業', votes: 23 }
        ],
        totalVotes: 146,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        result: 'b',
        userVoted: true,
        userVote: 'b'
      }
    ],
    en: [
      {
        id: 1,
        title: 'What menu would you like to learn in next year\'s cooking class?',
        description: 'Survey to decide the theme for 2025 cooking classes. Please share your opinion.',
        type: 'single',
        category: 'event',
        categoryDisplay: 'Event',
        status: 'active',
        statusDisplay: 'Voting Open',
        createdBy: 'Events Staff',
        createdByRole: 'shokuin',
        createdAt: '2024-12-08',
        deadline: '2024-12-25',
        options: [
          { id: 'a', text: 'Japanese (Osechi)', votes: 45 },
          { id: 'b', text: 'Korean Cuisine', votes: 32 },
          { id: 'c', text: 'Italian', votes: 28 },
          { id: 'd', text: 'Healthy Sweets', votes: 19 }
        ],
        totalVotes: 124,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 2,
        title: 'Newsletter frequency preference',
        description: 'Please share your preference about the current monthly newsletter.',
        type: 'single',
        category: 'general',
        categoryDisplay: 'General',
        status: 'active',
        statusDisplay: 'Voting Open',
        createdBy: 'PR Committee',
        createdByRole: 'reijikai',
        createdAt: '2024-12-05',
        deadline: '2024-12-20',
        options: [
          { id: 'a', text: 'Weekly', votes: 15 },
          { id: 'b', text: 'Twice a month', votes: 42 },
          { id: 'c', text: 'Monthly (current)', votes: 38 },
          { id: 'd', text: 'Only when needed', votes: 25 }
        ],
        totalVotes: 120,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 3,
        title: 'Favorite seasonal vegetable sets?',
        description: 'Survey about popular seasonal vegetable sets. Multiple selections allowed.',
        type: 'multiple',
        category: 'product',
        categoryDisplay: 'Product',
        status: 'active',
        statusDisplay: 'Voting Open',
        createdBy: 'Product Planning',
        createdByRole: 'shokuin',
        createdAt: '2024-12-10',
        deadline: '2024-12-31',
        options: [
          { id: 'a', text: 'Spring Vegetable Set', votes: 67 },
          { id: 'b', text: 'Summer Vegetable Set', votes: 89 },
          { id: 'c', text: 'Autumn Vegetable Set', votes: 54 },
          { id: 'd', text: 'Winter Vegetable Set', votes: 72 }
        ],
        totalVotes: 156,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        userVoted: false,
        userVote: null
      },
      {
        id: 4,
        title: 'Year-end/New Year operations',
        description: 'Survey about Dec 29 - Jan 3 operations has ended. Thank you for participating.',
        type: 'single',
        category: 'general',
        categoryDisplay: 'General',
        status: 'closed',
        statusDisplay: 'Closed',
        createdBy: 'Office',
        createdByRole: 'shokuin',
        createdAt: '2024-11-20',
        deadline: '2024-12-01',
        options: [
          { id: 'a', text: 'Closed all days', votes: 45 },
          { id: 'b', text: 'Closed Dec 31 & Jan 1 only', votes: 78 },
          { id: 'c', text: 'Closed Jan 1 only', votes: 23 }
        ],
        totalVotes: 146,
        allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
        result: 'b',
        userVoted: true,
        userVote: 'b'
      }
    ]
  },

  // Dashboard stats
  stats: {
    activeRequests: 3,
    upcomingEvents: 5,
    unreadNews: 2,
    pendingProposals: 2,
    activePolls: 3
  }
};

// Make available globally
window.CoopData = CoopData;