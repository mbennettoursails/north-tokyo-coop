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

  // Dashboard stats
  stats: {
    activeRequests: 3,
    upcomingEvents: 5,
    unreadNews: 2,
    pendingProposals: 2
  }
};

// Make available globally
window.CoopData = CoopData;