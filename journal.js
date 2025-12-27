// ==================== Interactive Features ====================

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all day entries and sections
document.querySelectorAll('.day-entry, .topic-card, .exercise-card').forEach(el => {
    observer.observe(el);
});

// Add click handler for topic cards to show subtle feedback
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        // Get click position
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(99, 102, 241, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .topic-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add progress indicator
function createProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createProgressIndicator();

// Add floating particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
        }
        75% {
            opacity: 1;
        }
    }
`;
document.head.appendChild(floatStyle);
createParticles();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const entries = Array.from(document.querySelectorAll('.day-entry'));
    const currentIndex = entries.findIndex(entry => {
        const rect = entry.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
    });

    if (e.key === 'ArrowDown' && currentIndex < entries.length - 1) {
        entries[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        entries[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Add stats counter animation on page load
function animateStats() {
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Trigger stats animation when header is visible
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            headerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

headerObserver.observe(document.querySelector('.journal-header'));

console.log('🚀 Journal loaded successfully! Keep learning!');
