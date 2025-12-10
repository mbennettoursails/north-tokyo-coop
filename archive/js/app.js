/**
 * North Tokyo COOP Hub - Main Application
 * Vanilla JavaScript application logic
 */

(function() {
  'use strict';

  // ============================================
  // Application State
  // ============================================
  const App = {
    state: {
      isLoggedIn: false,
      currentRole: null,
      currentLang: 'ja',
      currentPage: 'dashboard'
    },

    // DOM element cache
    elements: {},

    // ============================================
    // Initialization
    // ============================================
    init: function() {
      this.cacheElements();
      this.bindEvents();
      this.renderContent();
      
      // Check for saved language preference
      const savedLang = localStorage.getItem('coop-lang');
      if (savedLang) {
        this.state.currentLang = savedLang;
        this.updateLanguageToggle();
        this.updateAllText();
      }
      
      // Restore session from localStorage
      const savedSession = localStorage.getItem('coop-session');
      if (savedSession) {
        try {
          const session = JSON.parse(savedSession);
          if (session.role) {
            this.state.currentRole = session.role;
            this.state.isLoggedIn = true;
            
            // Add classes to body
            document.body.classList.add('logged-in');
            document.body.classList.add('role-' + session.role);
            
            // Update user display
            this.updateUserDisplay();
          }
        } catch (e) {
          console.error('[App] Failed to restore session:', e);
          localStorage.removeItem('coop-session');
        }
      }
    },

    // Cache frequently used DOM elements
    cacheElements: function() {
      this.elements = {
        // Login elements
        loginBtn: document.getElementById('loginBtn'),
        roleBtns: document.querySelectorAll('.role-btn'),
        
        // Navigation
        navItems: document.querySelectorAll('.bottom-nav-item'),
        moreBtn: document.getElementById('moreBtn'),
        
        // More Menu
        moreOverlay: document.getElementById('moreOverlay'),
        moreDrawer: document.getElementById('moreDrawer'),
        
        // Language
        langToggle: document.getElementById('langToggle'),
        langJa: document.getElementById('langJa'),
        langEn: document.getElementById('langEn'),
        
        // Content containers
        newsContainer: document.getElementById('newsContainer'),
        eventsContainer: document.getElementById('eventsContainer'),
        
        // User display elements
        userAvatar: document.getElementById('userAvatar'),
        userName: document.getElementById('userName'),
        userRoleBadge: document.getElementById('userRoleBadge'),
        profileAvatar: document.getElementById('profileAvatar'),
        profileName: document.getElementById('profileName'),
        profileRoleBadge: document.getElementById('profileRoleBadge'),
        drawerAvatar: document.getElementById('drawerAvatar'),
        drawerName: document.getElementById('drawerName'),
        drawerRoleBadge: document.getElementById('drawerRoleBadge')
      };
    },

    // ============================================
    // Event Binding
    // ============================================
    bindEvents: function() {
      // Role selection
      this.elements.roleBtns.forEach(btn => {
        btn.addEventListener('click', () => this.selectRole(btn.dataset.role));
      });

      // Login button
      if (this.elements.loginBtn) {
        this.elements.loginBtn.addEventListener('click', () => this.login());
      }

      // Navigation items
      this.elements.navItems.forEach(item => {
        if (item.dataset.page) {
          item.addEventListener('click', () => this.navigateTo(item.dataset.page));
        }
      });

      // More button
      if (this.elements.moreBtn) {
        this.elements.moreBtn.addEventListener('click', () => this.openMoreMenu());
      }

      // More overlay (close on click)
      if (this.elements.moreOverlay) {
        this.elements.moreOverlay.addEventListener('click', () => this.closeMoreMenu());
      }

      // Language toggle
      if (this.elements.langToggle) {
        this.elements.langToggle.addEventListener('click', () => this.toggleLanguage());
      }

      // Menu items in drawer
      document.querySelectorAll('.menu-item[data-page]').forEach(item => {
        item.addEventListener('click', () => this.navigateFromMenu(item.dataset.page));
      });

      // Logout button
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => this.logout());
      }

      // Quick actions
      document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => this.navigateTo(btn.dataset.action));
      });
    },

    // Time-based greeting
    getTimeGreeting() {
        const hour = new Date().getHours();
        if (this.language === 'ja') {
            if (hour < 12) return 'おはようございます';
            if (hour < 18) return 'こんにちは';
            return 'こんばんは';
        } else {
            if (hour < 12) return 'Good morning';
            if (hour < 18) return 'Good afternoon';
            return 'Good evening';
        }
    },

    // Notification count (customize based on your data)
    getNotificationCount() {
        // Return count of items needing attention
        return 3; // Example value
    },

    // ============================================
    // Role Selection & Login
    // ============================================
    selectRole: function(role) {
      this.state.currentRole = role;
      
      // Update UI
      this.elements.roleBtns.forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.role === role);
      });
      
      // Enable login button
      if (this.elements.loginBtn) {
        this.elements.loginBtn.classList.add('active');
      }
    },

    login: function() {
      if (!this.state.currentRole) return;
      
      this.state.isLoggedIn = true;
      
      // Store session in localStorage for other components (e.g., decisions.js)
      const session = {
        role: this.state.currentRole,
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem('coop-session', JSON.stringify(session));
      
      // Add classes to body
      document.body.classList.add('logged-in');
      document.body.classList.remove('role-reijikai', 'role-shokuin', 'role-volunteer');
      document.body.classList.add('role-' + this.state.currentRole);
      
      // Update user display
      this.updateUserDisplay();
      
      // Navigate to dashboard
      this.navigateTo('dashboard');
    },

    logout: function() {
      this.closeMoreMenu();
      
      this.state.isLoggedIn = false;
      this.state.currentRole = null;
      
      // Remove session from localStorage
      localStorage.removeItem('coop-session');
      
      // Remove classes from body
      document.body.classList.remove('logged-in', 'role-reijikai', 'role-shokuin', 'role-volunteer');
      
      // Reset role selection
      this.elements.roleBtns.forEach(btn => btn.classList.remove('selected'));
      if (this.elements.loginBtn) {
        this.elements.loginBtn.classList.remove('active');
      }
      
      // Reset to dashboard
      this.navigateTo('dashboard');
    },

    // ============================================
    // Navigation
    // ============================================
    navigateTo: function(page) {
      this.state.currentPage = page;
      
      // Update page visibility
      document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === 'page-' + page);
      });
      
      // Update nav active state
      this.elements.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
      });
      
      // Highlight "More" button if on a more-menu page
      const morePages = ['knowledge', 'profile', 'decisions', 'admin'];
      if (this.elements.moreBtn) {
        this.elements.moreBtn.classList.toggle('active', morePages.includes(page));
      }
    },

    navigateFromMenu: function(page) {
      this.closeMoreMenu();
      this.navigateTo(page);
    },

    // ============================================
    // More Menu
    // ============================================
    openMoreMenu: function() {
      if (this.elements.moreOverlay) {
        this.elements.moreOverlay.classList.add('open');
      }
      if (this.elements.moreDrawer) {
        this.elements.moreDrawer.classList.add('open');
      }
    },

    closeMoreMenu: function() {
      if (this.elements.moreOverlay) {
        this.elements.moreOverlay.classList.remove('open');
      }
      if (this.elements.moreDrawer) {
        this.elements.moreDrawer.classList.remove('open');
      }
    },

    // ============================================
    // Language
    // ============================================
    toggleLanguage: function() {
      this.state.currentLang = this.state.currentLang === 'ja' ? 'en' : 'ja';
      
      // Save preference
      localStorage.setItem('coop-lang', this.state.currentLang);
      
      // Update toggle UI
      this.updateLanguageToggle();
      
      // Update all text
      this.updateAllText();
      
      // Re-render dynamic content
      this.renderContent();
      
      // Update user display if logged in
      if (this.state.isLoggedIn) {
        this.updateUserDisplay();
      }
    },

    updateLanguageToggle: function() {
      const isEn = this.state.currentLang === 'en';
      
      if (this.elements.langToggle) {
        this.elements.langToggle.classList.toggle('en', isEn);
      }
      if (this.elements.langJa) {
        this.elements.langJa.classList.toggle('active', !isEn);
      }
      if (this.elements.langEn) {
        this.elements.langEn.classList.toggle('active', isEn);
      }
    },

    updateAllText: function() {
      const lang = this.state.currentLang;
      
      // Update all elements with data-ja/data-en attributes
      document.querySelectorAll('[data-ja]').forEach(el => {
        if (el.dataset[lang]) {
          el.textContent = el.dataset[lang];
        }
      });
    },

    // ============================================
    // User Display
    // ============================================
    updateUserDisplay: function() {
      const role = this.state.currentRole;
      const lang = this.state.currentLang;
      
      if (!role || !window.CoopData) return;
      
      const user = CoopData.users[role];
      const avatar = user.avatar;
      const name = lang === 'ja' ? user.name : user.nameEn;
      const badge = window.i18n ? i18n[lang].roles[role].badge : role;
      
      // Update all avatar elements
      if (this.elements.userAvatar) this.elements.userAvatar.textContent = avatar;
      if (this.elements.profileAvatar) this.elements.profileAvatar.textContent = avatar;
      if (this.elements.drawerAvatar) this.elements.drawerAvatar.textContent = avatar;
      
      // Update all name elements
      if (this.elements.userName) this.elements.userName.textContent = name;
      if (this.elements.profileName) this.elements.profileName.textContent = name;
      if (this.elements.drawerName) this.elements.drawerName.textContent = name;
      
      // Update all badge elements
      const badges = [
        this.elements.userRoleBadge,
        this.elements.profileRoleBadge,
        this.elements.drawerRoleBadge
      ];
      
      badges.forEach(el => {
        if (el) {
          el.textContent = badge;
          el.className = 'badge badge-' + role;
        }
      });
    },

    

    // ============================================
    // Content Rendering
    // ============================================
    renderContent: function() {
      this.renderNews();
      this.renderEvents();
    },

    renderNews: function() {
      const container = this.elements.newsContainer;
      if (!container || !window.CoopData) return;
      
      const news = CoopData.news[this.state.currentLang];
      
      container.innerHTML = news.map(item => `
        <div class="news-item">
          <span class="news-category">${item.category}</span>
          <h3 class="news-title">${item.title}</h3>
          <p class="news-excerpt">${item.excerpt}</p>
          <p class="news-date">${item.date}</p>
        </div>
      `).join('');
    },

    renderEvents: function() {
      const container = this.elements.eventsContainer;
      if (!container || !window.CoopData) return;
      
      const events = CoopData.events[this.state.currentLang];
      
      container.innerHTML = events.map(event => `
        <div class="event-item">
          <div class="event-date-box">
            <div class="event-month">${event.month}</div>
            <div class="event-day">${event.day}</div>
          </div>
          <div class="event-info">
            <h4>${event.title}</h4>
            <p>${event.location}</p>
          </div>
        </div>
      `).join('');
    }
  };

  // ============================================
  // Global API (for onclick handlers in HTML)
  // ============================================
  window.CoopApp = {
    selectRole: (role) => App.selectRole(role),
    login: () => App.login(),
    logout: () => App.logout(),
    navigateTo: (page) => App.navigateTo(page),
    navigateFromMenu: (page) => App.navigateFromMenu(page),
    openMoreMenu: () => App.openMoreMenu(),
    closeMoreMenu: () => App.closeMoreMenu(),
    toggleLanguage: () => App.toggleLanguage()
  };

  // ============================================
  // Initialize on DOM ready
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }

})();