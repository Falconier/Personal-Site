import anime from '/static/js/anime.es.js';

if (window.innerWidth > 840) {
  anime.timeline()
    .add({
      targets: '.letterhead .line',
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInExpo",
      duration: 700
    }).add({
      targets: '.letterhead .line',
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
      targets: '.letterhead .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.letterhead .letters-left',
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.letterhead .letters-middle',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=450'
    }).add({
      targets: '.letterhead .letters-right',
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.letterhead-subtitle .pipe',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.letterhead-subtitle .letters-middle',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.letterhead-subtitle .letters-left',
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.letterhead-subtitle .letters-right',
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    });

}
else {
  anime.timeline()
    .add({
      targets: '.letterhead .ampersand',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead .letters-left',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead .letters-middle',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead .letters-right',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead-subtitle .letters-middle',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead-subtitle .letters-left',
      opacity: [0, 1],
      duration: 10
    }).add({
      targets: '.letterhead-subtitle .letters-right',
      opacity: [0, 1],
      duration: 10
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.style.display = details.style.display === "none" ? "block" : "none";
    });
  });
});