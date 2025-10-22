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

// ✅ Hiển thị thanh tiến độ và phần trăm ngay khi load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ngon-ngu .progress").forEach((bar) => {
    const percent = parseInt(bar.getAttribute("data-percent"));
    const percentLabel = bar.parentElement.querySelector(".progress-percent");

    // Hiệu ứng tăng dần (mượt mà)
    let current = 0;
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
});
