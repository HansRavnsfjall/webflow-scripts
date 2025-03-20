document.addEventListener("DOMContentLoaded", function (event) {
  let loadTl = gsap.timeline();
  loadTl.from(".intro-title-1", { opacity: 0, y: "6rem", duration: 1 });
  loadTl.from(".intro-title-2", { opacity: 0, y: "6rem", duration: 1 });
  loadTl.from(".intro-bread", { opacity: 0, scale: 0.8, duration: 1 });
  loadTl.from(".intro-cta", { opacity: 0,  duration: 1 });
});
