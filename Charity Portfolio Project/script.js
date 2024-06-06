// const header = document.querySelector(".sticky-header");
// const sticky = header.offsetTop;
// window.addEventListener("scroll", function () {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky-header");
//   } else {
//     header.classList.remove("sticky-header");
//   }
// });

//blog
document.addEventListener("DOMContentLoaded", () => {
  const blog = [
    {
      image: "images/blog1.jpg",
      title: "Help the ecosystems",
      text: "Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn.",
      button: "Read More",
    },
    {
      image: "images/blog2.jpg",
      title: "Help the ecosystems",
      text: "Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn.",
      button: "Read More",
    },
    {
      image: "images/class-img1.jpg",
      title: "Help the ecosystems",
      text: "Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn.",
      button: "Read More",
    },
    {
      image: "images/class-img2.jpg",
      title: "Help the ecosystems",
      text: "Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn.",
      button: "Read More",
    },
    {
      image: "images/class-img3.jpg",
      title: "Help the ecosystems",
      text: "Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn.",
      button: "Read More",
    },
  ];

  let currentIndex = 0;

  const image = document.querySelector(".image");
  const title = document.querySelector(".mini-heading");
  const text = document.querySelector(".mini-text");
  const btn = document.querySelector(".news-area");
  const prevButton = document.querySelector("#prevBtn");
  const nextButton = document.querySelector("#nextBtn");

  function updatedSection() {
    image.src = `${blog[currentIndex].image}`;
    title.textContent = `${blog[currentIndex].title}`;
    text.textContent = `${blog[currentIndex].text}`;
    btn.textContent = `${blog[currentIndex].button}`;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + blog.length) % blog.length;
    updatedSection();
  }

  function next() {
    currentIndex = (currentIndex + 1) % blog.length;
    updatedSection();
  }
  prevButton.addEventListener("click", prev);
  nextButton.addEventListener("click", next);
  updatedSection();
});
