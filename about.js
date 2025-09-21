// Scroll-triggered fade-up
const faders = document.querySelectorAll('.fade-up');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
