document.addEventListener("scroll", function () {
  const logo = document.querySelector(".header-section");
  const shrinkFactor = 0.5; 
  const shrinkOn = 150;
  const scrollPosition = window.scrollY;

  if (scrollPosition > shrinkOn) {
    logo.style.transform = `scale(${shrinkFactor})`;
  } else {
    const scale = 1 - (scrollPosition / shrinkOn) * (1 - shrinkFactor);
    logo.style.transform = `scale(${scale})`;
  }
});
