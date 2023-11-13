//////////////////////////////////////////////////////////////////////////
/////////// selectors
const header = document.querySelector(".header");
const slider = document.querySelector(".slider");
const nextSlide = document.querySelector(".slider__btn--next");
const prevSlide = document.querySelector(".slider__btn--prev");

///////////////////////////////////////////////////////////////////////
/////////////////// dummy data
const mainSliderData = [
  {
    img: "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/files/MM-RoutineCreator-HomepageBanner-Desktop_1950x.jpg?v=1667204466",
    title: "Create your own hair routine",
    btnContent: "CREATE NOW",
  },
  {
    img: "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/files/MM-SunkissedBack-HomepageBanner-Desktop_1950x.png?v=1694011245",
    title: "Mermazing hair",
    btnContent: "ENTDECKEN",
  },
];
////////////////////////////////////////////////////////////////////
/// header
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No additional margin
  threshold: 0, // Report when any part of the element is not visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // Element is no longer intersecting with the viewport
      console.log("Element is not in view");
      header.animate(
        {
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "#ecf3f9",
          color: "black",
          fill: "black",
        },
        {
          duration: 1000,
          fill: "forwards",
        }
      );
      // Perform actions or trigger events when the element is not in view
    }
  });
}, options);

observer.observe(header);

// /////////////////////////////////////////////////////////////////
//  slider functions and slide handler
const slideCreator = (slide, i) => {
  console.log(slide);
  return `<div style='background-image: url(${slide.img})' class="slider__photoholder slider__${i}">
            <div class="slider__photo-content">
              <h3 class="heading-1">${slide.title}</h3>
              <button class="btn btn__home">${slide.btnContent}</button>
            </div>
          </div>`;
};

mainSliderData.forEach((slide, i) => {
  let photoSlider = slideCreator(slide, i);
  slider.insertAdjacentHTML("beforeend", photoSlider);
});

let currentSlide = 0;
function showSlide(index) {
  console.log(index);
  if (index < 0) {
    currentSlide = mainSliderData.length - 1;
  } else if (index >= mainSliderData.length) {
    currentSlide = 0;
  }

  slider.animate(
    { transform: `translateX(-${currentSlide * 100}%)` },
    {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    }
  );
}

nextSlide.addEventListener("click", () => {
  currentSlide += 1;
  showSlide(currentSlide);
});

prevSlide.addEventListener("click", () => {
  currentSlide -= 1;
  showSlide(currentSlide);
});
