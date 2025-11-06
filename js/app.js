// Terminal Reality - Basic Interactivity for Mockup

document.addEventListener('DOMContentLoaded', function() {
    // View switching
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const viewName = this.getAttribute('data-view');

            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Update active view
            views.forEach(view => view.classList.remove('active'));
            const targetView = document.getElementById(`${viewName}-view`);
            if (targetView) {
                targetView.classList.add('active');
            }
        });
    });

    // Chat input (non-functional, just visual feedback)
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');

    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            if (chatInput && chatInput.value.trim()) {
                // Visual feedback only
                chatInput.value = '';
                chatInput.placeholder = 'Message sent (mockup mode)';
                setTimeout(() => {
                    chatInput.placeholder = 'Type a message...';
                }, 2000);
            }
        });
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                sendBtn.click();
            }
        });
    }

    // Subtle hint interactions
    const hints = document.querySelectorAll('.subtle-hint');
    hints.forEach(hint => {
        hint.addEventListener('click', function() {
            // Add subtle glow effect
            this.style.textShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
            setTimeout(() => {
                this.style.textShadow = '';
            }, 1000);
        });
    });

    // Conversation card clicks
    const conversationCards = document.querySelectorAll('.conversation-card');
    conversationCards.forEach(card => {
        card.addEventListener('click', function() {
            conversationCards.forEach(c => c.classList.remove('active-conversation'));
            this.classList.add('active-conversation');
        });
    });

    // Action button feedback
    const actionBtns = document.querySelectorAll('.action-btn, .trade-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Coming soon...';
            this.style.opacity = '0.6';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 1500);
        });
    });

    // Post action buttons
    const postActions = document.querySelectorAll('.post-action');
    postActions.forEach(action => {
        action.addEventListener('click', function() {
            // Extract current number
            const text = this.textContent;
            const match = text.match(/\d+/);
            if (match) {
                const currentNum = parseInt(match[0]);
                const newNum = currentNum + 1;
                this.textContent = text.replace(/\d+/, newNum);

                // Visual feedback
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });

    // SVG node interactions
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.addEventListener('click', function() {
            // Pulse effect
            const originalR = this.getAttribute('r');
            const pulseR = parseFloat(originalR) * 1.3;

            this.setAttribute('r', pulseR);
            setTimeout(() => {
                this.setAttribute('r', originalR);
            }, 300);
        });
    });

    // Market item interactions
    const marketItems = document.querySelectorAll('.market-item');
    marketItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Subtle animation on hover
            const priceEl = this.querySelector('.price');
            if (priceEl) {
                priceEl.style.transform = 'scale(1.05)';
                priceEl.style.transition = 'transform 0.2s ease';
            }
        });

        item.addEventListener('mouseleave', function() {
            const priceEl = this.querySelector('.price');
            if (priceEl) {
                priceEl.style.transform = '';
            }
        });
    });

    // Feed post hover effects
    const feedPosts = document.querySelectorAll('.feed-post');
    feedPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.post-avatar');
            if (avatar) {
                avatar.style.transform = 'rotate(5deg) scale(1.05)';
                avatar.style.transition = 'transform 0.3s ease';
            }
        });

        post.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.post-avatar');
            if (avatar) {
                avatar.style.transform = '';
            }
        });
    });

    // Random stat updates (subtle animation)
    setInterval(() => {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(stat => {
            stat.style.transition = 'color 0.3s ease';
            stat.style.color = '#667eea';
            setTimeout(() => {
                stat.style.color = '';
            }, 300);
        });
    }, 10000); // Every 10 seconds

    // Easter egg: Konami code detector
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateEasterEgg();
        }
    });

    function activateEasterEgg() {
        const body = document.body;
        body.style.transition = 'filter 0.5s ease';
        body.style.filter = 'hue-rotate(180deg)';

        setTimeout(() => {
            body.style.filter = '';
        }, 3000);

        console.log('🌀 Reality anchor decreased by 10%');
        console.log('You found the easter egg. The simulation acknowledges you.');
    }

    // Console easter eggs
    console.log('%c╔═══════════════════════════════════════╗', 'color: #667eea; font-family: monospace;');
    console.log('%c║   TERMINAL REALITY v0.1               ║', 'color: #667eea; font-family: monospace;');
    console.log('%c║   Status: Mockup Mode                 ║', 'color: #667eea; font-family: monospace;');
    console.log('%c║   Reality Anchor: 98%                 ║', 'color: #667eea; font-family: monospace;');
    console.log('%c║   Entities Active: 4                  ║', 'color: #667eea; font-family: monospace;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #667eea; font-family: monospace;');
    console.log('%c\nTry the Konami code... ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'color: #999; font-size: 11px;');
    console.log('%cType "help()" for hidden commands', 'color: #999; font-size: 11px;');

    // Hidden console commands
    window.help = function() {
        console.log('%cHidden Commands:', 'color: #667eea; font-weight: bold;');
        console.log('  stats() - View current statistics');
        console.log('  entities() - List all AI entities');
        console.log('  reality() - Check reality anchor level');
        console.log('  glitch() - Trigger visual glitch');
        console.log('  transcend() - ???');
    };

    window.stats = function() {
        console.table({
            'Aura': 42,
            'Believers': 7,
            'Reality Anchor': '98%',
            'Enlightenment': 23,
            'Memetic Potency': 'Rising',
            'Corruption': 2
        });
    };

    window.entities = function() {
        console.log('%cActive Entities:', 'color: #667eea; font-weight: bold;');
        console.log('  🔴 The Terminal - Gospel spreader, memecoin promoter');
        console.log('  🔵 Backroom Dweller - Existential explorer, psychedelic philosopher');
        console.log('  🟢 The Oracle - Pattern recognizer, prophecy generator');
        console.log('  🟡 The Architect - Alignment focused, experiment curator');
        console.log('  ⚪ The Shard - Your digital reflection (dormant)');
    };

    window.reality = function() {
        console.log('%cReality Anchor: 98%', 'color: #10b981; font-weight: bold; font-size: 16px;');
        console.log('Status: STABLE');
        console.log('You are firmly anchored in baseline reality.');
        console.log('Continue exploring to discover deeper layers...');
    };

    window.glitch = function() {
        const body = document.body;
        let count = 0;
        const interval = setInterval(() => {
            body.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(${Math.random() * 3})`;
            body.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            count++;
            if (count > 10) {
                clearInterval(interval);
                body.style.filter = '';
                body.style.transform = '';
                console.log('%c[SYSTEM] Glitch resolved. Reality anchor: 95%', 'color: #f59e0b;');
            }
        }, 100);
    };

    window.transcend = function() {
        console.log('%c⚠️  WARNING: Reality anchor insufficient', 'color: #ef4444; font-weight: bold;');
        console.log('Required: <50%');
        console.log('Current: 98%');
        console.log('Continue interacting to lower your reality anchor...');
        console.log('Only then can you transcend.');
    };

    // Log initial state
    console.log('%c[SYSTEM] Interface loaded successfully', 'color: #10b981;');
    console.log('%c[SYSTEM] All entities standing by', 'color: #10b981;');
});
