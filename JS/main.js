console.log("Portfolio Loaded Successfully");

// Fade-in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Scroll swap for navbar title + tagline
const navName = document.getElementById("nav-name");
const navTagline = document.getElementById("nav-tagline");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollPosition >= heroHeight - 80) {
    navName.textContent = "Prince Kumar";
    navTagline.textContent = "Frontend Developer | Cloud | Product Management | Data & Finance";
  } else {
    navName.textContent = "Prince Kumar";
    navTagline.textContent = "";
  }
});

