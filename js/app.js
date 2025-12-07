/**
 * North Tokyo COOP Hub - Main Application
 * Alpine.js Application Logic
 */

document.addEventListener('alpine:init', () => {
    Alpine.data('coopApp', () => ({
        // ============================================
        // STATE
        // ============================================
        
        // Authentication
        isLoggedIn: false,
        selectedRole: null,
        userRole: null,
        user: null,
        
        // Navigation
        currentView: 'login',
        previousView: null,
        
        // Language
        language: 'ja',
        
        // UI State
        showMobileMenu: false,
        showMoreMenu: false,
        showQRScanner: false,
        isScanning: false,
        
        // Community
        communityTab: 'board',
        communityFilter: 'all',
        showRequestForm: false,
        showRequestDetail: null,
        showMessageModal: false,
        
        // News
        selectedNewsArticle: null,
        
        // Events
        selectedEvent: null,
        showEventRegistration: false,
        
        // Knowledge
        knowledgeCategory: 'all',
        knowledgeSearch: '',
        selectedArticle: null,
        
        // Decisions (Reijikai)
        showProposalForm: false,
        selectedProposal: null,
        showVoteModal: false,
        
        // Content Management (Shokuin)
        contentTab: 'news',
        showContentForm: false,
        
        // Profile
        editingProfile: false,
        
        // ============================================
        // INITIALIZATION
        // ============================================
        
        init() {
            // Load language preference
            const savedLang = localStorage.getItem('coop-language');
            if (savedLang) {
                this.language = savedLang;
            }
            
            // Check for saved session (demo purposes)
            const savedSession = localStorage.getItem('coop-session');
            if (savedSession) {
                try {
                    const session = JSON.parse(savedSession);
                    this.userRole = session.role;
                    this.user = CoopData.users[session.role];
                    this.isLoggedIn = true;
                    this.currentView = 'dashboard';
                } catch (e) {
                    localStorage.removeItem('coop-session');
                }
            }
        },
        
        // ============================================
        // COMPUTED PROPERTIES (via methods)
        // ============================================
        
        get t() {
            return i18n[this.language];
        },
        
        getText(key) {
            const keys = key.split('.');
            let value = i18n[this.language];
            for (const k of keys) {
                if (value && value[k] !== undefined) {
                    value = value[k];
                } else {
                    return key;
                }
            }
            return value;
        },
        
        // ============================================
        // AUTHENTICATION
        // ============================================
        
        startQRScan() {
            this.showQRScanner = true;
            this.isScanning = true;
            
            // Simulate QR scan delay
            setTimeout(() => {
                this.isScanning = false;
            }, 2000);
        },
        
        selectRoleFromQR(role) {
            this.selectedRole = role;
            this.showQRScanner = false;
        },
        
        login() {
            if (!this.selectedRole) return;
            
            this.userRole = this.selectedRole;
            this.user = { ...CoopData.users[this.selectedRole] };
            this.isLoggedIn = true;
            this.currentView = 'dashboard';
            
            // Save session (demo purposes)
            localStorage.setItem('coop-session', JSON.stringify({
                role: this.selectedRole
            }));
        },
        
        logout() {
            this.isLoggedIn = false;
            this.userRole = null;
            this.user = null;
            this.selectedRole = null;
            this.currentView = 'login';
            this.showMoreMenu = false;
            
            localStorage.removeItem('coop-session');
        },
        
        // ============================================
        // NAVIGATION
        // ============================================
        
        navigate(view) {
            this.previousView = this.currentView;
            this.currentView = view;
            this.showMoreMenu = false;
            this.showMobileMenu = false;
            
            // Reset sub-states
            this.selectedNewsArticle = null;
            this.selectedEvent = null;
            this.selectedArticle = null;
            this.selectedProposal = null;
            this.showRequestDetail = null;
        },
        
        goBack() {
            if (this.previousView) {
                this.currentView = this.previousView;
                this.previousView = null;
            }
        },
        
        // ============================================
        // LANGUAGE
        // ============================================
        
        toggleLanguage() {
            this.language = this.language === 'ja' ? 'en' : 'ja';
            localStorage.setItem('coop-language', this.language);
        },
        
        setLanguage(lang) {
            this.language = lang;
            localStorage.setItem('coop-language', lang);
        },
        
        // ============================================
        // ROLE HELPERS
        // ============================================
        
        getRoleName() {
            if (!this.userRole) return '';
            return this.t.roles[this.userRole].name;
        },
        
        getRoleFullName() {
            if (!this.userRole) return '';
            return this.t.roles[this.userRole].fullName;
        },
        
        getRoleWelcome() {
            if (!this.userRole) return '';
            return this.t.dashboard.roleWelcome[this.userRole];
        },
        
        getRoleDescription() {
            if (!this.userRole) return '';
            return this.t.dashboard.roleDesc[this.userRole];
        },
        
        getRoleBadgeClass() {
            const classes = {
                reijikai: 'bg-purple-100 text-purple-800 border-purple-300',
                shokuin: 'bg-blue-100 text-blue-800 border-blue-300',
                volunteer: 'bg-green-100 text-green-800 border-green-300'
            };
            return classes[this.userRole] || '';
        },
        
        hasPermission(permission) {
            const permissions = {
                reijikai: ['decisions', 'proposals', 'voting', 'announcements', 'content', 'community', 'events', 'knowledge'],
                shokuin: ['content', 'news', 'events', 'knowledge', 'moderation', 'community'],
                volunteer: ['community', 'events', 'knowledge', 'profile']
            };
            return permissions[this.userRole]?.includes(permission) || false;
        },
        
        // ============================================
        // USER DATA HELPERS
        // ============================================
        
        getUserName() {
            if (!this.user) return '';
            return this.language === 'en' && this.user.nameEn ? this.user.nameEn : this.user.name;
        },
        
        getUserDisplayName() {
            if (!this.user) return '';
            if (this.user.privacy?.showRealName === false) {
                return this.user.nickname;
            }
            return this.getUserName();
        },
        
        getUserArea() {
            if (!this.user) return '';
            return this.language === 'en' && this.user.areaEn ? this.user.areaEn : this.user.area;
        },
        
        // ============================================
        // DATA GETTERS
        // ============================================
        
        getServiceCategory(id) {
            const cat = CoopData.serviceCategories.find(c => c.id === id);
            if (!cat) return null;
            return {
                ...cat,
                displayName: this.language === 'en' ? cat.nameEn : cat.name
            };
        },
        
        getArea(id) {
            const area = CoopData.areas.find(a => a.id === id);
            if (!area) return null;
            return {
                ...area,
                displayName: this.language === 'en' ? area.nameEn : area.name
            };
        },
        
        // Community Requests
        getCommunityRequests() {
            let requests = [...CoopData.communityRequests];
            
            // Apply filter
            if (this.communityFilter !== 'all') {
                const filterMap = {
                    requests: 'request',
                    offers: 'offer',
                    exchanges: 'exchange'
                };
                requests = requests.filter(r => r.type === filterMap[this.communityFilter]);
            }
            
            // Sort by date (newest first)
            requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            
            return requests.map(r => ({
                ...r,
                displayTitle: this.language === 'en' ? r.titleEn : r.title,
                displayDescription: this.language === 'en' ? r.descriptionEn : r.description,
                displayArea: this.language === 'en' ? r.areaEn : r.area,
                categoryInfo: this.getServiceCategory(r.category)
            }));
        },
        
        // News
        getNewsArticles() {
            return CoopData.newsArticles.map(n => ({
                ...n,
                displayTitle: this.language === 'en' ? n.titleEn : n.title,
                displayExcerpt: this.language === 'en' ? n.excerptEn : n.excerpt,
                displayContent: this.language === 'en' ? n.contentEn : n.content,
                displayCategory: this.language === 'en' ? n.categoryNameEn : n.categoryName,
                displayAuthor: this.language === 'en' ? n.authorEn : n.author
            }));
        },
        
        getPinnedNews() {
            return this.getNewsArticles().filter(n => n.pinned);
        },
        
        getRegularNews() {
            return this.getNewsArticles().filter(n => !n.pinned);
        },
        
        // Events
        getEvents() {
            return CoopData.events.map(e => ({
                ...e,
                displayTitle: this.language === 'en' ? e.titleEn : e.title,
                displayDescription: this.language === 'en' ? e.descriptionEn : e.description,
                displayLocation: this.language === 'en' ? e.locationEn : e.location,
                displayArea: this.language === 'en' ? e.areaEn : e.area,
                displayCategory: this.language === 'en' ? e.categoryNameEn : e.categoryName,
                displayOrganizer: this.language === 'en' ? e.organizerEn : e.organizer,
                spotsRemaining: e.capacity - e.registered,
                isFull: e.registered >= e.capacity,
                canRegister: !e.roleRestricted || e.roleRestricted === this.userRole
            }));
        },
        
        getFeaturedEvents() {
            return this.getEvents().filter(e => e.featured);
        },
        
        getUpcomingEvents() {
            const today = new Date().toISOString().split('T')[0];
            return this.getEvents()
                .filter(e => e.date >= today)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        
        // Knowledge Base
        getKnowledgeArticles() {
            let articles = CoopData.knowledgeArticles.map(a => ({
                ...a,
                displayTitle: this.language === 'en' ? a.titleEn : a.title,
                displayContent: this.language === 'en' ? a.contentEn : a.content,
                categoryInfo: CoopData.knowledgeCategories.find(c => c.id === a.category)
            }));
            
            // Filter by category
            if (this.knowledgeCategory !== 'all') {
                articles = articles.filter(a => a.category === this.knowledgeCategory);
            }
            
            // Filter by search
            if (this.knowledgeSearch) {
                const search = this.knowledgeSearch.toLowerCase();
                articles = articles.filter(a => 
                    a.displayTitle.toLowerCase().includes(search) ||
                    a.displayContent.toLowerCase().includes(search)
                );
            }
            
            return articles;
        },
        
        // Proposals (Reijikai)
        getProposals() {
            return CoopData.proposals.map(p => ({
                ...p,
                displayTitle: this.language === 'en' ? p.titleEn : p.title,
                displayDescription: this.language === 'en' ? p.descriptionEn : p.description,
                displayStatus: this.language === 'en' ? p.statusNameEn : p.statusName,
                displayCategory: this.language === 'en' ? p.categoryNameEn : p.categoryName,
                displayCreatedBy: this.language === 'en' ? p.createdByEn : p.createdBy,
                totalVotes: p.votes.yes + p.votes.no + p.votes.abstain,
                participationRate: Math.round(((p.votes.yes + p.votes.no + p.votes.abstain) / p.totalEligible) * 100)
            }));
        },
        
        getActiveProposals() {
            return this.getProposals().filter(p => p.status === 'active');
        },
        
        // ============================================
        // ACTIONS
        // ============================================
        
        // Community
        openRequestDetail(request) {
            this.showRequestDetail = request;
        },
        
        closeRequestDetail() {
            this.showRequestDetail = null;
        },
        
        openMessageModal() {
            this.showMessageModal = true;
        },
        
        sendMessage() {
            // Simulate sending message
            this.showMessageModal = false;
            this.showRequestDetail = null;
            
            // Show success (in real app, use toast notification)
            alert(this.t.community.messageSent);
        },
        
        // News
        openNewsArticle(article) {
            this.selectedNewsArticle = article;
        },
        
        closeNewsArticle() {
            this.selectedNewsArticle = null;
        },
        
        // Events
        openEventDetail(event) {
            this.selectedEvent = event;
        },
        
        closeEventDetail() {
            this.selectedEvent = null;
        },
        
        registerForEvent(event) {
            if (event.isFull) return;
            if (event.roleRestricted && event.roleRestricted !== this.userRole) {
                alert(this.t.events.restrictedEvent);
                return;
            }
            
            // Simulate registration
            alert(this.t.events.registrationSuccess);
            this.selectedEvent = null;
        },
        
        // Knowledge
        openKnowledgeArticle(article) {
            this.selectedArticle = article;
        },
        
        closeKnowledgeArticle() {
            this.selectedArticle = null;
        },
        
        // Decisions
        openProposalDetail(proposal) {
            this.selectedProposal = proposal;
        },
        
        closeProposalDetail() {
            this.selectedProposal = null;
            this.showVoteModal = false;
        },
        
        castVote(vote) {
            // Simulate voting
            alert(this.t.decisions.voteCast);
            this.showVoteModal = false;
            this.selectedProposal = null;
        },
        
        // Profile
        saveProfile() {
            // Simulate saving
            this.editingProfile = false;
            alert(this.t.messages.saveSuccess);
        },
        
        // ============================================
        // UTILITY METHODS
        // ============================================
        
        formatDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            
            if (this.language === 'ja') {
                return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            } else {
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            }
        },
        
        formatShortDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            
            if (this.language === 'ja') {
                return `${date.getMonth() + 1}月${date.getDate()}日`;
            } else {
                return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
            }
        },
        
        formatTime(timeStr) {
            return timeStr || '';
        },
        
        formatTimeAgo(dateStr) {
            const date = new Date(dateStr);
            const now = new Date();
            const diff = now - date;
            
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(diff / 3600000);
            const days = Math.floor(diff / 86400000);
            
            if (this.language === 'ja') {
                if (minutes < 60) return `${minutes}分前`;
                if (hours < 24) return `${hours}時間前`;
                return `${days}日前`;
            } else {
                if (minutes < 60) return `${minutes}m ago`;
                if (hours < 24) return `${hours}h ago`;
                return `${days}d ago`;
            }
        },
        
        getUrgencyBadgeClass(urgency) {
            const classes = {
                normal: 'bg-gray-100 text-gray-700',
                soon: 'bg-yellow-100 text-yellow-700',
                urgent: 'bg-red-100 text-red-700'
            };
            return classes[urgency] || classes.normal;
        },
        
        getTypeBadgeClass(type) {
            const classes = {
                request: 'bg-blue-100 text-blue-700',
                offer: 'bg-green-100 text-green-700',
                exchange: 'bg-purple-100 text-purple-700'
            };
            return classes[type] || '';
        },
        
        getStatusBadgeClass(status) {
            const classes = {
                active: 'bg-green-100 text-green-700',
                pending: 'bg-yellow-100 text-yellow-700',
                closed: 'bg-gray-100 text-gray-700'
            };
            return classes[status] || '';
        },
        
        getCategoryColor(color) {
            const colors = {
                pink: 'bg-pink-100 text-pink-700 border-pink-200',
                blue: 'bg-blue-100 text-blue-700 border-blue-200',
                green: 'bg-green-100 text-green-700 border-green-200',
                orange: 'bg-orange-100 text-orange-700 border-orange-200',
                yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
                purple: 'bg-purple-100 text-purple-700 border-purple-200',
                amber: 'bg-amber-100 text-amber-700 border-amber-200',
                teal: 'bg-teal-100 text-teal-700 border-teal-200'
            };
            return colors[color] || 'bg-gray-100 text-gray-700 border-gray-200';
        }
    }));
});