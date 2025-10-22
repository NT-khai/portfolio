// Hamburger menu toggle
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".nav-links").classList.remove("active"); // Đóng menu mobile sau khi click
  });
});

// 🌌 Hiệu ứng hạt (Particle effect)
const particlesContainer = document.getElementById("particles");
const numParticles = 60;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 4 + 2; // 2px - 6px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 10 + 8}s`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  particle.style.opacity = Math.random() * 0.6 + 0.3;

  particlesContainer.appendChild(particle);
}

// 🌈 Animation cho progress bar khi cuộn tới section
const progressBars = document.querySelectorAll(".progress");
const ngonNguSection = document.querySelector("#ngon-ngu");

const progressObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          const percent = parseInt(bar.getAttribute("data-percent"));
          let current = 0;
          const percentLabel =
            bar.parentElement.querySelector(".progress-percent");

          // Animation tăng dần thanh + số %
          const interval = setInterval(() => {
            if (current >= percent) {
              clearInterval(interval);
            } else {
              current++;
              bar.style.width = `${current}%`;
              percentLabel.textContent = `${current}%`;
            }
          }, 15);
        });
        observer.unobserve(ngonNguSection);
      }
    });
  },
  { threshold: 0.4 }
);

progressObserver.observe(ngonNguSection);

// 💪 Animation cho kỹ năng (Kỹ năng mềm)
const skillItems = document.querySelectorAll(".skill-item");
const kyNangSection = document.querySelector("#ky-nang");

const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillItems.forEach((item, index) => {
          setTimeout(() => item.classList.add("visible"), index * 120);
        });
        observer.unobserve(kyNangSection);
      }
    });
  },
  { threshold: 0.4 }
);

skillObserver.observe(kyNangSection);
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const animateProgress = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
        observer.unobserve(bar);
      }
    });
  };

  const observer = new IntersectionObserver(animateProgress, {
    threshold: 0.3,
  });

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});
