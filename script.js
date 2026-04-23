document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

 closeBtn.onclick = () => {
  document.getElementById("menu").classList.remove("active");
};
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

});

// =========================================
// FIX: Smooth scroll + remove #hash
// =========================================

// disable browser remembering scroll
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // 🔥 remove #contact from URL
      setTimeout(() => {
        history.replaceState(null, null, " ");
      }, 300);
    }
  });
});


// =========================================
// FORCE TOP ON REFRESH
// =========================================

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});