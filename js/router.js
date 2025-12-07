/**
 * North Tokyo COOP Hub - Simple SPA Router
 * Handles navigation between pages without full page reloads
 */

const Router = {
    // Configuration
    config: {
        pagesPath: 'pages/',
        defaultPage: 'login',
        contentContainer: '#page-content',
        transitionDuration: 300
    },

    // Current state
    currentPage: null,
    pageCache: {},
    isNavigating: false,

    // Page definitions with metadata
    pages: {
        login: {
            file: 'login.html',
            title: 'ログイン - CO-OP Hub',
            titleEn: 'Login - CO-OP Hub',
            requiresAuth: false,
            hideNav: true
        },
        dashboard: {
            file: 'dashboard.html',
            title: 'ダッシュボード - CO-OP Hub',
            titleEn: 'Dashboard - CO-OP Hub',
            requiresAuth: true,
            navItem: 'home'
        },
        news: {
            file: 'news.html',
            title: 'ニュース - CO-OP Hub',
            titleEn: 'News - CO-OP Hub',
            requiresAuth: true,
            navItem: 'news'
        },
        community: {
            file: 'community.html',
            title: 'コミュニティ - CO-OP Hub',
            titleEn: 'Community - CO-OP Hub',
            requiresAuth: true,
            navItem: 'community'
        },
        events: {
            file: 'events.html',
            title: 'イベント - CO-OP Hub',
            titleEn: 'Events - CO-OP Hub',
            requiresAuth: true,
            navItem: 'events'
        },
        knowledge: {
            file: 'knowledge.html',
            title: '知識倉庫 - CO-OP Hub',
            titleEn: 'Knowledge Base - CO-OP Hub',
            requiresAuth: true,
            navItem: 'more'
        },
        profile: {
            file: 'profile.html',
            title: 'プロフィール - CO-OP Hub',
            titleEn: 'Profile - CO-OP Hub',
            requiresAuth: true,
            navItem: 'more'
        },
        decisions: {
            file: 'decisions.html',
            title: '意思決定 - CO-OP Hub',
            titleEn: 'Decisions - CO-OP Hub',
            requiresAuth: true,
            requiredRole: 'reijikai',
            navItem: 'more'
        },
        admin: {
            file: 'admin.html',
            title: 'コンテンツ管理 - CO-OP Hub',
            titleEn: 'Content Management - CO-OP Hub',
            requiresAuth: true,
            requiredRole: 'shokuin',
            navItem: 'more'
        }
    },

    /**
     * Initialize the router
     */
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.loadPage(event.state.page, false);
            }
        });

        // Handle initial URL
        const initialPage = this.getPageFromURL();
        this.loadPage(initialPage, false);

        console.log('[Router] Initialized');
    },

    /**
     * Get page name from current URL
     */
    getPageFromURL() {
        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(window.location.search);
        const viewParam = params.get('view');
        
        // Check hash first, then query param, then default
        if (hash && this.pages[hash]) {
            return hash;
        }
        if (viewParam && this.pages[viewParam]) {
            return viewParam;
        }
        
        // Check if user is logged in
        const session = localStorage.getItem('coop-session');
        if (session) {
            return 'dashboard';
        }
        
        return this.config.defaultPage;
    },

    /**
     * Navigate to a page
     * @param {string} pageName - Name of the page to navigate to
     * @param {boolean} pushState - Whether to update browser history
     */
    async navigate(pageName, pushState = true) {
        if (this.isNavigating) return;
        if (pageName === this.currentPage) return;

        const pageConfig = this.pages[pageName];
        if (!pageConfig) {
            console.error(`[Router] Page not found: ${pageName}`);
            return;
        }

        // Check authentication
        if (pageConfig.requiresAuth && !this.isAuthenticated()) {
            this.navigate('login', true);
            return;
        }

        // Check role requirements
        if (pageConfig.requiredRole && !this.hasRole(pageConfig.requiredRole)) {
            console.warn(`[Router] Access denied: requires role ${pageConfig.requiredRole}`);
            this.navigate('dashboard', true);
            return;
        }

        await this.loadPage(pageName, pushState);
    },

    /**
     * Load a page
     * @param {string} pageName - Name of the page to load
     * @param {boolean} pushState - Whether to update browser history
     */
    async loadPage(pageName, pushState = true) {
        this.isNavigating = true;
        const pageConfig = this.pages[pageName];
        
        if (!pageConfig) {
            console.error(`[Router] Invalid page: ${pageName}`);
            this.isNavigating = false;
            return;
        }

        const container = document.querySelector(this.config.contentContainer);
        if (!container) {
            console.error('[Router] Content container not found');
            this.isNavigating = false;
            return;
        }

        try {
            // Fade out current content
            container.style.opacity = '0';
            container.style.transform = 'translateY(10px)';
            
            await this.sleep(this.config.transitionDuration / 2);

            // Load page content
            let html = this.pageCache[pageName];
            if (!html) {
                const response = await fetch(`${this.config.pagesPath}${pageConfig.file}`);
                if (!response.ok) {
                    throw new Error(`Failed to load page: ${response.status}`);
                }
                html = await response.text();
                this.pageCache[pageName] = html;
            }

            // Update container
            container.innerHTML = html;

            // Update page title
            const language = localStorage.getItem('coop-language') || 'ja';
            document.title = language === 'en' ? pageConfig.titleEn : pageConfig.title;

            // Update URL
            if (pushState) {
                const url = pageName === 'login' ? '/' : `#${pageName}`;
                history.pushState({ page: pageName }, '', url);
            }

            // Update current page
            this.currentPage = pageName;

            // Dispatch page loaded event
            window.dispatchEvent(new CustomEvent('pageLoaded', {
                detail: { page: pageName, config: pageConfig }
            }));

            // Fade in new content
            await this.sleep(50);
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';

            // Scroll to top
            window.scrollTo(0, 0);

        } catch (error) {
            console.error('[Router] Error loading page:', error);
            container.innerHTML = `
                <div class="p-8 text-center">
                    <p class="text-red-600">Error loading page</p>
                    <button onclick="Router.navigate('dashboard')" class="mt-4 text-coop-600 underline">
                        Go to Dashboard
                    </button>
                </div>
            `;
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }

        this.isNavigating = false;
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return !!localStorage.getItem('coop-session');
    },

    /**
     * Check if user has a specific role
     * @param {string} role - Role to check
     */
    hasRole(role) {
        try {
            const session = JSON.parse(localStorage.getItem('coop-session'));
            return session && session.role === role;
        } catch {
            return false;
        }
    },

    /**
     * Get current user role
     */
    getCurrentRole() {
        try {
            const session = JSON.parse(localStorage.getItem('coop-session'));
            return session?.role || null;
        } catch {
            return null;
        }
    },

    /**
     * Clear page cache
     */
    clearCache() {
        this.pageCache = {};
        console.log('[Router] Cache cleared');
    },

    /**
     * Preload pages
     * @param {string[]} pageNames - Array of page names to preload
     */
    async preloadPages(pageNames) {
        for (const pageName of pageNames) {
            if (this.pages[pageName] && !this.pageCache[pageName]) {
                try {
                    const response = await fetch(`${this.config.pagesPath}${this.pages[pageName].file}`);
                    if (response.ok) {
                        this.pageCache[pageName] = await response.text();
                    }
                } catch (error) {
                    console.warn(`[Router] Failed to preload ${pageName}:`, error);
                }
            }
        }
    },

    /**
     * Helper: Sleep for specified milliseconds
     * @param {number} ms - Milliseconds to sleep
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Get page config
     * @param {string} pageName - Name of the page
     */
    getPageConfig(pageName) {
        return this.pages[pageName] || null;
    },

    /**
     * Check if current page matches
     * @param {string} pageName - Name of the page to check
     */
    isCurrentPage(pageName) {
        return this.currentPage === pageName;
    },

    /**
     * Get active nav item
     */
    getActiveNavItem() {
        const config = this.pages[this.currentPage];
        return config?.navItem || null;
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only init if we're using the router-based architecture
    if (document.querySelector(Router.config.contentContainer)) {
        Router.init();
    }
});

// Make Router globally available
window.Router = Router;