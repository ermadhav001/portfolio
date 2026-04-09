// ================= EMAIL JS INIT =================
emailjs.init("dn1PhixGr8gJ9h5OH");

// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_05igj6f",
      "template_zxu9nvk",
      this
    ).then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message!");
      }
    );
  });
}

// ================= PROJECTS DATA =================
const projects = [
  {
    name: "Amazon Clone (Static)",
    desc: "Pixel-perfect E-commerce replica featuring complex grid layouts and full responsiveness using pure CSS.",
    link: "https://ermadhav001.github.io/amazon-clone/"
  },
  {
    name: "Portfolio Website",
    desc: "Modern portfolio using HTML, CSS and JavaScript.",
    link: "https://ermadhav001.github.io/portfolio/"
  },
  {
    name: "JavaScript Mini Projects",
    desc: "Collection of small JS projects to strengthen fundamentals.",
    link: "https://github.com/ermadhav001"
  }
];

const projectContainer = document.getElementById("projectContainer");

if (projectContainer) {
  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project card reveal";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <a href="${p.link}" target="_blank">GitHub</a>
    `;
    projectContainer.appendChild(div);
  });
}

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

// ================= THEME TOGGLE =================
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// ================= LOADER =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});