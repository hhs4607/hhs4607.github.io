// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal-on-scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
