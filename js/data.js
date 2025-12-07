/**
 * North Tokyo COOP Hub - Dummy Data
 * All sample data for POC demonstration
 */

const appData = {
  
  // ==========================================
  // USERS (All Three Personas)
  // ==========================================
  users: {
    reijikai: {
      id: 'NT-R-001',
      name: '山田 太郎',
      nameEn: 'Taro Yamada',
      nickname: 'やまちゃん',
      role: 'reijikai',
      area: 'nerima',
      areaName: '練馬区',
      areaNameEn: 'Nerima',
      memberSince: '2015-04-01',
      email: 'yamada@example.com',
      phone: '090-1234-5678',
      avatar: '👔',
      avatarColor: 'purple',
      bio: '10年以上の組合活動経験。地域の食の安全を守りたい。週末はガーデニングを楽しんでいます。',
      bioEn: '10+ years of coop experience. Passionate about local food safety. Enjoy gardening on weekends.',
      servicesOffered: ['education', 'eldercare'],
      servicesNeeded: [],
      availability: {
        monday: ['morning'],
        tuesday: [],
        wednesday: ['afternoon'],
        thursday: [],
        friday: [],
        saturday: ['morning', 'afternoon'],
        sunday: ['morning']
      },
      privacy: {
        showRealName: true,
        locationPrecision: 'district',
        contactMethod: 'inapp',
        profileVisibility: 'all'
      },
      stats: {
        helped: 45,
        received: 3,
        rating: 4.9,
        proposalsCreated: 12,
        votesParticipated: 87
      }
    },
    
    shokuin: {
      id: 'NT-S-042',
      name: '佐藤 花子',
      nameEn: 'Hanako Sato',
      nickname: 'はなさん',
      role: 'shokuin',
      area: 'toshima',
      areaName: '豊島区',
      areaNameEn: 'Toshima',
      memberSince: '2018-09-15',
      email: 'sato@coop.example.com',
      phone: '090-2345-6789',
      avatar: '💼',
      avatarColor: 'blue',
      bio: 'コープの職員として5年目。イベント企画が得意です。子育て中のママでもあります。',
      bioEn: '5th year as coop staff. Good at event planning. Also a mom raising kids.',
      servicesOffered: ['shopping', 'delivery'],
      servicesNeeded: ['childcare'],
      availability: {
        monday: [],
        tuesday: ['evening'],
        wednesday: [],
        thursday: ['evening'],
        friday: [],
        saturday: [],
        sunday: ['morning', 'afternoon']
      },
      privacy: {
        showRealName: true,
        locationPrecision: 'district',
        contactMethod: 'email',
        profileVisibility: 'all'
      },
      stats: {
        helped: 28,
        received: 15,
        rating: 4.8,
        articlesPublished: 45,
        eventsCreated: 23
      }
    },
    
    volunteer: {
      id: 'NT-12345',
      name: '田中 美咲',
      nameEn: 'Misaki Tanaka',
      nickname: 'みさきママ',
      role: 'volunteer',
      area: 'itabashi',
      areaName: '板橋区',
      areaNameEn: 'Itabashi',
      memberSince: '2022-01-10',
      email: 'tanaka@example.com',
      phone: '090-3456-7890',
      avatar: '🤝',
      avatarColor: 'green',
      bio: '2児の母。子育て中のママ同士で助け合いたいです。趣味は料理とヨガ。',
      bioEn: 'Mother of 2. Want to help other moms. Hobbies: cooking and yoga.',
      servicesOffered: ['childcare', 'petcare', 'homehelp'],
      servicesNeeded: ['transportation', 'shopping'],
      availability: {
        monday: ['morning', 'afternoon'],
        tuesday: [],
        wednesday: ['morning'],
        thursday: [],
        friday: ['morning', 'afternoon'],
        saturday: [],
        sunday: []
      },
      privacy: {
        showRealName: false,
        locationPrecision: 'district',
        contactMethod: 'inapp',
        profileVisibility: 'verified'
      },
      stats: {
        helped: 12,
        received: 8,
        rating: 4.7,
        eventsAttended: 6,
        requestsPosted: 5
      }
    }
  },

  // ==========================================
  // SERVICE CATEGORIES
  // ==========================================
  serviceCategories: [
    { id: 'childcare', name: '育児サポート', nameEn: 'Childcare', icon: '👶', color: 'pink' },
    { id: 'transportation', name: '送迎・ライドシェア', nameEn: 'Transportation', icon: '🚗', color: 'blue' },
    { id: 'shopping', name: '買い物代行', nameEn: 'Shopping', icon: '🛒', color: 'green' },
    { id: 'delivery', name: '配達サポート', nameEn: 'Delivery', icon: '📦', color: 'orange' },
    { id: 'homehelp', name: '家事サポート', nameEn: 'Home Help', icon: '🏠', color: 'yellow' },
    { id: 'education', name: '学習支援', nameEn: 'Education', icon: '📚', color: 'purple' },
    { id: 'petcare', name: 'ペットケア', nameEn: 'Pet Care', icon: '🐕', color: 'amber' },
    { id: 'eldercare', name: '高齢者支援', nameEn: 'Elder Care', icon: '👴', color: 'teal' }
  ],

  // ==========================================
  // AREAS
  // ==========================================
  areas: [
    { id: 'nerima', name: '練馬区', nameEn: 'Nerima' },
    { id: 'toshima', name: '豊島区', nameEn: 'Toshima' },
    { id: 'itabashi', name: '板橋区', nameEn: 'Itabashi' },
    { id: 'kita', name: '北区', nameEn: 'Kita' },
    { id: 'bunkyo', name: '文京区', nameEn: 'Bunkyo' },
    { id: 'nakano', name: '中野区', nameEn: 'Nakano' }
  ],

  // ==========================================
  // COMMUNITY MUTUAL AID REQUESTS
  // ==========================================
  communityRequests: [
    {
      id: 'req-001',
      type: 'request',
      category: 'childcare',
      title: '12月15日（日）午後のベビーシッター',
      titleEn: 'Babysitter needed Dec 15 (Sun) afternoon',
      description: '買い物に行く間、3歳の娘を2時間ほど見ていただける方を探しています。経験のある方だと安心です。',
      descriptionEn: 'Looking for someone to watch my 3-year-old daughter for 2 hours while I go shopping. Prefer someone with experience.',
      userId: 'NT-12345',
      userName: 'みさきママ',
      userAvatar: '🤝',
      area: 'itabashi',
      areaName: '板橋区',
      date: '2024-12-15',
      timeSlot: 'afternoon',
      urgency: 'normal',
      status: 'open',
      views: 12,
      responses: [
        { userId: 'NT-54322', userName: '木村さん', message: '対応可能です！', createdAt: '2024-12-10T14:00:00' },
        { userId: 'NT-54323', userName: '高橋さん', message: '興味があります', createdAt: '2024-12-10T15:30:00' },
        { userId: 'NT-54324', userName: '渡辺さん', message: '詳細を教えてください', createdAt: '2024-12-10T16:45:00' }
      ],
      createdAt: '2024-12-10T10:30:00'
    },
    {
      id: 'req-002',
      type: 'offer',
      category: 'transportation',
      title: '毎週水曜日の送迎可能です',
      titleEn: 'Available for rides every Wednesday',
      description: '練馬区内であれば、水曜日の午前中に送迎のお手伝いができます。病院やスーパーへの送迎など、お気軽にご連絡ください。',
      descriptionEn: 'Can provide rides Wednesday mornings within Nerima. Hospital visits, supermarket trips, etc. Feel free to contact me.',
      userId: 'NT-R-001',
      userName: 'やまちゃん',
      userAvatar: '👔',
      area: 'nerima',
      areaName: '練馬区',
      date: null,
      timeSlot: 'morning',
      urgency: 'normal',
      status: 'open',
      views: 28,
      responses: [
        { userId: 'NT-54325', userName: '伊藤さん', message: '来週お願いできますか？', createdAt: '2024-12-09T09:00:00' },
        { userId: 'NT-54326', userName: '斎藤さん', message: 'ありがとうございます！', createdAt: '2024-12-09T10:00:00' }
      ],
      createdAt: '2024-12-08T14:00:00'
    },
    {
      id: 'req-003',
      type: 'request',
      category: 'shopping',
      title: '【急募】明日の買い物代行',
      titleEn: '[URGENT] Shopping help needed tomorrow',
      description: '体調を崩してしまい、明日のコープ配達の受け取りと少しの買い物をお願いできる方いませんか？謝礼は応相談です。',
      descriptionEn: 'Feeling unwell. Need help receiving COOP delivery tomorrow and some light shopping. Compensation negotiable.',
      userId: 'NT-54321',
      userName: '鈴木さん',
      userAvatar: '👵',
      area: 'toshima',
      areaName: '豊島区',
      date: '2024-12-11',
      timeSlot: 'morning',
      urgency: 'urgent',
      status: 'open',
      views: 45,
      responses: [
        { userId: 'NT-S-042', userName: 'はなさん', message: '対応できます！', createdAt: '2024-12-10T18:30:00' },
        { userId: 'NT-54327', userName: '小林さん', message: '午前中なら可能です', createdAt: '2024-12-10T19:00:00' }
      ],
      createdAt: '2024-12-10T18:00:00'
    },
    {
      id: 'req-004',
      type: 'exchange',
      category: 'education',
      title: '英語⇔日本語 言語交換しませんか？',
      titleEn: 'English-Japanese language exchange',
      description: '英語を教える代わりに、日本語の会話練習を手伝ってくれる方を探しています。週1回、1時間程度。オンラインでも対面でもOKです。',
      descriptionEn: 'Looking for someone to practice Japanese conversation in exchange for English lessons. Once a week, about 1 hour. Online or in-person OK.',
      userId: 'NT-67890',
      userName: 'マイクさん',
      userAvatar: '🌍',
      area: 'nerima',
      areaName: '練馬区',
      date: null,
      timeSlot: 'evening',
      urgency: 'normal',
      status: 'open',
      views: 19,
      responses: [
        { userId: 'NT-54328', userName: '山本さん', message: '興味あります！', createdAt: '2024-12-09T20:00:00' }
      ],
      createdAt: '2024-12-09T09:00:00'
    },
    {
      id: 'req-005',
      type: 'offer',
      category: 'petcare',
      title: '犬の散歩お手伝いします',
      titleEn: 'Dog walking available',
      description: '平日の朝、犬の散歩をお手伝いできます。板橋区周辺で、小型犬から中型犬まで対応可能です。',
      descriptionEn: 'Available for dog walking on weekday mornings. Itabashi area. Small to medium dogs.',
      userId: 'NT-12345',
      userName: 'みさきママ',
      userAvatar: '🤝',
      area: 'itabashi',
      areaName: '板橋区',
      date: null,
      timeSlot: 'morning',
      urgency: 'normal',
      status: 'open',
      views: 8,
      responses: [],
      createdAt: '2024-12-07T11:00:00'
    },
    {
      id: 'req-006',
      type: 'request',
      category: 'eldercare',
      title: '週1回の見守り訪問をお願いしたい',
      titleEn: 'Weekly check-in visit needed',
      description: '一人暮らしの母（82歳）の見守りをお願いできる方を探しています。週1回、30分程度のお話し相手になっていただければ。',
      descriptionEn: 'Looking for someone to check on my mother (82) who lives alone. Once a week, about 30 minutes of companionship.',
      userId: 'NT-54329',
      userName: '中村さん',
      userAvatar: '👨',
      area: 'kita',
      areaName: '北区',
      date: null,
      timeSlot: 'afternoon',
      urgency: 'normal',
      status: 'open',
      views: 34,
      responses: [
        { userId: 'NT-R-001', userName: 'やまちゃん', message: 'ボランティアで対応可能です', createdAt: '2024-12-08T10:00:00' }
      ],
      createdAt: '2024-12-06T15:00:00'
    },
    {
      id: 'req-007',
      type: 'offer',
      category: 'homehelp',
      title: '簡単な家事お手伝いします',
      titleEn: 'Light housework help available',
      description: '掃除、洗濯物たたみ、簡単な料理など、家事のお手伝いができます。日曜日の午後が空いています。',
      descriptionEn: 'Can help with cleaning, folding laundry, simple cooking, etc. Available Sunday afternoons.',
      userId: 'NT-S-042',
      userName: 'はなさん',
      userAvatar: '💼',
      area: 'toshima',
      areaName: '豊島区',
      date: null,
      timeSlot: 'afternoon',
      urgency: 'normal',
      status: 'open',
      views: 15,
      responses: [],
      createdAt: '2024-12-05T12:00:00'
    },
    {
      id: 'req-008',
      type: 'request',
      category: 'delivery',
      title: 'コープ配達の受け取り代行',
      titleEn: 'COOP delivery pickup needed',
      description: '来週火曜日、仕事で不在のため、コープの配達を受け取っていただける方を探しています。冷蔵品があります。',
      descriptionEn: 'Need someone to receive COOP delivery next Tuesday. I will be at work. Includes refrigerated items.',
      userId: 'NT-54330',
      userName: '加藤さん',
      userAvatar: '👩',
      area: 'bunkyo',
      areaName: '文京区',
      date: '2024-12-17',
      timeSlot: 'morning',
      urgency: 'soon',
      status: 'open',
      views: 22,
      responses: [],
      createdAt: '2024-12-10T08:00:00'
    }
  ],

  // ==========================================
  // NEWS ARTICLES
  // ==========================================
  newsArticles: [
    {
      id: 'news-001',
      category: 'announcement',
      title: '年末年始の営業日程について',
      titleEn: 'Year-end and New Year schedule',
      excerpt: '12月29日〜1月3日まで事務所は休業となります。配達スケジュールの変更についてもご確認ください。',
      excerptEn: 'Office will be closed Dec 29 - Jan 3. Please check delivery schedule changes.',
      content: '会員の皆様へ\n\n年末年始の営業日程についてお知らせいたします...',
      date: '2024-12-10',
      author: '北東京生活クラブ事務局',
      views: 1247,
      featured: true
    },
    {
      id: 'news-002',
      category: 'products',
      title: '冬の新商品ラインナップのご紹介',
      titleEn: 'Winter new product lineup',
      excerpt: '今年の冬は特別な有機野菜セットをご用意しました。地元農家との協力により、新鮮で安全な野菜をお届けします。',
      excerptEn: 'Special organic vegetable sets available this winter. Fresh and safe vegetables from local farm partnerships.',
      content: '寒い季節にぴったりの新商品が登場しました...',
      date: '2024-12-08',
      author: '商品部',
      views: 856,
      featured: false
    },
    {
      id: 'news-003',
      category: 'community',
      title: 'ボランティア感謝イベントを開催します',
      titleEn: 'Volunteer appreciation event',
      excerpt: '日頃からボランティア活動にご協力いただいている皆様への感謝を込めて、特別イベントを開催いたします。',
      excerptEn: 'Special event to thank our dedicated volunteers. All volunteers are invited.',
      content: 'ボランティアの皆様へ\n\n日頃の活動に心より感謝申し上げます...',
      date: '2024-12-05',
      author: 'コミュニティ推進部',
      views: 523,
      featured: false
    },
    {
      id: 'news-004',
      category: 'events',
      title: '12月の料理教室参加者募集',
      titleEn: 'December cooking class registration open',
      excerpt: '地元の食材を使った冬のあったか料理教室を開催します。初心者の方も大歓迎です。',
      excerptEn: 'Winter warm cooking class using local ingredients. Beginners welcome.',
      content: '毎月好評の料理教室、12月も開催いたします...',
      date: '2024-12-03',
      author: 'イベント企画部',
      views: 412,
      featured: false
    },
    {
      id: 'news-005',
      category: 'policy',
      title: '2025年度の活動方針について',
      titleEn: 'FY2025 activity policy',
      excerpt: '来年度の組合活動方針案について、会員の皆様からのご意見を募集しています。',
      excerptEn: 'Seeking member feedback on next fiscal year activity policy proposal.',
      content: '2025年度の活動方針案をまとめました...',
      date: '2024-12-01',
      author: '理事会',
      views: 678,
      featured: true
    }
  ],

  // ==========================================
  // EVENTS
  // ==========================================
  events: [
    {
      id: 'event-001',
      category: 'workshop',
      title: '冬のあったか料理教室',
      titleEn: 'Winter Warm Cooking Class',
      description: '地元の有機野菜を使った、体が温まるレシピを学びます。',
      descriptionEn: 'Learn warming recipes using local organic vegetables.',
      date: '2024-12-20',
      time: '10:00',
      endTime: '12:00',
      location: '練馬区民センター 調理室',
      locationEn: 'Nerima Community Center Kitchen',
      capacity: 20,
      registered: 15,
      fee: 500,
      organizer: 'はなさん',
      image: null,
      isRegistered: false
    },
    {
      id: 'event-002',
      category: 'meeting',
      title: '12月定例会議',
      titleEn: 'December Regular Meeting',
      description: '今年の振り返りと来年の活動計画について話し合います。',
      descriptionEn: 'Review this year and discuss next year plans.',
      date: '2024-12-18',
      time: '19:00',
      endTime: '21:00',
      location: 'オンライン (Zoom)',
      locationEn: 'Online (Zoom)',
      capacity: 100,
      registered: 42,
      fee: 0,
      organizer: '理事会',
      image: null,
      isRegistered: true
    },
    {
      id: 'event-003',
      category: 'social',
      title: '年末感謝祭',
      titleEn: 'Year-End Appreciation Festival',
      description: '会員の皆様への感謝を込めて、食事会と抽選会を開催します。',
      descriptionEn: 'Dinner party and raffle to thank all members.',
      date: '2024-12-23',
      time: '17:00',
      endTime: '20:00',
      location: '豊島区民センター 多目的ホール',
      locationEn: 'Toshima Community Center Hall',
      capacity: 80,
      registered: 67,
      fee: 1000,
      organizer: 'イベント企画部',
      image: null,
      isRegistered: false
    },
    {
      id: 'event-004',
      category: 'learning',
      title: '食の安全セミナー',
      titleEn: 'Food Safety Seminar',
      description: '食品添加物と有機農業について学ぶセミナーです。',
      descriptionEn: 'Seminar on food additives and organic farming.',
      date: '2024-12-25',
      time: '14:00',
      endTime: '16:00',
      location: '板橋区立文化会館',
      locationEn: 'Itabashi Cultural Center',
      capacity: 50,
      registered: 23,
      fee: 0,
      organizer: '学習委員会',
      image: null,
      isRegistered: false
    },
    {
      id: 'event-005',
      category: 'volunteer',
      title: 'フードバンク仕分けボランティア',
      titleEn: 'Food Bank Sorting Volunteer',
      description: 'フードバンクへの寄付食品の仕分け作業をお手伝いください。',
      descriptionEn: 'Help sort donated food for the food bank.',
      date: '2024-12-28',
      time: '09:00',
      endTime: '12:00',
      location: '北区社会福祉協議会',
      locationEn: 'Kita Social Welfare Council',
      capacity: 15,
      registered: 8,
      fee: 0,
      organizer: 'ボランティア委員会',
      image: null,
      isRegistered: true
    }
  ],

  // ==========================================
  // KNOWLEDGE BASE
  // ==========================================
  knowledgeArticles: [
    {
      id: 'kb-001',
      category: 'faq',
      title: '配達日の変更方法',
      titleEn: 'How to change delivery date',
      content: '配達日を変更するには、マイページから...',
      views: 1523
    },
    {
      id: 'kb-002',
      category: 'recipes',
      title: '簡単！野菜たっぷりスープ',
      titleEn: 'Easy Vegetable Soup Recipe',
      content: '材料（4人分）: にんじん1本、玉ねぎ1個...',
      views: 892
    },
    {
      id: 'kb-003',
      category: 'guides',
      title: '初めての方へ：生活クラブの使い方',
      titleEn: 'Getting Started with Seikatsu Club',
      content: '生活クラブへようこそ！このガイドでは...',
      views: 2341
    },
    {
      id: 'kb-004',
      category: 'policies',
      title: '組合員規約',
      titleEn: 'Member Agreement',
      content: '第1条（目的）この規約は...',
      views: 456
    },
    {
      id: 'kb-005',
      category: 'tips',
      title: '食材を長持ちさせる保存方法',
      titleEn: 'Food storage tips for longer freshness',
      content: '野菜の保存方法をご紹介します...',
      views: 1876
    }
  ],

  // ==========================================
  // PROPOSALS (Reijikai Decision Making)
  // ==========================================
  proposals: [
    {
      id: 'prop-001',
      title: '2025年度の予算配分について',
      titleEn: 'FY2025 Budget Allocation',
      description: '来年度の予算配分案を提案します。教育プログラムへの投資を20%増加させる内容です。',
      descriptionEn: 'Proposing next fiscal year budget allocation with 20% increase in educational programs.',
      category: 'budget',
      status: 'active',
      deadline: '2024-12-15',
      createdBy: 'NT-R-001',
      createdAt: '2024-12-01',
      votes: {
        yes: 142,
        no: 38,
        abstain: 15
      },
      totalEligible: 250,
      userVoted: null
    },
    {
      id: 'prop-002',
      title: '新しいコミュニティスペースの設置',
      titleEn: 'New Community Space Installation',
      description: '練馬区に新しいコミュニティスペースを設置する提案です。会員の交流促進が目的です。',
      descriptionEn: 'Proposal to establish a new community space in Nerima ward to promote member interaction.',
      category: 'policy',
      status: 'active',
      deadline: '2024-12-20',
      createdBy: 'NT-R-002',
      createdAt: '2024-12-05',
      votes: {
        yes: 89,
        no: 52,
        abstain: 24
      },
      totalEligible: 250,
      userVoted: 'yes'
    },
    {
      id: 'prop-003',
      title: '環境配慮パッケージへの移行',
      titleEn: 'Transition to Eco-Friendly Packaging',
      description: '2025年末までにすべての商品パッケージを環境配慮型に移行する提案です。',
      descriptionEn: 'Proposal to transition all product packaging to eco-friendly materials by end of 2025.',
      category: 'policy',
      status: 'active',
      deadline: '2024-12-25',
      createdBy: 'NT-R-003',
      createdAt: '2024-12-08',
      votes: {
        yes: 156,
        no: 23,
        abstain: 31
      },
      totalEligible: 250,
      userVoted: 'yes'
    }
  ],

  // ==========================================
  // DASHBOARD STATS
  // ==========================================
  dashboardStats: {
    reijikai: {
      activeProposals: 3,
      pendingVotes: 1,
      upcomingMeetings: 2,
      membersActive: 1247
    },
    shokuin: {
      pendingContent: 7,
      scheduledPosts: 3,
      upcomingEvents: 5,
      totalMembers: 36000
    },
    volunteer: {
      activeRequests: 5,
      upcomingEvents: 3,
      helpOffered: 12,
      helpReceived: 8
    }
  }
};

// Helper functions
const dataHelpers = {
  // Get user by role
  getUserByRole(role) {
    return appData.users[role] || null;
  },
  
  // Get service category by ID
  getServiceCategory(id) {
    return appData.serviceCategories.find(s => s.id === id);
  },
  
  // Get area by ID
  getArea(id) {
    return appData.areas.find(a => a.id === id);
  },
  
  // Filter community requests
  filterCommunityRequests({ type, category, area, urgency } = {}) {
    let results = [...appData.communityRequests];
    
    if (type && type !== 'all') {
      results = results.filter(r => r.type === type);
    }
    if (category && category !== 'all') {
      results = results.filter(r => r.category === category);
    }
    if (area && area !== 'all') {
      results = results.filter(r => r.area === area);
    }
    if (urgency && urgency !== 'all') {
      results = results.filter(r => r.urgency === urgency);
    }
    
    return results;
  },
  
  // Get relative time string
  getRelativeTime(dateString, lang = 'ja') {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) {
      return lang === 'ja' ? 'たった今' : 'Just now';
    } else if (diffHours < 24) {
      return lang === 'ja' ? `${diffHours}時間前` : `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return lang === 'ja' ? `${diffDays}日前` : `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US');
    }
  },
  
  // Format date for display
  formatDate(dateString, lang = 'ja') {
    const date = new Date(dateString);
    if (lang === 'ja') {
      return date.toLocaleDateString('ja-JP', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'short'
      });
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      weekday: 'short'
    });
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { appData, dataHelpers };
}