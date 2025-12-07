/**
 * North Tokyo COOP Hub - Localization (i18n)
 * Japanese (ja) - Primary
 * English (en) - Secondary
 */

const i18n = {
    ja: {
        // Common
        common: {
            appName: '北東京CO-OP Hub',
            appNameShort: 'CO-OP Hub',
            tagline: 'Community • Privacy • Connection',
            login: 'ログイン',
            logout: 'ログアウト',
            cancel: 'キャンセル',
            save: '保存',
            submit: '送信',
            edit: '編集',
            delete: '削除',
            search: '検索',
            filter: 'フィルター',
            all: 'すべて',
            viewAll: 'すべて見る',
            viewMore: 'もっと見る',
            close: '閉じる',
            back: '戻る',
            next: '次へ',
            loading: '読み込み中...',
            error: 'エラーが発生しました',
            success: '成功しました',
            memberNumber: '会員番号',
            area: 'エリア',
            date: '日付',
            time: '時間',
            category: 'カテゴリー',
            status: 'ステータス',
            views: '閲覧',
            responses: '返信',
            yes: 'はい',
            no: 'いいえ',
            free: '無料'
        },

        // Navigation
        nav: {
            home: 'ホーム',
            news: 'ニュース',
            community: 'コミュニティ',
            events: 'イベント',
            more: 'その他',
            knowledge: '知識倉庫',
            profile: 'プロフィール',
            shop: '商品注文',
            settings: '設定',
            decisions: '意思決定',
            contentManagement: 'コンテンツ管理'
        },

        // Login Page
        login: {
            title: '北東京CO-OP',
            subtitle: 'North Tokyo COOP Hub',
            selectRole: '役割を選択してください',
            selectRoleDesc: 'デモのために、体験したい役割を選択してください',
            scanQR: 'QRコードをスキャン',
            scanQRDesc: '会員カードのQRコードをスキャンしてログイン',
            permissions: '権限プレビュー',
            demoButton: 'デモでログイン',
            privacyTitle: 'プライバシー第一：',
            privacyText: 'あなたの情報は安全に保護されています',
            simulatedQR: 'QRスキャンシミュレーション',
            scanning: 'スキャン中...'
        },

        // Roles
        roles: {
            reijikai: {
                name: '委員会',
                fullName: '委員会メンバー',
                desc: '意思決定者',
                perm1: '提案の作成と管理',
                perm2: '投票結果の確認',
                perm3: '全体アナウンスの投稿',
                perm4: 'すべてのコンテンツの閲覧'
            },
            shokuin: {
                name: '職員',
                fullName: '管理スタッフ',
                desc: 'コンテンツ管理者',
                perm1: 'ニュースの投稿と編集',
                perm2: 'イベントの作成と管理',
                perm3: 'ナレッジベースの更新',
                perm4: 'コミュニティの管理'
            },
            volunteer: {
                name: 'ボランティア',
                fullName: 'ボランティア会員',
                desc: '一般メンバー',
                perm1: '助け合い依頼の投稿',
                perm2: 'イベントへの参加登録',
                perm3: 'コミュニティへの参加',
                perm4: 'ナレッジベースの閲覧'
            }
        },

        // Dashboard
        dashboard: {
            welcome: 'こんにちは',
            roleWelcome: {
                reijikai: '委員会メンバーダッシュボード',
                shokuin: '管理スタッフダッシュボード',
                volunteer: 'ボランティアダッシュボード'
            },
            roleDesc: {
                reijikai: '提案の作成、投票結果の確認、重要な決定を行うことができます',
                shokuin: 'コンテンツの管理、イベントの作成、メンバーのサポートを行えます',
                volunteer: 'コミュニティへの参加、イベント登録、助け合い活動ができます'
            },
            quickActions: 'クイックアクション',
            activeRequests: 'アクティブな依頼',
            upcomingEvents: '今後のイベント',
            activeProposals: 'アクティブな提案',
            pendingContent: '承認待ちコンテンツ',
            helpOffered: '提供した助け',
            newArticles: '新しい記事',
            recentActivity: '最近の活動'
        },

        // Community
        community: {
            title: 'コミュニティ助け合い',
            subtitle: '近隣の会員と助け合いましょう',
            tabs: {
                board: '掲示板',
                myRequests: '自分の投稿',
                profile: 'プロフィール'
            },
            requestTypes: {
                request: '助けを求める',
                offer: '助けを提供する',
                exchange: '交換'
            },
            urgency: {
                normal: '通常',
                soon: '近日中',
                urgent: '急募'
            },
            filter: {
                all: 'すべて',
                requests: '依頼のみ',
                offers: '提供のみ',
                exchanges: '交換のみ'
            },
            createPost: '投稿を作成',
            respond: '返信する',
            viewDetails: '詳細を見る',
            postedBy: '投稿者',
            postedOn: '投稿日',
            viewsCount: '人が閲覧',
            responsesCount: '件の返信',
            noResults: '該当する投稿がありません',
            sendMessage: 'メッセージを送信',
            messagePlaceholder: 'メッセージを入力...',
            messageSent: 'メッセージを送信しました！',
            roleNotice: 'お知らせ',
            roleNoticeText: 'あなたの役割では、コミュニティ機能の閲覧と管理が可能ですが、一般会員とは異なる権限があります。'
        },

        // Profile
        profile: {
            title: 'プロフィール',
            personalInfo: '基本情報',
            displayName: '表示名',
            nickname: 'ニックネーム',
            areaDistrict: 'お住まいのエリア',
            memberSince: '会員登録日',
            servicesOffered: '提供できるサポート',
            servicesNeeded: '必要なサポート',
            availability: '対応可能な時間',
            privacySettings: 'プライバシー設定',
            showRealName: '本名を表示',
            locationPrecision: '位置情報の精度',
            contactMethod: '連絡方法',
            saveProfile: 'プロフィールを保存',
            timeSlots: {
                morning: '午前',
                afternoon: '午後',
                evening: '夜間'
            },
            days: {
                monday: '月曜日',
                tuesday: '火曜日',
                wednesday: '水曜日',
                thursday: '木曜日',
                friday: '金曜日',
                saturday: '土曜日',
                sunday: '日曜日'
            },
            locationOptions: {
                exact: '詳細',
                district: '区のみ',
                hidden: '非表示'
            },
            contactOptions: {
                inapp: 'アプリ内のみ',
                email: 'メールも可',
                phone: '電話も可'
            }
        },

        // News
        news: {
            title: 'ニュース',
            subtitle: '最新の情報をお届けします',
            pinned: '重要',
            publishedOn: '公開日',
            readMore: '続きを読む',
            categories: {
                announcement: 'お知らせ',
                product: '新商品',
                community: 'コミュニティ',
                policy: '方針',
                recipe: 'レシピ'
            }
        },

        // Events
        events: {
            title: 'イベント',
            subtitle: '参加して楽しもう',
            featured: '注目イベント',
            upcoming: '今後のイベント',
            past: '過去のイベント',
            register: '参加登録',
            registered: '登録済み',
            full: '満員',
            spotsLeft: '残り{count}席',
            date: '日時',
            location: '場所',
            fee: '参加費',
            capacity: '定員',
            organizer: '主催',
            categories: {
                festival: 'お祭り',
                workshop: 'ワークショップ',
                meeting: '会議',
                tour: '見学ツアー'
            },
            registrationSuccess: '参加登録が完了しました！',
            restrictedEvent: 'このイベントは委員会メンバー限定です'
        },

        // Knowledge Base
        knowledge: {
            title: '知識倉庫',
            subtitle: 'FAQ、ガイド、レシピなど',
            searchPlaceholder: '検索...',
            categories: {
                faq: 'よくある質問',
                guide: 'ガイド',
                recipe: 'レシピ',
                policy: '規約・方針',
                howto: '使い方'
            },
            helpful: '役に立った',
            notHelpful: '役に立たなかった',
            relatedArticles: '関連記事'
        },

        // Decisions (Reijikai)
        decisions: {
            title: '意思決定・投票システム',
            activeProposals: 'アクティブな提案',
            newProposal: '新しい提案',
            createProposal: '提案を作成',
            proposalTitle: 'タイトル',
            proposalTitlePlaceholder: '提案のタイトルを入力...',
            proposalDescription: '詳細説明',
            proposalDescPlaceholder: '提案の詳細を説明してください...',
            votingDeadline: '投票期限',
            publishProposal: '提案を公開',
            vote: {
                yes: '賛成',
                no: '反対',
                abstain: '棄権'
            },
            deadline: '期限',
            totalVotes: '総投票数',
            votingStats: '投票統計',
            participationRate: '参加率',
            avgResponseTime: '平均応答時間',
            days: '日',
            recentActivity: '最近の活動',
            newVotes: '件の新しい投票',
            commentsToday: '件の本日のコメント',
            proposalClosed: '件の提案が終了',
            categories: {
                policy: '方針・ポリシー',
                budget: '予算',
                event: 'イベント',
                other: 'その他'
            },
            status: {
                active: 'アクティブ',
                pending: '保留中',
                closed: '終了'
            },
            castVote: '投票する',
            voteCast: '投票しました！',
            alreadyVoted: '既に投票済みです'
        },

        // Content Management (Shokuin)
        content: {
            title: 'コンテンツ管理',
            tabs: {
                news: 'ニュース',
                events: 'イベント',
                knowledge: '知識倉庫'
            },
            publishedNews: '公開されたニュース',
            newPost: '新規投稿',
            publishedOn: '公開日',
            contentStats: 'コンテンツ統計',
            totalPosts: '総投稿数',
            thisMonth: '今月',
            avgViews: '平均閲覧数',
            quickActions: 'クイックアクション',
            scheduledPosts: '予約投稿',
            draftPosts: '下書き',
            analytics: '分析',
            createNews: 'ニュースを作成',
            createEvent: 'イベントを作成',
            editArticle: '記事を編集'
        },

        // More Menu
        more: {
            title: 'その他',
            memberInfo: '会員情報',
            lunlunPoints: 'ルンルンポイント',
            points: 'pt',
            help: 'ヘルプ',
            about: 'アプリについて',
            version: 'バージョン'
        },

        // Errors & Messages
        messages: {
            loginRequired: 'ログインが必要です',
            permissionDenied: 'アクセス権限がありません',
            networkError: 'ネットワークエラーが発生しました',
            saveSuccess: '保存しました',
            deleteConfirm: '本当に削除しますか？',
            comingSoon: '近日公開予定'
        }
    },

    en: {
        // Common
        common: {
            appName: 'North Tokyo COOP Hub',
            appNameShort: 'COOP Hub',
            tagline: 'コミュニティ • プライバシー • つながり',
            login: 'Login',
            logout: 'Logout',
            cancel: 'Cancel',
            save: 'Save',
            submit: 'Submit',
            edit: 'Edit',
            delete: 'Delete',
            search: 'Search',
            filter: 'Filter',
            all: 'All',
            viewAll: 'View All',
            viewMore: 'View More',
            close: 'Close',
            back: 'Back',
            next: 'Next',
            loading: 'Loading...',
            error: 'An error occurred',
            success: 'Success',
            memberNumber: 'Member #',
            area: 'Area',
            date: 'Date',
            time: 'Time',
            category: 'Category',
            status: 'Status',
            views: 'views',
            responses: 'responses',
            yes: 'Yes',
            no: 'No',
            free: 'Free'
        },

        // Navigation
        nav: {
            home: 'Home',
            news: 'News',
            community: 'Community',
            events: 'Events',
            more: 'More',
            knowledge: 'Knowledge Base',
            profile: 'Profile',
            shop: 'Shop',
            settings: 'Settings',
            decisions: 'Decisions',
            contentManagement: 'Content'
        },

        // Login Page
        login: {
            title: 'North Tokyo COOP',
            subtitle: 'Community Platform',
            selectRole: 'Select Your Role',
            selectRoleDesc: 'Choose the role you want to experience for this demo',
            scanQR: 'Scan QR Code',
            scanQRDesc: 'Scan your member card QR code to login',
            permissions: 'Permissions Preview',
            demoButton: 'Login as Demo',
            privacyTitle: 'Privacy First:',
            privacyText: 'Your information is securely protected',
            simulatedQR: 'Simulated QR Scan',
            scanning: 'Scanning...'
        },

        // Roles
        roles: {
            reijikai: {
                name: 'Committee',
                fullName: 'Committee Member',
                desc: 'Decision Makers',
                perm1: 'Create & manage proposals',
                perm2: 'View voting results',
                perm3: 'Post announcements',
                perm4: 'View all content'
            },
            shokuin: {
                name: 'Admin',
                fullName: 'Admin Staff',
                desc: 'Content Managers',
                perm1: 'Post & edit news',
                perm2: 'Create & manage events',
                perm3: 'Update knowledge base',
                perm4: 'Moderate community'
            },
            volunteer: {
                name: 'Volunteer',
                fullName: 'Volunteer Member',
                desc: 'General Members',
                perm1: 'Post help requests',
                perm2: 'Register for events',
                perm3: 'Participate in community',
                perm4: 'View knowledge base'
            }
        },

        // Dashboard
        dashboard: {
            welcome: 'Welcome',
            roleWelcome: {
                reijikai: 'Committee Member Dashboard',
                shokuin: 'Administrative Staff Dashboard',
                volunteer: 'Volunteer Dashboard'
            },
            roleDesc: {
                reijikai: 'Create proposals, review voting results, and make important decisions',
                shokuin: 'Manage content, create events, and support members',
                volunteer: 'Participate in community, register for events, and help others'
            },
            quickActions: 'Quick Actions',
            activeRequests: 'Active Requests',
            upcomingEvents: 'Upcoming Events',
            activeProposals: 'Active Proposals',
            pendingContent: 'Pending Content',
            helpOffered: 'Help Offered',
            newArticles: 'New Articles',
            recentActivity: 'Recent Activity'
        },

        // Community
        community: {
            title: 'Community Support',
            subtitle: 'Help and be helped by neighbors',
            tabs: {
                board: 'Board',
                myRequests: 'My Posts',
                profile: 'Profile'
            },
            requestTypes: {
                request: 'Request Help',
                offer: 'Offer Help',
                exchange: 'Exchange'
            },
            urgency: {
                normal: 'Normal',
                soon: 'Soon',
                urgent: 'Urgent'
            },
            filter: {
                all: 'All',
                requests: 'Requests Only',
                offers: 'Offers Only',
                exchanges: 'Exchanges Only'
            },
            createPost: 'Create Post',
            respond: 'Respond',
            viewDetails: 'View Details',
            postedBy: 'Posted by',
            postedOn: 'Posted on',
            viewsCount: 'views',
            responsesCount: 'responses',
            noResults: 'No matching posts found',
            sendMessage: 'Send Message',
            messagePlaceholder: 'Enter your message...',
            messageSent: 'Message sent!',
            roleNotice: 'Notice',
            roleNoticeText: 'Your role allows viewing and managing community features, but with different permissions than regular members.'
        },

        // Profile
        profile: {
            title: 'Profile',
            personalInfo: 'Personal Information',
            displayName: 'Display Name',
            nickname: 'Nickname',
            areaDistrict: 'Area/District',
            memberSince: 'Member Since',
            servicesOffered: 'Services Offered',
            servicesNeeded: 'Services Needed',
            availability: 'Availability',
            privacySettings: 'Privacy Settings',
            showRealName: 'Show Real Name',
            locationPrecision: 'Location Precision',
            contactMethod: 'Contact Method',
            saveProfile: 'Save Profile',
            timeSlots: {
                morning: 'Morning',
                afternoon: 'Afternoon',
                evening: 'Evening'
            },
            days: {
                monday: 'Monday',
                tuesday: 'Tuesday',
                wednesday: 'Wednesday',
                thursday: 'Thursday',
                friday: 'Friday',
                saturday: 'Saturday',
                sunday: 'Sunday'
            },
            locationOptions: {
                exact: 'Exact',
                district: 'District Only',
                hidden: 'Hidden'
            },
            contactOptions: {
                inapp: 'In-app Only',
                email: 'Email OK',
                phone: 'Phone OK'
            }
        },

        // News
        news: {
            title: 'News',
            subtitle: 'Latest updates and information',
            pinned: 'Pinned',
            publishedOn: 'Published',
            readMore: 'Read More',
            categories: {
                announcement: 'Announcement',
                product: 'New Products',
                community: 'Community',
                policy: 'Policy',
                recipe: 'Recipe'
            }
        },

        // Events
        events: {
            title: 'Events',
            subtitle: 'Join and participate',
            featured: 'Featured Events',
            upcoming: 'Upcoming Events',
            past: 'Past Events',
            register: 'Register',
            registered: 'Registered',
            full: 'Full',
            spotsLeft: '{count} spots left',
            date: 'Date & Time',
            location: 'Location',
            fee: 'Fee',
            capacity: 'Capacity',
            organizer: 'Organizer',
            categories: {
                festival: 'Festival',
                workshop: 'Workshop',
                meeting: 'Meeting',
                tour: 'Tour'
            },
            registrationSuccess: 'Registration complete!',
            restrictedEvent: 'This event is for committee members only'
        },

        // Knowledge Base
        knowledge: {
            title: 'Knowledge Base',
            subtitle: 'FAQs, guides, recipes, and more',
            searchPlaceholder: 'Search...',
            categories: {
                faq: 'FAQ',
                guide: 'Guides',
                recipe: 'Recipes',
                policy: 'Policies',
                howto: 'How-to'
            },
            helpful: 'Helpful',
            notHelpful: 'Not Helpful',
            relatedArticles: 'Related Articles'
        },

        // Decisions (Reijikai)
        decisions: {
            title: 'Decision Making & Voting',
            activeProposals: 'Active Proposals',
            newProposal: 'New Proposal',
            createProposal: 'Create Proposal',
            proposalTitle: 'Title',
            proposalTitlePlaceholder: 'Enter proposal title...',
            proposalDescription: 'Description',
            proposalDescPlaceholder: 'Explain your proposal in detail...',
            votingDeadline: 'Voting Deadline',
            publishProposal: 'Publish Proposal',
            vote: {
                yes: 'Yes',
                no: 'No',
                abstain: 'Abstain'
            },
            deadline: 'Deadline',
            totalVotes: 'Total votes',
            votingStats: 'Voting Statistics',
            participationRate: 'Participation Rate',
            avgResponseTime: 'Avg. Response Time',
            days: ' days',
            recentActivity: 'Recent Activity',
            newVotes: 'new votes',
            commentsToday: 'comments today',
            proposalClosed: 'proposal closed',
            categories: {
                policy: 'Policy',
                budget: 'Budget',
                event: 'Event',
                other: 'Other'
            },
            status: {
                active: 'Active',
                pending: 'Pending',
                closed: 'Closed'
            },
            castVote: 'Cast Vote',
            voteCast: 'Vote recorded!',
            alreadyVoted: 'You have already voted'
        },

        // Content Management (Shokuin)
        content: {
            title: 'Content Management',
            tabs: {
                news: 'News',
                events: 'Events',
                knowledge: 'Knowledge'
            },
            publishedNews: 'Published News',
            newPost: 'New Post',
            publishedOn: 'Published',
            contentStats: 'Content Statistics',
            totalPosts: 'Total Posts',
            thisMonth: 'This Month',
            avgViews: 'Avg. Views',
            quickActions: 'Quick Actions',
            scheduledPosts: 'Scheduled Posts',
            draftPosts: 'Drafts',
            analytics: 'Analytics',
            createNews: 'Create News',
            createEvent: 'Create Event',
            editArticle: 'Edit Article'
        },

        // More Menu
        more: {
            title: 'More',
            memberInfo: 'Member Info',
            lunlunPoints: 'Lunlun Points',
            points: 'pt',
            help: 'Help',
            about: 'About',
            version: 'Version'
        },

        // Errors & Messages
        messages: {
            loginRequired: 'Login required',
            permissionDenied: 'Permission denied',
            networkError: 'Network error occurred',
            saveSuccess: 'Saved successfully',
            deleteConfirm: 'Are you sure you want to delete?',
            comingSoon: 'Coming Soon'
        }
    }
};

// Helper function to get translations
function t(key, lang = 'ja') {
    const keys = key.split('.');
    let value = i18n[lang];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Fallback to Japanese if English key not found
            value = i18n['ja'];
            for (const k2 of keys) {
                if (value && value[k2] !== undefined) {
                    value = value[k2];
                } else {
                    return key; // Return key if not found
                }
            }
            break;
        }
    }
    
    return value;
}

// Make i18n globally available
if (typeof window !== 'undefined') {
    window.i18n = i18n;
    window.t = t;
}