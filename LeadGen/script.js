// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".slideAnimation");

//   setTimeout(() => {
//     elements.forEach((element) => {
//       element.style.transform = "translateX(0)";
//       element.style.opacity = "1";
//     });
//     document.getElementById("slide-left").style.transform = "translateX(0)";
//     document.getElementById("slide-right").style.transform = "translateX(0)";
//   }, 500);
// });

document.addEventListener("DOMContentLoaded", function () {
  const slideLeftSections = document.querySelectorAll(".slide-left");
  const slideRightSections = document.querySelectorAll(".slide-right");
  const slideBottomSections = document.querySelectorAll(".slide-bottom");

  const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.25, // Trigger when 25% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("slide-left")) {
          entry.target.style.animation = "slideInLeft 1s ease-out forwards";
        } else if (entry.target.classList.contains("slide-right")) {
          entry.target.style.animation = "slideInRight 1s ease-out forwards";
        } else if (entry.target.classList.contains("slide-bottom")) {
          entry.target.style.animation = "slideInBottom 1s ease-out forwards";
        }
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, observerOptions);

  slideLeftSections.forEach((section) => observer.observe(section));
  slideRightSections.forEach((section) => observer.observe(section));
  slideBottomSections.forEach((section) => observer.observe(section));
});
