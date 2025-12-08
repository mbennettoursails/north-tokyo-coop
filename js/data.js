/**
 * North Tokyo COOP Hub - Dummy Data
 * All sample data for POC demonstration
 */

const CoopData = {
  
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
      areaEn: 'Itabashi',
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
      areaEn: 'Nerima',
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
      areaEn: 'Toshima',
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
      areaEn: 'Nerima',
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
      areaEn: 'Itabashi',
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
      areaEn: 'Kita',
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
      areaEn: 'Toshima',
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
      areaEn: 'Bunkyo',
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
      categoryName: 'お知らせ',
      categoryNameEn: 'Announcement',
      title: '年末年始の営業日程について',
      titleEn: 'Year-end and New Year schedule',
      excerpt: '12月29日〜1月3日まで事務所は休業となります。配達スケジュールの変更についてもご確認ください。',
      excerptEn: 'Office will be closed Dec 29 - Jan 3. Please check delivery schedule changes.',
      content: '会員の皆様へ\n\n年末年始の営業日程についてお知らせいたします。\n\n【休業期間】\n12月29日（日）〜 1月3日（金）\n\n【配達スケジュール】\n年末最終配達：12月27日（金）\n年始初回配達：1月6日（月）\n\nご不便をおかけしますが、よろしくお願いいたします。',
      contentEn: 'Dear Members,\n\nPlease note our year-end and New Year schedule.\n\n[Closed]\nDecember 29 (Sun) - January 3 (Fri)\n\n[Delivery Schedule]\nLast delivery of the year: December 27 (Fri)\nFirst delivery of new year: January 6 (Mon)\n\nThank you for your understanding.',
      date: '2024-12-10',
      author: '北東京生活クラブ事務局',
      authorEn: 'North Tokyo Seikatsu Club Office',
      views: 1247,
      featured: true,
      pinned: true
    },
    {
      id: 'news-002',
      category: 'products',
      categoryName: '新商品',
      categoryNameEn: 'New Products',
      title: '冬の新商品ラインナップのご紹介',
      titleEn: 'Winter new product lineup',
      excerpt: '今年の冬は特別な有機野菜セットをご用意しました。地元農家との協力により、新鮮で安全な野菜をお届けします。',
      excerptEn: 'Special organic vegetable sets available this winter. Fresh and safe vegetables from local farm partnerships.',
      content: '寒い季節にぴったりの新商品が登場しました。\n\n【有機野菜セット】\n・練馬大根\n・ほうれん草\n・白菜\n・にんじん\n\nすべて地元農家との契約栽培です。',
      contentEn: 'New products perfect for the cold season.\n\n[Organic Vegetable Set]\n- Nerima Daikon\n- Spinach\n- Napa Cabbage\n- Carrots\n\nAll from contracted local farms.',
      date: '2024-12-08',
      author: '商品部',
      authorEn: 'Product Department',
      views: 856,
      featured: false,
      pinned: false
    },
    {
      id: 'news-003',
      category: 'community',
      categoryName: 'コミュニティ',
      categoryNameEn: 'Community',
      title: 'ボランティア感謝イベントを開催します',
      titleEn: 'Volunteer appreciation event',
      excerpt: '日頃からボランティア活動にご協力いただいている皆様への感謝を込めて、特別イベントを開催いたします。',
      excerptEn: 'Special event to thank our dedicated volunteers. All volunteers are invited.',
      content: 'ボランティアの皆様へ\n\n日頃の活動に心より感謝申し上げます。\n\n【日時】12月23日（月）17:00〜\n【場所】豊島区民センター\n【内容】感謝状贈呈、懇親会',
      contentEn: 'To Our Volunteers,\n\nThank you for your dedication.\n\n[Date] December 23 (Mon) 17:00~\n[Location] Toshima Community Center\n[Program] Awards ceremony, social gathering',
      date: '2024-12-05',
      author: 'コミュニティ推進部',
      authorEn: 'Community Development',
      views: 523,
      featured: false,
      pinned: false
    },
    {
      id: 'news-004',
      category: 'events',
      categoryName: 'イベント',
      categoryNameEn: 'Events',
      title: '12月の料理教室参加者募集',
      titleEn: 'December cooking class registration open',
      excerpt: '地元の食材を使った冬のあったか料理教室を開催します。初心者の方も大歓迎です。',
      excerptEn: 'Winter warm cooking class using local ingredients. Beginners welcome.',
      content: '毎月好評の料理教室、12月も開催いたします。\n\n【メニュー】\n・ポトフ\n・手作りパン\n・りんごのタルト\n\n【参加費】500円',
      contentEn: 'Our popular monthly cooking class continues in December.\n\n[Menu]\n- Pot-au-feu\n- Homemade bread\n- Apple tart\n\n[Fee] ¥500',
      date: '2024-12-03',
      author: 'イベント企画部',
      authorEn: 'Event Planning',
      views: 412,
      featured: false,
      pinned: false
    },
    {
      id: 'news-005',
      category: 'policy',
      categoryName: '方針',
      categoryNameEn: 'Policy',
      title: '2025年度の活動方針について',
      titleEn: 'FY2025 activity policy',
      excerpt: '来年度の組合活動方針案について、会員の皆様からのご意見を募集しています。',
      excerptEn: 'Seeking member feedback on next fiscal year activity policy proposal.',
      content: '2025年度の活動方針案をまとめました。\n\n【重点項目】\n1. 環境負荷低減\n2. 地域コミュニティ強化\n3. デジタル化推進\n\nご意見をお待ちしております。',
      contentEn: 'FY2025 activity policy draft.\n\n[Key Items]\n1. Environmental impact reduction\n2. Community strengthening\n3. Digital transformation\n\nWe welcome your feedback.',
      date: '2024-12-01',
      author: '理事会',
      authorEn: 'Board of Directors',
      views: 678,
      featured: true,
      pinned: true
    }
  ],

  // ==========================================
  // EVENTS
  // ==========================================
  events: [
    {
      id: 'event-001',
      category: 'workshop',
      categoryName: 'ワークショップ',
      categoryNameEn: 'Workshop',
      title: '冬のあったか料理教室',
      titleEn: 'Winter Warm Cooking Class',
      description: '地元の有機野菜を使った、体が温まるレシピを学びます。初心者の方も大歓迎です。',
      descriptionEn: 'Learn warming recipes using local organic vegetables. Beginners welcome.',
      date: '2024-12-20',
      time: '10:00',
      endTime: '12:00',
      location: '練馬区民センター 調理室',
      locationEn: 'Nerima Community Center Kitchen',
      capacity: 20,
      registered: 15,
      fee: 500,
      organizer: 'はなさん',
      organizerEn: 'Hana-san',
      image: null,
      isRegistered: false,
      featured: true
    },
    {
      id: 'event-002',
      category: 'meeting',
      categoryName: '会議',
      categoryNameEn: 'Meeting',
      title: '12月定例会議',
      titleEn: 'December Regular Meeting',
      description: '今年の振り返りと来年の活動計画について話し合います。オンライン参加も可能です。',
      descriptionEn: 'Review this year and discuss next year plans. Online participation available.',
      date: '2024-12-18',
      time: '19:00',
      endTime: '21:00',
      location: 'オンライン (Zoom)',
      locationEn: 'Online (Zoom)',
      capacity: 100,
      registered: 42,
      fee: 0,
      organizer: '理事会',
      organizerEn: 'Board of Directors',
      image: null,
      isRegistered: true,
      featured: false,
      roleRestricted: 'reijikai'
    },
    {
      id: 'event-003',
      category: 'social',
      categoryName: '交流会',
      categoryNameEn: 'Social',
      title: '年末感謝祭',
      titleEn: 'Year-End Appreciation Festival',
      description: '会員の皆様への感謝を込めて、食事会と抽選会を開催します。ご家族でのご参加も大歓迎です。',
      descriptionEn: 'Dinner party and raffle to thank all members. Families welcome.',
      date: '2024-12-23',
      time: '17:00',
      endTime: '20:00',
      location: '豊島区民センター 多目的ホール',
      locationEn: 'Toshima Community Center Hall',
      capacity: 80,
      registered: 67,
      fee: 1000,
      organizer: 'イベント企画部',
      organizerEn: 'Event Planning',
      image: null,
      isRegistered: false,
      featured: true
    },
    {
      id: 'event-004',
      category: 'learning',
      categoryName: '学習会',
      categoryNameEn: 'Learning',
      title: '食の安全セミナー',
      titleEn: 'Food Safety Seminar',
      description: '食品添加物と有機農業について学ぶセミナーです。専門家をお招きして解説いただきます。',
      descriptionEn: 'Seminar on food additives and organic farming. Expert speakers invited.',
      date: '2024-12-25',
      time: '14:00',
      endTime: '16:00',
      location: '板橋区立文化会館',
      locationEn: 'Itabashi Cultural Center',
      capacity: 50,
      registered: 23,
      fee: 0,
      organizer: '学習委員会',
      organizerEn: 'Learning Committee',
      image: null,
      isRegistered: false,
      featured: false
    },
    {
      id: 'event-005',
      category: 'volunteer',
      categoryName: 'ボランティア',
      categoryNameEn: 'Volunteer',
      title: 'フードバンク仕分けボランティア',
      titleEn: 'Food Bank Sorting Volunteer',
      description: 'フードバンクへの寄付食品の仕分け作業をお手伝いください。初めての方も歓迎です。',
      descriptionEn: 'Help sort donated food for the food bank. First-timers welcome.',
      date: '2024-12-28',
      time: '09:00',
      endTime: '12:00',
      location: '北区社会福祉協議会',
      locationEn: 'Kita Social Welfare Council',
      capacity: 15,
      registered: 8,
      fee: 0,
      organizer: 'ボランティア委員会',
      organizerEn: 'Volunteer Committee',
      image: null,
      isRegistered: true,
      featured: false
    }
  ],

  // ==========================================
  // KNOWLEDGE CATEGORIES (NEW - Required by app.js)
  // ==========================================
  knowledgeCategories: [
    { id: 'faq', name: 'よくある質問', nameEn: 'FAQ', icon: '❓', color: 'blue' },
    { id: 'recipes', name: 'レシピ', nameEn: 'Recipes', icon: '🍳', color: 'orange' },
    { id: 'guides', name: 'ガイド', nameEn: 'Guides', icon: '📖', color: 'green' },
    { id: 'policies', name: '規約・方針', nameEn: 'Policies', icon: '📋', color: 'gray' },
    { id: 'tips', name: '豆知識', nameEn: 'Tips', icon: '💡', color: 'yellow' }
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
      content: '配達日を変更するには、マイページから「配達設定」を選択し、ご希望の日程を選んでください。変更は配達日の3日前まで可能です。',
      contentEn: 'To change your delivery date, go to My Page, select "Delivery Settings", and choose your preferred date. Changes must be made 3 days before delivery.',
      views: 1523
    },
    {
      id: 'kb-002',
      category: 'recipes',
      title: '簡単！野菜たっぷりスープ',
      titleEn: 'Easy Vegetable Soup Recipe',
      content: '材料（4人分）: にんじん1本、玉ねぎ1個、キャベツ1/4個、コンソメ2個、水800ml\n\n作り方:\n1. 野菜を食べやすい大きさに切る\n2. 鍋に水とコンソメを入れ、沸騰させる\n3. 野菜を入れて15分煮込む\n4. 塩コショウで味を調える',
      contentEn: 'Ingredients (4 servings): 1 carrot, 1 onion, 1/4 cabbage, 2 bouillon cubes, 800ml water\n\nDirections:\n1. Cut vegetables into bite-sized pieces\n2. Boil water with bouillon\n3. Add vegetables and simmer 15 min\n4. Season with salt and pepper',
      views: 892
    },
    {
      id: 'kb-003',
      category: 'guides',
      title: '初めての方へ：生活クラブの使い方',
      titleEn: 'Getting Started with Seikatsu Club',
      content: '生活クラブへようこそ！このガイドでは、注文方法から配達の受け取りまで、基本的な使い方をご説明します。\n\n1. カタログを確認\n2. OCR用紙またはWebで注文\n3. 指定日に配達を受け取り\n\n困ったときは事務局までお気軽にご連絡ください。',
      contentEn: 'Welcome to Seikatsu Club! This guide covers the basics from ordering to receiving delivery.\n\n1. Check the catalog\n2. Order via OCR form or Web\n3. Receive delivery on designated day\n\nContact the office if you need help.',
      views: 2341
    },
    {
      id: 'kb-004',
      category: 'policies',
      title: '組合員規約',
      titleEn: 'Member Agreement',
      content: '第1条（目的）この規約は、生活クラブ消費生活協同組合連合会の組合員としての権利と義務を定めるものです。\n\n第2条（加入）本組合への加入は、出資金の払込みをもって成立します。',
      contentEn: 'Article 1 (Purpose) This agreement defines the rights and obligations of members of the Seikatsu Club Consumers\' Co-operative Union.\n\nArticle 2 (Membership) Membership is established upon payment of share capital.',
      views: 456
    },
    {
      id: 'kb-005',
      category: 'tips',
      title: '食材を長持ちさせる保存方法',
      titleEn: 'Food storage tips for longer freshness',
      content: '野菜の保存方法をご紹介します。\n\n【葉物野菜】\n・湿らせた新聞紙で包み、ビニール袋に入れて冷蔵\n\n【根菜】\n・新聞紙で包み、冷暗所で保存\n\n【きのこ】\n・ペーパータオルで包み、密閉せずに冷蔵',
      contentEn: 'Tips for storing vegetables.\n\n[Leafy Greens]\n- Wrap in damp newspaper, place in plastic bag, refrigerate\n\n[Root Vegetables]\n- Wrap in newspaper, store in cool dark place\n\n[Mushrooms]\n- Wrap in paper towel, refrigerate without sealing',
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
      description: '来年度の予算配分案を提案します。教育プログラムへの投資を20%増加させる内容です。地域コミュニティの強化と環境活動への支援も含まれています。',
      descriptionEn: 'Proposing next fiscal year budget allocation with 20% increase in educational programs. Includes community strengthening and environmental initiatives.',
      category: 'budget',
      categoryName: '予算',
      categoryNameEn: 'Budget',
      status: 'active',
      statusName: '投票中',
      statusNameEn: 'Active',
      deadline: '2024-12-15',
      createdBy: '山田 太郎',
      createdByEn: 'Taro Yamada',
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
      description: '練馬区に新しいコミュニティスペースを設置する提案です。会員の交流促進が目的です。月2回のイベント開催を予定しています。',
      descriptionEn: 'Proposal to establish a new community space in Nerima ward to promote member interaction. Planning bi-weekly events.',
      category: 'policy',
      categoryName: '方針',
      categoryNameEn: 'Policy',
      status: 'active',
      statusName: '投票中',
      statusNameEn: 'Active',
      deadline: '2024-12-20',
      createdBy: '佐藤 一郎',
      createdByEn: 'Ichiro Sato',
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
      description: '2025年末までにすべての商品パッケージを環境配慮型に移行する提案です。プラスチック使用量を50%削減する目標を設定しています。',
      descriptionEn: 'Proposal to transition all product packaging to eco-friendly materials by end of 2025. Goal: 50% reduction in plastic usage.',
      category: 'policy',
      categoryName: '方針',
      categoryNameEn: 'Policy',
      status: 'active',
      statusName: '投票中',
      statusNameEn: 'Active',
      deadline: '2024-12-25',
      createdBy: '田中 美咲',
      createdByEn: 'Misaki Tanaka',
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

// ==========================================
// HELPER FUNCTIONS
// ==========================================
const dataHelpers = {
  // Get user by role
  getUserByRole(role) {
    return CoopData.users[role] || null;
  },
  
  // Get service category by ID
  getServiceCategory(id) {
    return CoopData.serviceCategories.find(s => s.id === id);
  },
  
  // Get area by ID
  getArea(id) {
    return CoopData.areas.find(a => a.id === id);
  },
  
  // Filter community requests
  filterCommunityRequests({ type, category, area, urgency } = {}) {
    let results = [...CoopData.communityRequests];
    
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

// ==========================================
// GLOBAL EXPOSURE - CRITICAL FOR BROWSER
// ==========================================
// Make CoopData available globally in browser
if (typeof window !== 'undefined') {
  window.CoopData = CoopData;
  window.dataHelpers = dataHelpers;
}

// Export for Node.js/CommonJS (if needed for testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CoopData, dataHelpers };
}