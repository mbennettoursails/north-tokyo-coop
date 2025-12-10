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
    
    // ============================================
    // DECISIONS & POLLS
    // ============================================
    decisions: {
      title: '意思決定',
      description: '提案の作成と投票ができます。',
      
      // Tabs
      tabs: {
        polls: 'コミュニティ投票',
        governance: '委員会決議'
      },
      
      // Stats
      activePolls: 'アクティブ',
      participationRate: '参加率',
      avgResponseTime: '平均応答時間',
      days: '日',
      
      // Proposals (Reijikai only)
      newProposal: '新しい提案',
      activeProposals: '投票中の提案',
      closedProposals: '終了した提案',
      createProposal: '提案を作成',
      proposalTitle: '提案タイトル',
      proposalTitlePlaceholder: '提案のタイトルを入力...',
      proposalDescription: '提案内容',
      proposalDescPlaceholder: '提案の詳細を入力...',
      votingDeadline: '投票締切',
      publishProposal: '提案を公開',
      deadline: '締切',
      
      // Categories
      categories: {
        policy: '方針',
        budget: '予算',
        event: 'イベント',
        product: '商品',
        general: '一般',
        other: 'その他'
      },
      
      // Voting
      vote: {
        yes: '賛成',
        no: '反対',
        abstain: '棄権'
      },
      votingEnded: '投票は終了しました',
      youVoted: '投票済み',
      approved: '可決',
      rejected: '否決',
      
      // Activity
      recentActivity: '最近のアクティビティ',
      newVotes: '件の新しい投票',
      commentsToday: '件の本日のコメント',
      proposalClosed: '件の提案が終了',
      
      // Stats labels
      votingStats: '投票統計',
      activeProposalsCount: 'アクティブな提案数',
      
      // Access
      governanceOnly: 'この機能は委員会メンバー限定です',
      accessRestricted: 'アクセス制限',
      backToDashboard: 'ダッシュボードへ戻る'
    },
    
    // ============================================
    // POLLS (All Members)
    // ============================================
    polls: {
      title: 'コミュニティ投票',
      subtitle: 'みんなの意見を聞かせてください',
      
      // Actions
      newPoll: '新しい投票を作成',
      createPoll: '投票を作成',
      viewResults: '結果を見る',
      submitVote: '投票する',
      changeVote: '投票を変更',
      
      // Form
      pollTitle: '質問',
      pollTitlePlaceholder: '質問を入力してください...',
      pollDescription: '説明（任意）',
      pollDescPlaceholder: '詳細な説明を追加...',
      pollType: '投票タイプ',
      singleChoice: '単一選択',
      multipleChoice: '複数選択',
      addOption: '選択肢を追加',
      optionPlaceholder: '選択肢',
      removeOption: '削除',
      minOptions: '最低2つの選択肢が必要です',
      targetAudience: '対象',
      allMembers: '全メンバー',
      deadline: '締切日',
      publish: '公開する',
      cancel: 'キャンセル',
      
      // Status
      status: {
        active: '投票受付中',
        closed: '終了',
        draft: '下書き'
      },
      
      // Results
      votes: '票',
      totalVotes: '総投票数',
      voters: '人が投票',
      yourVote: 'あなたの投票',
      votedFor: 'に投票しました',
      thankYou: 'ご投票ありがとうございます！',
      
      // Filter
      filter: {
        all: 'すべて',
        active: '投票中',
        closed: '終了'
      },
      
      // Empty states
      noActivePolls: '現在アクティブな投票はありません',
      noClosedPolls: '終了した投票はありません',
      noPollsYet: 'まだ投票がありません',
      
      // Permissions
      canCreate: '投票を作成できます',
      cannotCreate: '投票の作成は職員・委員会のみ',
      
      // Confirmation
      confirmSubmit: 'この選択で投票しますか？',
      voteSuccess: '投票が完了しました',
      voteError: '投票に失敗しました'
    },
    
    admin: {
      title: 'コンテンツ管理',
      description: 'ニュース、イベント、ナレッジベースを管理できます。'
    },
    profile: {
      title: 'プロフィール',
      area: '地域',
      role: '役割'
    },
    common: {
      category: 'カテゴリ',
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      edit: '編集',
      close: '閉じる',
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      success: '成功しました',
      confirm: '確認',
      back: '戻る'
    },
    messages: {
      saveSuccess: '保存しました',
      deleteSuccess: '削除しました',
      error: 'エラーが発生しました'
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
    
    // ============================================
    // DECISIONS & POLLS
    // ============================================
    decisions: {
      title: 'Decisions',
      description: 'Create proposals and vote on decisions.',
      
      // Tabs
      tabs: {
        polls: 'Community Polls',
        governance: 'Committee Decisions'
      },
      
      // Stats
      activePolls: 'Active',
      participationRate: 'Participation',
      avgResponseTime: 'Avg Response',
      days: ' days',
      
      // Proposals (Reijikai only)
      newProposal: 'New Proposal',
      activeProposals: 'Active Proposals',
      closedProposals: 'Closed Proposals',
      createProposal: 'Create Proposal',
      proposalTitle: 'Proposal Title',
      proposalTitlePlaceholder: 'Enter proposal title...',
      proposalDescription: 'Description',
      proposalDescPlaceholder: 'Enter proposal details...',
      votingDeadline: 'Voting Deadline',
      publishProposal: 'Publish Proposal',
      deadline: 'Deadline',
      
      // Categories
      categories: {
        policy: 'Policy',
        budget: 'Budget',
        event: 'Event',
        product: 'Product',
        general: 'General',
        other: 'Other'
      },
      
      // Voting
      vote: {
        yes: 'Yes',
        no: 'No',
        abstain: 'Abstain'
      },
      votingEnded: 'Voting has ended',
      youVoted: 'You voted',
      approved: 'Approved',
      rejected: 'Rejected',
      
      // Activity
      recentActivity: 'Recent Activity',
      newVotes: ' new votes',
      commentsToday: ' comments today',
      proposalClosed: ' proposal closed',
      
      // Stats labels
      votingStats: 'Voting Statistics',
      activeProposalsCount: 'Active Proposals',
      
      // Access
      governanceOnly: 'This feature is for committee members only',
      accessRestricted: 'Access Restricted',
      backToDashboard: 'Back to Dashboard'
    },
    
    // ============================================
    // POLLS (All Members)
    // ============================================
    polls: {
      title: 'Community Polls',
      subtitle: 'Share your opinion with us',
      
      // Actions
      newPoll: 'Create New Poll',
      createPoll: 'Create Poll',
      viewResults: 'View Results',
      submitVote: 'Submit Vote',
      changeVote: 'Change Vote',
      
      // Form
      pollTitle: 'Question',
      pollTitlePlaceholder: 'Enter your question...',
      pollDescription: 'Description (optional)',
      pollDescPlaceholder: 'Add detailed description...',
      pollType: 'Poll Type',
      singleChoice: 'Single Choice',
      multipleChoice: 'Multiple Choice',
      addOption: 'Add Option',
      optionPlaceholder: 'Option',
      removeOption: 'Remove',
      minOptions: 'Minimum 2 options required',
      targetAudience: 'Target Audience',
      allMembers: 'All Members',
      deadline: 'Deadline',
      publish: 'Publish',
      cancel: 'Cancel',
      
      // Status
      status: {
        active: 'Voting Open',
        closed: 'Closed',
        draft: 'Draft'
      },
      
      // Results
      votes: 'votes',
      totalVotes: 'Total Votes',
      voters: 'voters',
      yourVote: 'Your vote',
      votedFor: 'voted for',
      thankYou: 'Thank you for voting!',
      
      // Filter
      filter: {
        all: 'All',
        active: 'Active',
        closed: 'Closed'
      },
      
      // Empty states
      noActivePolls: 'No active polls at the moment',
      noClosedPolls: 'No closed polls yet',
      noPollsYet: 'No polls yet',
      
      // Permissions
      canCreate: 'You can create polls',
      cannotCreate: 'Only staff & committee can create polls',
      
      // Confirmation
      confirmSubmit: 'Submit this vote?',
      voteSuccess: 'Vote submitted successfully',
      voteError: 'Failed to submit vote'
    },
    
    admin: {
      title: 'Content Management',
      description: 'Manage news, events, and knowledge base.'
    },
    profile: {
      title: 'Profile',
      area: 'Area',
      role: 'Role'
    },
    common: {
      category: 'Category',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      confirm: 'Confirm',
      back: 'Back'
    },
    messages: {
      saveSuccess: 'Saved successfully',
      deleteSuccess: 'Deleted successfully',
      error: 'An error occurred'
    }
  }
};

// Make available globally
window.i18n = i18n;