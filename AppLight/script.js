// const testimonials = [
//   {
//     name: "Eva Smith",
//     job: "Developer",
//     image: "images/user1.jpg",
//     testimonial:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est doloribus officia officiis nesciunt ipsum cupiditate explicabo, accusamus possimus libero consectetur voluptatem eligendi iure earum, totam eius autem recusandae harum.",
//   },
//   {
//     name: "John Micheal",
//     job: "Web Designer",
//     image: "images/user2.jpg",
//     testimonial:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est doloribus officia officiis nesciunt ipsum cupiditate explicabo, accusamus possimus libero consectetur voluptatem eligendi iure earum, totam eius autem recusandae harum.",
//   },
// ];
// // current slide
// let index = 0;
// let total_slides = testimonials.length;
// let test_container = document.querySelectorAll(".testimonial_container");
// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");
// let displayTest = () => {
//   test_container.innerHtml = `
//   <p>${testimonials[index].testimonial}</p>
//   <img src=${testimonials[index].image}/>
//   <h3>${testimonials[index].name}</h3>
//   <h6>${testimonials[index].job}</h6>
//   `;
// };

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla iste ratione adipisci atque consequuntur, maiores expedita quasi unde, dicta sunt suscipit fuga laboriosam quo sint, deserunt libero!",
      author: "Eva James",
      image: "images/user1.jpg",
      title: "SEO Specialist",
    },
    {
      test: "Maiores expedita quasi unde, dicta sunt suscipit fuga laboriosam quo sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla iste ratione adipisci atque consequuntur, deserunt libero!",
      author: "Jane Smith",
      image: "images/user2.jpg",
      title: "Web Developer",
    },
    {
      test: "Autem nulla iste ratione adipisci atque consequuntur, maiores expedita quasi unde, dicta sunt suscipit fuga laboriosam quo sint, deserunt accusantium ab libero. Lorem ipsum dolor sit amet adipisicing elit.",
      author: "Sam Johnson",
      image: "images/user3.jpg",
      title: "App Developer",
    },
  ];

  let currentIndex = 0;

  const imageElement = document.querySelector(".image");
  const authorElement = document.querySelector(".author");
  const testElement = document.querySelector(".test");
  const jobTitle = document.querySelector(".job-title");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  const updateTestimonial = () => {
    jobTitle.textContent = ` ${testimonials[currentIndex].title}`;
    authorElement.textContent = `- ${testimonials[currentIndex].author}`;
    imageElement.src = `${testimonials[currentIndex].image}`;
    testElement.textContent = `${testimonials[currentIndex].test}`;
  };

  const nextTestimonial = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
  };

  const prevTestimonial = () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  };

  prevButton.addEventListener("click", prevTestimonial);
  nextButton.addEventListener("click", nextTestimonial);

  // Initialize with the first testimonial
  updateTestimonial();
});

// Smooth Scrolling
// const section1 = document.querySelector("#section--1");
// const about = document.querySelector(".about-link");

// about.addEventListener("click", function () {
//   const srecord = section1.getBoundingClientRect();
//   section1.scrollIntoViewz({ behavior: "smooth" });
// });
