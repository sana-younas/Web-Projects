document.addEventListener("scroll", function () {
  const logo = document.querySelector(".header-section");

  // Define how much to shrink
  const shrinkFactor = 0.5; // 50% of the original size

  // Define at what scroll position the logo should be fully shrunk
  const shrinkOn = 150;

  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if (scrollPosition > shrinkOn) {
    logo.style.transform = `scale(${shrinkFactor})`;
  } else {
    // Calculate the scale relative to the scroll position
    const scale = 1 - (scrollPosition / shrinkOn) * (1 - shrinkFactor);
    logo.style.transform = `scale(${scale})`;
  }
});
