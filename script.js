// Animation helper function
function animateElement(element, delay = 0) {
  setTimeout(() => {
    element.classList.add("active");
  }, delay);
}

// Initial load animations
document.addEventListener("DOMContentLoaded", () => {
  // Animate logo
  const logo = document.querySelector(".logo");
  logo.classList.add("scale-in");
  animateElement(logo);

  // Animate navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    item.classList.add("slide-in");
    animateElement(item, 300 + index * 100);
  });

  // Animate hero section
  const heroCard = document.querySelector(".hero-card");
  heroCard.classList.add("fade-in");
  animateElement(heroCard, 600);

  // Animate profile image
  const profileImage = document.querySelector(".profile-image-container");
  profileImage.classList.add("scale-in");
  animateElement(profileImage, 1000);
});

// Scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Animate sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  // About section
  const aboutContent = document.querySelector(".about-content");
  aboutContent.classList.add("fade-in");
  observer.observe(aboutContent);

  // Timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.transitionDelay = `${index * 200}ms`;
    observer.observe(item);
  });

  // Skills grid
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.classList.add("scale-in");
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });

  // Certification grid
  const certImages = document.querySelectorAll(".cert-image");
  certImages.forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });
});

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-item");

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    toggleMenu();
  }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
