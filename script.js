// ===== Elements =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// ===== Mobile menu =====
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Close menu on click outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove("open");
  }
  // Close dropdown when clicking outside
  const dropdown = document.getElementById("researchDropdown");
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

// ===== Dropdown toggle =====
const dropdownTrigger = document.querySelector(".dropdown-trigger");
if (dropdownTrigger) {
  dropdownTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("researchDropdown").classList.toggle("open");
  });
}

// Close dropdown when a dropdown link is clicked
document.querySelectorAll("div.dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("researchDropdown").classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== Theme toggle =====
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ===== Active nav link on scroll (Intersection Observer) =====
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a[data-section]");

const observerOptions = {
  rootMargin: "-20% 0px -70% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navItems.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-section") === id);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
