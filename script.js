// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Particles
const particlesContainer = document.getElementById("particles");
const numParticles = 60;
for (let i = 0; i < numParticles; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");
  const size = Math.random() * 4 + 2;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.left = `${Math.random() * 100}vw`;
  p.style.animationDuration = `${Math.random() * 10 + 8}s`;
  p.style.animationDelay = `${Math.random() * 5}s`;
  p.style.opacity = Math.random() * 0.6 + 0.3;
  particlesContainer.appendChild(p);
}

// Typing Effect
const dynamicText = document.querySelector(".dynamic-text");
const texts = ["BACKEND ENGINEER"];
let textIndex = 0,
  charIndex = 0,
  isDeleting = false;

function typeEffect() {
  const current = texts[textIndex];
  dynamicText.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  } else if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}
typeEffect();

// === Dữ liệu ===
const languages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png",
    alt: "C++",
  },
  {
    src: "https://codingzap.com/wp-content/uploads/2023/09/C_help_CodingZap.png",
    alt: "C#",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s",
    alt: "Python",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    alt: "JavaScript",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIUxaE4o-jaXCs01Aaer65tBqZCFAn7NqmAdJm4759-j3CH2J2EarxxMnxiVYj1-kSCQ&usqp=CAU",
    alt: "TypeScript",
  },
];

const libraries = [
  {
    src: "https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png",
    alt: "React",
  },
  {
    src: "https://m.media-amazon.com/images/I/410aROl18kL.jpg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
    alt: "Bootstrap",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    alt: "Git",
  },
  {
    src: "https://img.favpng.com/20/3/17/github-computer-icons-logo-repository-png-favpng-3D6iEY0b391hz9PYJZqnvKTLT.jpg",
    alt: "GitHub",
  },
];

// === Hàm tạo danh sách logo (ul) ===
const createLogoList = (items) => {
  const ul = document.createElement("ul");
  ul.className = "logo-loop-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "logo-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";
    img.draggable = false;

    li.appendChild(img);
    ul.appendChild(li);
  });

  return ul;
};

// === Hàm khởi tạo loop ===
const initLogoLoop = (containerId, items, speed = 60, direction = "left") => {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Tạo track
  const track = document.createElement("div");
  track.className = "logo-loop-track";
  container.appendChild(track);

  // Tạo 4 bản sao danh sách
  const list = createLogoList(items);
  for (let i = 0; i < 4; i++) {
    track.appendChild(list.cloneNode(true));
  }

  // Animation variables
  let offset = 0;
  let velocity = 0;
  const smoothTau = 0.25;
  let lastTime = null;
  let raf = null;
  let isHovered = false;

  const targetSpeed = direction === "left" ? speed : -speed;

  container.addEventListener("mouseenter", () => (isHovered = true));
  container.addEventListener("mouseleave", () => (isHovered = false));

  const animate = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = Math.min(timestamp - lastTime, 100) / 1000;
    lastTime = timestamp;

    const target = isHovered ? 0 : targetSpeed;
    velocity += (target - velocity) * (1 - Math.exp(-deltaTime / smoothTau));
    offset += velocity * deltaTime;

    const sequenceWidth = track.scrollWidth / 4;
    offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;

    track.style.transform = `translateX(${-offset}px)`;

    raf = requestAnimationFrame(animate);
  };

  raf = requestAnimationFrame(animate);

  // Hủy animation khi rời trang
  return () => raf && cancelAnimationFrame(raf);
};

// === Khởi chạy ===
document.addEventListener("DOMContentLoaded", () => {
  initLogoLoop("languageLoop", languages, 60, "left");
  initLogoLoop("libraryLoop", libraries, 50, "right");
});

// === Soft Skills ===
const softSkills = [
  { icon: "fas fa-users", text: "Làm việc nhóm" },
  { icon: "fas fa-lightbulb", text: "Giải quyết vấn đề" },
  { icon: "fas fa-chalkboard-teacher", text: "Thuyết trình" },
  { icon: "fas fa-comments", text: "Giao tiếp" },
  { icon: "fas fa-book-open", text: "Tự học" },
  { icon: "fas fa-sync-alt", text: "Thích ứng" },
];

document.addEventListener("DOMContentLoaded", () => {
  const softSkillsContainer = document.getElementById("softSkills");
  softSkills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "kn-skill-item";
    div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.text}</span>`;
    softSkillsContainer.appendChild(div);
  });

  // === Hobbies Slider ===
  const hobbies = [
    { img: "img3.jpg", title: "Nghe Nhạc", desc: "Thư giãn và tập trung" },
    { img: "img2.jpg", title: "Cà Phê Bệt", desc: "Tỉnh tảo & sáng tạo" },
    { img: "img4.jpg", title: "Du Lịch", desc: "Khám phá & trải nghiệm" },
  ];

  const track = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let autoSlide = null;

  // Tạo slide
  hobbies.forEach((hobby, i) => {
    const div = document.createElement("div");
    div.className = "kn-hobby-card";
    div.innerHTML = `
      <img src="${hobby.img}" alt="${hobby.title}" loading="lazy">
      <div class="kn-hobby-info">
        <h4>${hobby.title}</h4>
        <p>${hobby.desc}</p>
      </div>
    `;
    track.appendChild(div);

    const dot = document.createElement("div");
    dot.className = "kn-dot";
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".kn-dot");

  const goToSlide = (i) => {
    currentIndex = (i + hobbies.length) % hobbies.length;
    track.style.transform = `translateX(-${currentIndex * 33.333}%)`;
    dots.forEach((d, idx) =>
      d.classList.toggle("active", idx === currentIndex)
    );
  };

  prevBtn.onclick = () => goToSlide(currentIndex - 1);
  nextBtn.onclick = () => goToSlide(currentIndex + 1);

  // Auto slide
  const startAutoSlide = () => {
    autoSlide = setInterval(() => goToSlide(currentIndex + 1), 4000);
  };
  const stopAutoSlide = () => clearInterval(autoSlide);

  const slider = document.querySelector(".kn-hobbies-slider");
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
  startAutoSlide();

  // Touch swipe
  let touchStartX = 0;
  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    stopAutoSlide();
  });
  slider.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextBtn.click() : prevBtn.click();
    }
    startAutoSlide();
  });
});

// tạo dự án
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Ứng dụng đặt vé xe",
      desc: "Sử dụng ngôn ngữ Python để tạo kết nối mạng theo mô hình <strong>client-server</strong><br><strong>Đóng góp: 100%</strong>",
      link: "https://github.com/khaint14/Nhom6-final",
      img: "datxe.jpg", // thay bằng ảnh thực tế sau
    },
    {
      title: "Trang web ứng dụng React",
      desc: "Sử dụng <strong>React, Tailwind CSS</strong> để tạo trang web tĩnh hoàn chỉnh<br><strong>Đóng góp: 100%</strong>",
      link: "https://react-tailwind-peach.vercel.app/",
      img: "react.jpg",
    },
    {
      title: "Portfolio cá nhân",
      desc: "Thiết kế và phát triển portfolio này với <strong>HTML, CSS, JavaScript</strong><br><strong>Đóng góp: 100%</strong>",
      link: "https://portfolio-u2tf.vercel.app/",
      img: "portfolio.jpg",
    },
  ];

  const grid = document.getElementById("projectGrid");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "da-card";

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="da-card-img" loading="lazy">
      <div class="da-card-content">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="da-link" target="_blank" rel="noopener">
          Xem chi tiết <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });

  // Refresh AOS nếu có
  if (typeof AOS !== "undefined") AOS.refresh();
});
