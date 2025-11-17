// ===== GENERATE STARS =====
function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ===== CURSOR TRAIL =====
function initCursorTrail() {
    const trail = document.getElementById('cursorTrail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.style.opacity = '0.6';
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== RADAR CHART =====
function initRadarChart() {
    const ctx = document.getElementById('skillsRadar');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Backend', 'Frontend', 'DevOps', 'Architecture', 'Database', 'Agile'],
            datasets: [{
                label: 'Niveau de compétence',
                data: [9, 7, 6, 8, 8, 7],
                fill: true,
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                borderColor: 'rgb(0, 212, 255)',
                pointBackgroundColor: 'rgb(0, 212, 255)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(0, 212, 255)',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        backdropColor: 'transparent',
                        stepSize: 2,
                        min: 0,
                        max: 10
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
}

// ===== MODAL FUNCTIONS =====
function openModal(event, projectId) {
    event.preventDefault();
    const data = modalData[projectId];
    if (data) {
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-subtitle').textContent = data.subtitle;
        document.getElementById('modal-body').innerHTML = data.content;
        document.getElementById('modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== DOWNLOAD CV =====
function downloadCV(event) {
    event.preventDefault();
    alert('Fonctionnalité de téléchargement du CV à implémenter.\n\nVous devrez :\n1. Créer un fichier PDF de votre CV\n2. Le placer dans votre repository GitHub\n3. Remplacer cette alerte par :\n\nwindow.location.href = "votre-cv.pdf";');
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ===== INTERSECTION OBSERVER =====
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .timeline-item, .skill-card, .soft-skill-card, .certification-card, .veille-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - scrolled / 600;
        }
    });
}

// ===== HIDE SCROLL INDICATOR =====
function initScrollIndicator() {
    window.addEventListener('scroll', () => {
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            indicator.style.opacity = window.pageYOffset > 100 ? '0' : '1';
        }
    });
}

// ===== HIDE AVAILABILITY BANNER ON SCROLL =====
function initAvailabilityBanner() {
    const banner = document.getElementById('availabilityBanner');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 200 && currentScroll > lastScroll) {
            banner.style.transform = 'translate(-50%, -100px)';
            banner.style.opacity = '0';
        } else if (currentScroll < lastScroll) {
            banner.style.transform = 'translateX(-50%)';
            banner.style.opacity = '1';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const text = document.querySelector('.typing-text');
    const originalText = text.textContent;
    text.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            text.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// ===== INITIALIZE ALL ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    generateStars();
    initCursorTrail();
    initRadarChart();
    initSmoothScroll();
    initIntersectionObserver();
    initParallax();
    initScrollIndicator();
    initAvailabilityBanner();
    initTypingEffect();
    
    // Animate counters when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const hero = document.querySelector('.hero');
    if (hero) {
        heroObserver.observe(hero);
    }
});