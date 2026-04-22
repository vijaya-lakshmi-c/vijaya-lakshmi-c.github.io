
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
  }
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: "smooth"
    });

    menu.classList.add("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

window.onload = function () {
  window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = () => {
  window.scrollTo(0, 0);
};