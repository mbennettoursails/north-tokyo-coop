
# North Tokyo COOP Hub - Product Requirements Document (PRD)

## Mobile-First Progressive Web Application POC

**Version:** 1.0  
**Date:** December 2024  
**Status:** Draft for Review

---

## 1. Executive Summary

### 1.1 Project Overview
The North Tokyo COOP Hub is a privacy-first community platform designed to serve 36,000 members of the Seikatsu Club Consumers' Co-operative Union. The platform facilitates member collaboration, mutual aid services, news distribution, event management, and organizational governance.

### 1.2 Key Objectives
- **Primary:** Create an accessible mobile-first application for members with varying digital literacy levels
- **Secondary:** Enable community building and mutual aid coordination (identified as the largest pain point)
- **Tertiary:** Provide a unified platform for news, events, knowledge base, and governance

### 1.3 Target Deployment
Progressive Web Application (PWA) accessible via QR code scan, installable on mobile devices through browser "Add to Home Screen" functionality.

---

## 2. User Personas & Roles

### 2.1 User Role Matrix

| Role | Japanese | Description | Primary Functions |
|------|----------|-------------|-------------------|
| **Reijikai** | 委員会 | Committee Members | Decision-making, proposals, announcements |
| **Shokuin** | 職員 | Administrative Staff | Content management, event creation, moderation |
| **Volunteer** | ボランティア | General Members | Community participation, mutual aid, event registration |

### 2.2 Detailed Permission Matrix

```
Feature                    | Reijikai | Shokuin | Volunteer
---------------------------|----------|---------|----------
Dashboard                  |    ✓     |    ✓    |    ✓
Create Proposals           |    ✓     |    ✗    |    ✗
Vote on Proposals          |    ✓     |    ✗    |    ✗
View Voting Results        |    ✓     |    ✗    |    ✗
Post Announcements         |    ✓     |    ✗    |    ✗
Create/Edit News           |    ✓     |    ✓    |    ✗
Create/Edit Events         |    ✓     |    ✓    |    ✗
Update Knowledge Base      |    ✓     |    ✓    |    ✗
Moderate Community         |    ✓     |    ✓    |    ✗
View News                  |    ✓     |    ✓    |    ✓
Register for Events        |    ✓     |    ✓    |    ✓
Browse Knowledge Base      |    ✓     |    ✓    |    ✓
Post Help Requests         |    ✓     |    ✓    |    ✓
Offer Help                 |    ✓     |    ✓    |    ✓
Build User Profile/Persona |    ✓     |    ✓    |    ✓
```

### 2.3 User Characteristics
- **Age Range:** Diverse, including elderly members
- **Digital Literacy:** Low to moderate (many are "not very digital")
- **Primary Device:** Smartphone
- **Language Preference:** Japanese (primary), English (secondary)

---

## 3. Core Features

### 3.1 Authentication - QR Code Login Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Member Card    │────▶│  Scan QR Code   │────▶│  Verification   │
│  with QR Code   │     │  (Camera/App)   │     │  Screen         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Dashboard      │◀────│  Role Detected  │◀────│  PIN Entry      │
│  (Role-based)   │     │  Auto-redirect  │     │  (Optional)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**POC Implementation:** Simulated QR scan with role selection for demonstration purposes.

### 3.2 Feature Breakdown by Priority

#### Phase 1 - POC Core (Current Scope)
| Priority | Feature | Description |
|----------|---------|-------------|
| P0 | QR Login Simulation | Demo authentication with role selection |
| P0 | Mobile Navigation | Bottom tab bar + hamburger menu |
| P0 | Dashboard | Role-specific overview for ALL THREE personas |
| P0 | News Feed | View news articles |
| P0 | Events Calendar | View and register for events |
| P0 | **Community Mutual Aid** | **Requests/offers board with persona matching** |
| P0 | **User Profile/Persona** | **Full persona builder with services & privacy** |
| P0 | Knowledge Base | Searchable FAQ/guides/recipes |
| P0 | Decision Making | Proposals and voting (Reijikai only) |
| P0 | Content Management | Admin tools (Shokuin only) |

**All three personas fully implemented in Phase 1:**
- ✅ **Reijikai (委員会)** - Full decision-making, proposals, voting, announcements
- ✅ **Shokuin (職員)** - Full content management, event creation, moderation
- ✅ **Volunteer (ボランティア)** - Full community participation, mutual aid, events

#### Phase 2 - Future Enhancements
- Shop integration (link to national federation)
- Lunlun points reward system
- Push notifications
- Offline functionality
- Real QR code authentication

### 3.3 Community Mutual Aid Services (Largest Pain Point - P0)

The community builder feature allows members to:

#### 3.3.1 User Persona Builder
Members create a profile that defines who they are and how they can help/need help.

**Personal Information:**
- Display name (can be nickname for privacy)
- Member number (auto-populated)
- Area/District (練馬区, 豊島区, 板橋区, etc.)
- Preferred contact method

**Services Offered (何ができますか？):**
| Category | Japanese | Icon | Examples |
|----------|----------|------|----------|
| Childcare | 育児サポート | 👶 | Babysitting, school pickup, playdates |
| Transportation | 送迎・ライドシェア | 🚗 | Rides to appointments, airport pickup |
| Shopping | 買い物代行 | 🛒 | Grocery shopping, pharmacy runs |
| Delivery | 配達サポート | 📦 | Package pickup, COOP delivery help |
| Home Help | 家事サポート | 🏠 | Cleaning, cooking, minor repairs |
| Education | 学習支援 | 📚 | Tutoring, homework help, language |
| Pet Care | ペットケア | 🐕 | Dog walking, pet sitting |
| Elder Care | 高齢者支援 | 👴 | Companionship, errands, tech help |

**Services Needed (何が必要ですか？):**
- Same categories as above
- Can specify urgency (regular/occasional/urgent)

**Availability:**
- Weekly schedule grid (Mon-Sun, Morning/Afternoon/Evening)
- Special availability notes
- Vacation/unavailable dates

#### 3.3.2 Community Board Features

**Request Types:**
1. **Help Request (助けを求める)** - Member needs assistance
2. **Help Offer (助けを提供する)** - Member offering assistance
3. **Exchange (交換)** - Looking for mutual exchange

**Request/Offer Card Information:**
```
┌─────────────────────────────────────┐
│ 👶 育児サポート          緊急 🔴    │
├─────────────────────────────────────┤
│ 12月15日（日）午後のベビーシッター  │
│                                     │
│ 練馬区 • 田中さん • 2時間前         │
├─────────────────────────────────────┤
│ 👁 12人が閲覧 • 💬 3件の返信       │
│                    [返信する]       │
└─────────────────────────────────────┘
```

**Filtering & Matching:**
- By service category
- By area/district
- By date needed
- By urgency level
- Smart matching based on persona data

**Privacy Controls (プライバシー設定):**
| Setting | Options | Default |
|---------|---------|---------|
| Profile visibility | All members / Verified only / Hidden | Verified only |
| Show real name | Yes / Nickname only | Nickname only |
| Location precision | Exact / District only / Hidden | District only |
| Contact method | In-app only / Show email / Show phone | In-app only |
| Services visible | Per-service toggle | All visible |

#### 3.3.3 Interaction Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Browse Board │────▶│ View Request │────▶│   Respond    │
│  or Search   │     │   Details    │     │  (In-app)    │
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                                                 ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Complete   │◀────│  Coordinate  │◀────│   Match!     │
│   & Review   │     │   Details    │     │  Notified    │
└──────────────┘     └──────────────┘     └──────────────┘
```

**POC Simulation:**
- All interactions simulated with dummy responses
- "Send" actions show confirmation modals
- Matching suggestions based on static persona data

---

## 4. Technical Architecture

### 4.1 Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Markup | HTML5 | Latest |
| Styling | TailwindCSS | 3.x (CDN) |
| Interactivity | Alpine.js | 3.x (CDN) |
| Icons | Heroicons | Via inline SVG |
| Fonts | Noto Sans JP, Inter | Google Fonts |
| PWA | Service Worker | Native |

### 4.2 File Structure

```
north-tokyo-coop/
├── index.html              # Entry point - QR Login
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── css/
│   └── app.css             # Custom styles (Tailwind directives)
├── js/
│   ├── app.js              # Main Alpine.js application
│   ├── i18n.js             # Localization strings
│   ├── data.js             # Mock/dummy data
│   └── router.js           # Simple SPA routing
├── pages/
│   ├── login.html          # QR code login page
│   ├── dashboard.html      # Role-based dashboard
│   ├── news.html           # News feed
│   ├── events.html         # Events calendar
│   ├── community.html      # Mutual aid board
│   ├── knowledge.html      # Knowledge base
│   ├── profile.html        # User profile/persona
│   ├── decisions.html      # Proposals (Reijikai)
│   └── admin.html          # Content management (Shokuin)
├── components/
│   ├── header.html         # Top navigation
│   ├── bottom-nav.html     # Bottom tab bar
│   ├── card.html           # Reusable card component
│   └── modal.html          # Modal dialogs
├── assets/
│   ├── icons/              # App icons for PWA
│   └── images/             # Static images
└── docs/
    └── PRD.md              # This document
```

### 4.3 Mobile-First Navigation Strategy

**Current POC Issue:** Sidebar navigation is desktop-oriented.

**Proposed Mobile Solution:**

```
┌────────────────────────────────────┐
│  ☰  北東京CO-OP Hub     🌐 👤     │  ← Sticky Header
├────────────────────────────────────┤
│                                    │
│                                    │
│         MAIN CONTENT               │
│         (Scrollable)               │
│                                    │
│                                    │
├────────────────────────────────────┤
│  🏠    📰    👥    📅    ≡        │  ← Fixed Bottom Nav
│ Home  News  Community Events More  │
└────────────────────────────────────┘
```

**Bottom Navigation Tabs:**
1. 🏠 Home (ホーム) - Dashboard
2. 📰 News (ニュース) - News feed
3. 👥 Community (コミュニティ) - Mutual aid
4. 📅 Events (イベント) - Calendar
5. ≡ More (その他) - Knowledge, Profile, Settings

**"More" Menu Contents:**
- 📚 Knowledge Base (知識倉庫)
- 👤 My Profile (プロフィール)
- 🛒 Shop (商品注文) - External link
- ⚙️ Settings (設定)
- 🚪 Logout (ログアウト)

**Role-Specific Items in "More":**
- Reijikai: 📋 Decision Making (意思決定)
- Shokuin: ✏️ Content Management (コンテンツ管理)

---

## 5. User Interface Design

### 5.1 Design Principles

1. **Accessibility First**
   - Large touch targets (minimum 44x44px)
   - High contrast text (WCAG AA compliant)
   - Clear, readable fonts (16px minimum)
   - Simple iconography with labels

2. **Japanese-First Design**
   - Vertical text support where appropriate
   - Proper line breaks for Japanese text
   - Date formats: 2024年12月15日
   - Time formats: 14:30

3. **Privacy-Conscious UI**
   - Clear privacy indicators
   - Consent dialogs in plain language
   - Easy access to privacy settings

### 5.2 Color Palette

```css
/* Primary - COOP Green */
--coop-green-50: #f0fdf4;
--coop-green-100: #dcfce7;
--coop-green-500: #86bd5e;  /* Primary */
--coop-green-600: #6b9c4e;
--coop-green-700: #166534;

/* Role Colors */
--role-reijikai: #9333ea;   /* Purple */
--role-shokuin: #3b82f6;    /* Blue */
--role-volunteer: #22c55e;  /* Green */

/* Semantic Colors */
--success: #22c55e;
--warning: #eab308;
--error: #ef4444;
--info: #3b82f6;
```

### 5.3 Component Specifications

#### Cards (Mobile-Optimized)
```
Width: 100% (with 16px padding)
Border Radius: 12px
Shadow: 0 2px 8px rgba(0,0,0,0.1)
Padding: 16px
```

#### Buttons
```
Height: 48px (primary), 40px (secondary)
Border Radius: 8px
Font Size: 16px
Touch Target: 48px minimum
```

#### Input Fields
```
Height: 48px
Border Radius: 8px
Font Size: 16px
Padding: 12px 16px
```

---

## 6. Localization (i18n)

### 6.1 Supported Languages
- **Japanese (ja):** Primary, default
- **English (en):** Secondary

### 6.2 Language Toggle
- Accessible from header (globe icon)
- Persisted in localStorage
- Instant switching without page reload

### 6.3 Translation Structure
```javascript
const i18n = {
  ja: {
    common: {
      appName: '北東京CO-OP Hub',
      login: 'ログイン',
      logout: 'ログアウト',
      // ...
    },
    nav: {
      home: 'ホーム',
      news: 'ニュース',
      community: 'コミュニティ',
      events: 'イベント',
      more: 'その他',
      // ...
    },
    // ... other namespaces
  },
  en: {
    common: {
      appName: 'North Tokyo COOP Hub',
      login: 'Login',
      logout: 'Logout',
      // ...
    },
    // ...
  }
};
```

---

## 7. Dummy Data Specifications

### 7.1 Sample Users (All Three Personas)

```javascript
const users = {
  reijikai: {
    id: 'NT-R-001',
    name: '山田 太郎',
    nameEn: 'Taro Yamada',
    nickname: 'やまちゃん',
    role: 'reijikai',
    area: '練馬区',
    areaEn: 'Nerima',
    memberSince: '2015-04-01',
    email: 'yamada@example.com',
    avatar: '👔',
    bio: '10年以上の組合活動経験。地域の食の安全を守りたい。',
    bioEn: '10+ years of coop experience. Passionate about local food safety.',
    servicesOffered: ['education', 'eldercare'],
    servicesNeeded: [],
    availability: {
      monday: ['morning'],
      wednesday: ['afternoon'],
      saturday: ['morning', 'afternoon']
    },
    privacy: {
      showRealName: true,
      locationPrecision: 'district',
      contactMethod: 'inapp'
    }
  },
  shokuin: {
    id: 'NT-S-042',
    name: '佐藤 花子',
    nameEn: 'Hanako Sato',
    nickname: 'はなさん',
    role: 'shokuin',
    area: '豊島区',
    areaEn: 'Toshima',
    memberSince: '2018-09-15',
    email: 'sato@example.com',
    avatar: '💼',
    bio: 'コープの職員として5年目。イベント企画が得意です。',
    bioEn: '5th year as coop staff. Good at event planning.',
    servicesOffered: ['shopping', 'delivery'],
    servicesNeeded: ['childcare'],
    availability: {
      tuesday: ['evening'],
      thursday: ['evening'],
      sunday: ['morning', 'afternoon']
    },
    privacy: {
      showRealName: true,
      locationPrecision: 'district',
      contactMethod: 'email'
    }
  },
  volunteer: {
    id: 'NT-12345',
    name: '田中 美咲',
    nameEn: 'Misaki Tanaka',
    nickname: 'みさきママ',
    role: 'volunteer',
    area: '板橋区',
    areaEn: 'Itabashi',
    memberSince: '2022-01-10',
    email: 'tanaka@example.com',
    avatar: '🤝',
    bio: '2児の母。子育て中のママ同士で助け合いたいです。',
    bioEn: 'Mother of 2. Want to help other moms in the community.',
    servicesOffered: ['childcare', 'petcare'],
    servicesNeeded: ['transportation', 'shopping'],
    availability: {
      monday: ['morning', 'afternoon'],
      wednesday: ['morning'],
      friday: ['morning', 'afternoon']
    },
    privacy: {
      showRealName: false,
      locationPrecision: 'district',
      contactMethod: 'inapp'
    }
  }
};
```

### 7.2 Community Mutual Aid Data

```javascript
const communityRequests = [
  {
    id: 'req-001',
    type: 'request',
    category: 'childcare',
    title: '12月15日（日）午後のベビーシッター',
    titleEn: 'Babysitter needed Dec 15 (Sun) afternoon',
    description: '買い物に行く間、3歳の娘を2時間ほど見ていただける方を探しています。',
    descriptionEn: 'Looking for someone to watch my 3-year-old daughter for 2 hours while I go shopping.',
    userId: 'NT-12345',
    userName: 'みさきママ',
    area: '板橋区',
    date: '2024-12-15',
    timeSlot: 'afternoon',
    urgency: 'normal',
    status: 'open',
    views: 12,
    responses: 3,
    createdAt: '2024-12-10T10:30:00'
  }
];

const serviceCategories = [
  { id: 'childcare', name: '育児サポート', nameEn: 'Childcare', icon: '👶', color: 'pink' },
  { id: 'transportation', name: '送迎・ライドシェア', nameEn: 'Transportation', icon: '🚗', color: 'blue' },
  { id: 'shopping', name: '買い物代行', nameEn: 'Shopping', icon: '🛒', color: 'green' },
  { id: 'delivery', name: '配達サポート', nameEn: 'Delivery', icon: '📦', color: 'orange' },
  { id: 'homehelp', name: '家事サポート', nameEn: 'Home Help', icon: '🏠', color: 'yellow' },
  { id: 'education', name: '学習支援', nameEn: 'Education', icon: '📚', color: 'purple' },
  { id: 'petcare', name: 'ペットケア', nameEn: 'Pet Care', icon: '🐕', color: 'amber' },
  { id: 'eldercare', name: '高齢者支援', nameEn: 'Elder Care', icon: '👴', color: 'teal' }
];
```

### 7.3 Sample Content Counts
- News Articles: 15
- Events: 8
- Community Requests: 12 (mix of requests, offers, exchanges)
- Knowledge Base Articles: 25
- Active Proposals: 3
- Registered Volunteers: 1,247 (displayed stat)

---

## 8. PWA Requirements

### 8.1 Manifest Configuration
```json
{
  "name": "北東京CO-OP Hub",
  "short_name": "CO-OP Hub",
  "description": "North Tokyo COOP Community Platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#86bd5e",
  "orientation": "portrait",
  "icons": [
    { "src": "/assets/icons/icon-192.png", "sizes": "192x192" },
    { "src": "/assets/icons/icon-512.png", "sizes": "512x512" }
  ]
}
```

### 8.2 Service Worker (Basic Caching)
- Cache static assets (CSS, JS, fonts)
- Cache-first strategy for static content
- Network-first for dynamic content

---

## 9. Implementation Phases

### Phase 1: Complete POC (Current Sprint)

#### Week 1: Foundation
- [ ] Project setup and file structure
- [ ] PWA manifest and service worker
- [ ] Base styles and Tailwind configuration
- [ ] i18n system implementation
- [ ] Mobile navigation components
- [ ] QR login simulation page

#### Week 2: Core Features
- [ ] Dashboard (all 3 personas)
- [ ] News feed
- [ ] Events list and registration
- [ ] Knowledge base with search

#### Week 3: Community Mutual Aid
- [ ] User profile/persona builder
- [ ] Community board
- [ ] Request/offer creation
- [ ] Matching and contact system

#### Week 4: Role-Specific Features
- [ ] Reijikai features (proposals, voting, announcements)
- [ ] Shokuin features (content management, moderation)
- [ ] Volunteer features (full participation)

#### Week 5: Polish & Demo Prep
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Documentation finalization

### Phase 2 - Future Enhancements
- Shop integration
- Lunlun points reward system
- Push notifications
- Offline functionality
- Real QR code authentication

---

## 10. Key Suggestions & Recommendations

### 10.1 Critical Improvements

1. **Navigation Redesign (High Priority)**
   - Recommended: Bottom tab navigation with "More" menu
   - Rationale: Thumb-friendly, mobile-standard pattern

2. **QR Code Entry Point (High Priority)**
   - Recommended: Simulated QR scan animation
   - Rationale: Matches production expectations

3. **Larger Touch Targets (High Priority)**
   - Recommended: Minimum 48px height for interactive elements
   - Rationale: Accessibility for elderly users

4. **Simplified Information Architecture (Medium Priority)**
   - Recommended: Progressive disclosure via menus
   - Rationale: Reduces cognitive load

### 10.2 UX Enhancements

1. **Onboarding Flow** - First-time user tutorial
2. **Empty States** - Friendly illustrations and clear CTAs
3. **Loading States** - Skeleton screens and optimistic updates

### 10.3 Privacy Considerations

1. **Persona Visibility Controls** - Granular per-service settings
2. **Data Handling Transparency** - Clear usage explanations
3. **Consent Management** - Easy-to-understand dialogs

### 10.4 Accessibility Recommendations

1. **Font Sizes** - Base 16px, headers 18-24px
2. **Color Contrast** - 4.5:1 minimum for text
3. **Alternative Inputs** - Voice input consideration

---

## 11. Success Metrics

### 11.1 POC Demo Success
- All three roles demonstrable
- Language switching functional
- Mobile navigation functional
- Stakeholder understanding confirmed

### 11.2 Production Success Metrics
- User activation rate: >60%
- Monthly active users: >30%
- Community engagement: >5 mutual aid requests/week
- User satisfaction: >4.0/5.0

---

## 12. Open Questions for Stakeholder Discussion

1. **Shop Integration:** External link vs. embedded view?
2. **Notification Preferences:** Email, push, or in-app only?
3. **Moderation Policy:** Who approves community posts?
4. **Data Retention:** How long to keep user activity data?
5. **Analytics:** What metrics are important to track?

---

## 13. Appendix

### A. Glossary

| Term | Japanese | Description |
|------|----------|-------------|
| Reijikai | 委員会 | Committee member (decision maker) |
| Shokuin | 職員 | Administrative staff |
| Volunteer | ボランティア | General member |
| Knowledge Warehouse | 知識倉庫 | Knowledge base/FAQ |
| Mutual Aid | 助け合い | Community support services |
| Lunlun Points | ルンルンポイント | Rewards system (future) |

### B. References

- Existing POC: Project files
- Loomio: https://www.loomio.org/

---

**Document Status:** Ready for Review  
**Last Updated:** December 2024  
**Next Steps:** Confirm PRD with stakeholder, proceed to Phase 1 implementation
