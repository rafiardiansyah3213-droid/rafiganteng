// tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// toggle mobile menu
function toggleMenu() {
  const el = document.getElementById("mobileNav");
  el.style.display = el.style.display === "flex" ? "none" : "flex";
}

// menutup menu setelah klik
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    const mobile = document.getElementById("mobileNav");
    if (mobile) mobile.style.display = "none";
  });
});
// ===============================
// ✅ TOMBOL BACK KE HALAMAN GAME
// ===============================
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "games.html"; // halaman pilihan game
  });
}
function toggleSideNav() {
  const nav = document.getElementById("sideNav");
  if (nav.style.right === "0px") {
    nav.style.right = "-220px";
  } else {
    nav.style.right = "0px";
  }
}
const navLinks = document.querySelectorAll(".side-nav a, .navlink");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// AKTIF OTOMATIS SAAT SCROLL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

