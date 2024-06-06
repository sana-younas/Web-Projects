document.addEventListener("scroll", function () {
  const images = document.querySelector(".image-container img");
  const sectionTop = document
    .querySelector(".sticky-section")
    .getBoundingClientRect().top;

  images.forEach((img, index) => {
    const imgTop = img.getBoundingClientRect().top;
    const imgHeight = img.offsetHeight;

    if (imgTop <= sectionTop && imgTop + imgHeight > sectionTop) {
      img.classList.add("sticky");
    } else {
      img.classList.remove("sticky");
    }
  });
});
