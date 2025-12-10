/**
 * North Tokyo COOP Hub - Decisions Page Logic
 * Handles Community Polls and Governance Proposals
 */

/**
 * Alpine.js component for the Decisions page
 * Provides dual-mode functionality: Community Polls (all roles) and Governance (Reijikai only)
 */
function decisionsPage() {
    return {
        // ============================================
        // State
        // ============================================
        activeTab: 'polls',
        pollFilter: 'all',
        showPollForm: false,
        showProposalForm: false,
        showToast: false,
        toastMessage: '',
        
        // Selected options for voting (keyed by poll ID)
        selectedOptions: {},
        
        // New poll form data
        newPoll: {
            title: '',
            description: '',
            type: 'single',
            category: 'general',
            deadline: '',
            options: ['', '']
        },
        
        // New proposal form data
        newProposal: {
            title: '',
            description: '',
            category: 'policy',
            deadline: ''
        },
        
        // ============================================
        // Computed Properties (Getters)
        // ============================================
        
        /**
         * Get current language from localStorage
         */
        get language() {
            return localStorage.getItem('coop-lang') || 'ja';
        },
        
        /**
         * Get translations object for current language
         */
        get t() {
            return window.i18n ? window.i18n[this.language] : {};
        },
        
        /**
         * Get current user role from session
         */
        get userRole() {
            try {
                const session = JSON.parse(localStorage.getItem('coop-session'));
                return session?.role || null;
            } catch {
                return null;
            }
        },
        
        /**
         * Get current user data
         */
        get currentUser() {
            if (!window.CoopData || !this.userRole) return null;
            return CoopData.users[this.userRole];
        },
        
        // ============================================
        // POLLS Methods
        // ============================================
        
        /**
         * Check if current user can create polls (Staff & Committee only)
         */
        canCreatePoll() {
            return this.userRole === 'shokuin' || this.userRole === 'reijikai';
        },
        
        /**
         * Get all polls for current language
         */
        getPolls() {
            if (!window.CoopData) return [];
            return CoopData.polls[this.language] || [];
        },
        
        /**
         * Get only active polls
         */
        getActivePolls() {
            return this.getPolls().filter(p => p.status === 'active');
        },
        
        /**
         * Get polls filtered by current filter setting
         */
        getFilteredPolls() {
            const polls = this.getPolls();
            if (this.pollFilter === 'all') return polls;
            return polls.filter(p => p.status === this.pollFilter);
        },
        
        /**
         * Calculate average participation rate across all polls
         */
        getAverageParticipation() {
            const polls = this.getPolls();
            if (polls.length === 0) return 0;
            // For POC, return mock value
            // In production, calculate from actual member data
            return 72;
        },
        
        /**
         * Get total votes across all polls
         */
        getTotalPollVotes() {
            const polls = this.getPolls();
            return polls.reduce((sum, poll) => sum + poll.totalVotes, 0);
        },
        
        /**
         * Calculate percentage for a poll option
         */
        getOptionPercentage(poll, option) {
            const totalOptionVotes = poll.options.reduce((sum, o) => sum + o.votes, 0);
            if (totalOptionVotes === 0) return 0;
            return Math.round((option.votes / totalOptionVotes) * 100);
        },
        
        /**
         * Select/deselect a poll option
         * Handles both single and multiple choice polls
         */
        selectPollOption(pollId, optionId, pollType) {
            if (pollType === 'single') {
                // Single choice: replace selection
                this.selectedOptions[pollId] = optionId;
            } else {
                // Multiple choice: toggle selection
                if (!this.selectedOptions[pollId]) {
                    this.selectedOptions[pollId] = [];
                }
                const index = this.selectedOptions[pollId].indexOf(optionId);
                if (index > -1) {
                    this.selectedOptions[pollId].splice(index, 1);
                } else {
                    this.selectedOptions[pollId].push(optionId);
                }
            }
        },
        
        /**
         * Check if an option is currently selected
         */
        isOptionSelected(pollId, optionId) {
            const selected = this.selectedOptions[pollId];
            if (!selected) return false;
            if (Array.isArray(selected)) {
                return selected.includes(optionId);
            }
            return selected === optionId;
        },
        
        /**
         * Check if user has selected at least one option for a poll
         */
        hasSelectedOption(pollId) {
            const selected = this.selectedOptions[pollId];
            if (!selected) return false;
            if (Array.isArray(selected)) {
                return selected.length > 0;
            }
            return true;
        },
        
        /**
         * Submit vote for a poll
         * In production, this would be an API call
         */
        submitPollVote(pollId) {
            const polls = CoopData.polls[this.language];
            const poll = polls.find(p => p.id === pollId);
            
            if (!poll) {
                console.error('Poll not found:', pollId);
                return;
            }
            
            // Mark as voted
            poll.userVoted = true;
            poll.userVote = this.selectedOptions[pollId];
            poll.totalVotes++;
            
            // Update vote counts for selected options
            if (Array.isArray(poll.userVote)) {
                // Multiple choice
                poll.userVote.forEach(optId => {
                    const opt = poll.options.find(o => o.id === optId);
                    if (opt) opt.votes++;
                });
            } else {
                // Single choice
                const opt = poll.options.find(o => o.id === poll.userVote);
                if (opt) opt.votes++;
            }
            
            // Clear selection for this poll
            delete this.selectedOptions[pollId];
            
            this.showSuccessToast(this.t.polls.voteSuccess);
        },
        
        // ============================================
        // Poll Form Methods
        // ============================================
        
        /**
         * Add a new option to the poll form
         */
        addOption() {
            this.newPoll.options.push('');
        },
        
        /**
         * Remove an option from the poll form
         * Minimum 2 options required
         */
        removeOption(index) {
            if (this.newPoll.options.length > 2) {
                this.newPoll.options.splice(index, 1);
            }
        },
        
        /**
         * Validate if poll can be published
         */
        canPublishPoll() {
            const hasTitle = this.newPoll.title.trim() !== '';
            const hasEnoughOptions = this.newPoll.options.filter(o => o.trim() !== '').length >= 2;
            const hasDeadline = this.newPoll.deadline !== '';
            return hasTitle && hasEnoughOptions && hasDeadline;
        },
        
        /**
         * Publish a new poll
         * In production, this would be an API call
         */
        publishPoll() {
            const newId = this.getPolls().length + 1;
            
            // Category display labels
            const categoryLabels = {
                general: this.language === 'ja' ? '一般' : 'General',
                event: this.language === 'ja' ? 'イベント' : 'Event',
                product: this.language === 'ja' ? '商品' : 'Product',
                other: this.language === 'ja' ? 'その他' : 'Other'
            };
            
            // Build new poll object
            const newPollData = {
                id: newId,
                title: this.newPoll.title,
                description: this.newPoll.description,
                type: this.newPoll.type,
                category: this.newPoll.category,
                categoryDisplay: categoryLabels[this.newPoll.category],
                status: 'active',
                statusDisplay: this.language === 'ja' ? '投票受付中' : 'Voting Open',
                createdBy: this.currentUser ? 
                    (this.language === 'ja' ? this.currentUser.name : this.currentUser.nameEn) : 
                    'Unknown',
                createdByRole: this.userRole,
                createdAt: new Date().toISOString().split('T')[0],
                deadline: this.newPoll.deadline,
                options: this.newPoll.options
                    .filter(o => o.trim() !== '')
                    .map((text, idx) => ({
                        id: String.fromCharCode(97 + idx), // a, b, c, d...
                        text: text,
                        votes: 0
                    })),
                totalVotes: 0,
                allowedRoles: ['reijikai', 'shokuin', 'volunteer'],
                userVoted: false,
                userVote: null
            };
            
            // Add to beginning of polls array
            CoopData.polls[this.language].unshift(newPollData);
            
            // Also add to other language (with same structure but would need translation in real app)
            const otherLang = this.language === 'ja' ? 'en' : 'ja';
            CoopData.polls[otherLang].unshift({
                ...newPollData,
                statusDisplay: otherLang === 'ja' ? '投票受付中' : 'Voting Open',
                categoryDisplay: otherLang === 'ja' ? 
                    { general: '一般', event: 'イベント', product: '商品', other: 'その他' }[this.newPoll.category] :
                    { general: 'General', event: 'Event', product: 'Product', other: 'Other' }[this.newPoll.category]
            });
            
            this.closePollForm();
            this.showSuccessToast(this.t.messages.saveSuccess);
        },
        
        /**
         * Close poll form and reset data
         */
        closePollForm() {
            this.showPollForm = false;
            this.newPoll = {
                title: '',
                description: '',
                type: 'single',
                category: 'general',
                deadline: '',
                options: ['', '']
            };
        },
        
        // ============================================
        // PROPOSALS Methods (Reijikai Only)
        // ============================================
        
        /**
         * Get all proposals for current language
         */
        getProposals() {
            if (!window.CoopData) return [];
            return CoopData.proposals[this.language] || [];
        },
        
        /**
         * Get only active proposals
         */
        getActiveProposals() {
            return this.getProposals().filter(p => p.status === 'active');
        },
        
        /**
         * Get closed proposals
         */
        getClosedProposals() {
            return this.getProposals().filter(p => p.status === 'closed');
        },
        
        /**
         * Cast a vote on a governance proposal
         * In production, this would be an API call
         */
        castProposalVote(proposalId, vote) {
            const proposals = CoopData.proposals[this.language];
            const proposal = proposals.find(p => p.id === proposalId);
            
            if (!proposal) {
                console.error('Proposal not found:', proposalId);
                return;
            }
            
            // Record the vote
            proposal.userVoted = true;
            proposal.userVote = vote;
            proposal.votes[vote]++;
            proposal.totalVotes++;
            proposal.participationRate = Math.round((proposal.totalVotes / proposal.totalEligible) * 100);
            
            this.showSuccessToast(this.t.polls.voteSuccess);
        },
        
        /**
         * Get display label for a vote type
         */
        getVoteLabel(vote) {
            const labels = {
                yes: this.t.decisions?.vote?.yes || 'Yes',
                no: this.t.decisions?.vote?.no || 'No',
                abstain: this.t.decisions?.vote?.abstain || 'Abstain'
            };
            return labels[vote] || vote;
        },
        
        /**
         * Validate if proposal can be published
         */
        canPublishProposal() {
            const hasTitle = this.newProposal.title.trim() !== '';
            const hasDescription = this.newProposal.description.trim() !== '';
            const hasDeadline = this.newProposal.deadline !== '';
            return hasTitle && hasDescription && hasDeadline;
        },
        
        /**
         * Publish a new proposal
         * In production, this would be an API call
         */
        publishProposal() {
            const newId = this.getProposals().length + 1;
            
            const categoryLabels = {
                policy: this.language === 'ja' ? '方針' : 'Policy',
                budget: this.language === 'ja' ? '予算' : 'Budget',
                event: this.language === 'ja' ? 'イベント' : 'Event',
                other: this.language === 'ja' ? 'その他' : 'Other'
            };
            
            const newProposalData = {
                id: newId,
                title: this.newProposal.title,
                description: this.newProposal.description,
                category: this.newProposal.category,
                categoryDisplay: categoryLabels[this.newProposal.category],
                status: 'active',
                statusDisplay: this.language === 'ja' ? '投票中' : 'Voting',
                createdBy: this.currentUser ? 
                    (this.language === 'ja' ? this.currentUser.name : this.currentUser.nameEn) : 
                    'Unknown',
                createdAt: new Date().toISOString().split('T')[0],
                deadline: this.newProposal.deadline,
                votes: { yes: 0, no: 0, abstain: 0 },
                totalVotes: 0,
                totalEligible: 45, // Mock value
                participationRate: 0,
                userVoted: false,
                userVote: null
            };
            
            CoopData.proposals[this.language].unshift(newProposalData);
            
            this.closeProposalForm();
            this.showSuccessToast(this.t.messages.saveSuccess);
        },
        
        /**
         * Close proposal form and reset data
         */
        closeProposalForm() {
            this.showProposalForm = false;
            this.newProposal = {
                title: '',
                description: '',
                category: 'policy',
                deadline: ''
            };
        },
        
        // ============================================
        // Utility Methods
        // ============================================
        
        /**
         * Format date for display
         */
        formatDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            if (this.language === 'ja') {
                return `${date.getMonth() + 1}/${date.getDate()}`;
            }
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        },
        
        /**
         * Show success toast notification
         */
        showSuccessToast(message) {
            this.toastMessage = message || this.t.messages?.saveSuccess || 'Success';
            this.showToast = true;
            setTimeout(() => {
                this.showToast = false;
            }, 3000);
        },
        
        /**
         * Navigate to a different page
         */
        navigate(page) {
            if (window.Router) {
                Router.navigate(page);
            } else if (window.CoopApp) {
                CoopApp.navigateTo(page);
            }
        },
        
        /**
         * Initialize component (called on x-init if needed)
         */
        init() {
            console.log('[Decisions] Page initialized');
            console.log('[Decisions] User role:', this.userRole);
            console.log('[Decisions] Language:', this.language);
        }
    };
}

// Make function available globally for Alpine.js
window.decisionsPage = decisionsPage;