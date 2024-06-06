const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));

// function show() {
//   const showEl = document.querySelectorAll(".show");
//   for (let i = 0; i < showEl.length; i++) {
//     let windowHeight = window.innerHeight;
//     let showTop = showEl[i].getBoundingClientRect().top;
//     let showPoint = 150;
//     if (showTop < windowHeight - showPoint) {
//       showEl[i].classList.add("active");
//     } else {
//       showEl[i].classList.remove("active");
//     }
//   }
// }
// window.addEventListener("scroll", show);
