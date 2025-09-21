// Accordion interaktif untuk About
const accordions = document.querySelectorAll(".accordion-btn");
accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// Animasi fade-up saat scroll
const faders = document.querySelectorAll(".fade-up");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
