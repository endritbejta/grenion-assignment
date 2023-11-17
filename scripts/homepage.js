//////////////////////////////////////////////////////////////////////////
/////////// selectors
const header = document.querySelector(".header");
const headerReferTo = document.querySelector(".referTo");
const slider = document.querySelector(".slider");
const nextSlide = document.querySelector(".slider__btn--next");
const prevSlide = document.querySelector(".slider__btn--prev");
const bestSeller = document.querySelector(".products__type--best-seller");
const lineOFTheMonth = document.querySelector(
  ".products__type--line-of-the-month"
);
const productsLine = document.querySelector(".line");
const productsSlider = document.querySelector(".products__slider");
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
  rootMargin: "100px", // No additional margin
  threshold: 0, // Report when any part of the element is not visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // Element is no longer intersecting with the viewport
      console.log("Element is not in view");
      header.style.transform = "translateY(-100%)";
      header.animate(
        {
          position: "fixed",
          top: "0",
          left: "0",
          transform: "translateY(0)",
          backgroundColor: "#ecf3f9",
          color: "black",
          fill: "black",
        },
        {
          duration: 300,
          fill: "forwards",
        }
      );
      //  Perform actions or trigger events when the element is not in view
    } else if (entry.isIntersecting) {
      header.animate(
        {
          position: "absolute",
          top: "0",
          transform: "translateY(0)",
          left: "0",
          backgroundColor: "transparent",
          color: "white",
          fill: "white",
        },
        {
          duration: 100,
          fill: "forwards",
        }
      );
    }
  });
}, options);

observer.observe(headerReferTo);

const hamburger = document.querySelector(".header__route-item--hamburger");
const mobileNavHolder = document.querySelector(".header__nav-holder");
const mobileNav = document.querySelector(".header__mobileNav");
const xMark = document.querySelector(".header__mobile-x-mark");
hamburger.addEventListener("click", () => {
  mobileNav.style.opacity = "1";
  mobileNav.style.pointerEvents = "unset";
  mobileNavHolder.style.transform = "translateX(0)";
});
console.log(xMark);
xMark.addEventListener("click", () => {
  mobileNav.style.opacity = "0";
  mobileNav.style.pointerEvents = "none";
  mobileNavHolder.style.transform = "translateX(100%)";
});
// /////////////////////////////////////////////////////////////////
//  slider functions and slide handler

const slideCreator = (slide, i) => {
  console.log(slide);
  return `<div style='background-image: url(${slide.img})' class="slider__photoholder slider__${i}">
            <div class="slider__photo-content">
              <h3 class="heading-1">${slide.title}</h3>
              <button class="button-type1"><span>${slide.btnContent}</span></button>
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

////////////////////////////////////////////////////////
//// slider comes out of view, and we show the button to scroll to top

const options3 = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const sliderObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.querySelector(".scrollToTop").style.opacity = "1";
    } else if (entry.isIntersecting) {
      document.querySelector(".scrollToTop").style.opacity = "0";
    }
  });
}, options3);

sliderObserver.observe(slider);

/////////////////////////////////////////////////////////////
////////////// products manager here

const productsData = [
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Mermaid squad geschenk set",
    price: "324 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Hydration Starter Set",
    price: "59 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Repairing Routine Set",
    price: "79 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Hydration routine set",
    price: "99.99 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Volume Starter Set",
    price: "59.99 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Skincare geschenk set",
    price: "126.99 $",
  },
];

const lineOfMonthProducts = [
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Mermaid squad geschenk set",
    price: "324 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Mermaid squad geschenk set",
    price: "324 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Mermaid squad geschenk set",
    price: "324 $",
  },
  {
    type: "1",
    cover:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-mermaid_claymask_specialbox_DE_2_900x.jpg?v=1668074116",
    image:
      "https://cas8sjpcu0gqt4c8-61494100134.shopifypreview.com/cdn/shop/products/mm-claymask_specialbox-carrousel-1_900x.jpg?v=1668074116",
    title: "Mermaid squad geschenk set",
    price: "324 $",
  },
];

console.log(productsSlider);

const productsCreator = (product, i) => {
  return `<div class="products__product">
              <div class="products__image-holder">
                <div style="background-image: url('${product.cover}')" class="cover"></div>
                <div style="background-image: url('${product.image}')" class="image"></div>
                <button class="btn products__btn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
              </div>
              <p class="heading-4 products__product-title">
                ${product.title}
              </p>
              <p class="heading-3 products__product-price">${product.price}</p>
            </div>`;
};

// initialize the width of the active to be the width of the bestseller container
productsLine.style.setProperty(
  "--active-width",
  bestSeller.offsetWidth / productsLine.offsetWidth
);
// lining up the active line with best seller container
productsLine.style.setProperty("--translate-x", `-${bestSeller.offsetWidth}px`);

// function to replace the html
const replaceHtml = (html) => {
  productsSlider.innerHTML = html;
};

const bestSellerData = productsData.map((product, i) =>
  productsCreator(product, i)
);

const lineOfMonthData = lineOfMonthProducts.map((product, i) =>
  productsCreator(product, i)
);

productsSlider.innerHTML = lineOfMonthData.join("");
console.log(productsSlider);
// on click then we change the width to its desired value and we fill the products slider with data
bestSeller.addEventListener("click", () => {
  const width = bestSeller.offsetWidth / productsLine.offsetWidth;
  productsLine.style.setProperty("--active-width", `${width}`);
  productsLine.style.setProperty("--translate-x", `-${75}px`);
  replaceHtml(bestSellerData.join(""));
  document
    .querySelectorAll(".cover")
    .forEach((cover, i) => (cover.style.animationDelay = `${i / 7}s`));
});
lineOFTheMonth.addEventListener("click", () => {
  const width = lineOFTheMonth.offsetWidth / productsLine.offsetWidth;
  productsLine.style.setProperty("--active-width", `${width}`);
  productsLine.style.setProperty("--translate-x", `${45}px`);
  replaceHtml(lineOfMonthData.join(""));
  document.querySelectorAll(".cover").forEach((cover, i) => {
    cover.style.animationDelay = `${i / 10}s`;
    cover.style.animationFillMode = "forwards";
  });
});

const options2 = {
  root: null,
  rootMargin: 400,
  threshold: 0,
};

const productsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is no longer intersecting with the viewport
      const products = document.querySelectorAll(".products__image-holder");
      console.log(products);
      products.forEach((product) => {
        console.log(product);
        product.style.animationPlayState = "running";
      });
      // Perform actions or trigger events when the element is not in view
      productsObserver.unobserve(productsSlider);
    }
  });
}, options);

productsObserver.observe(productsSlider);

//////////////////////////////////////////////////////////////////////////
///// slider buttons handlers
const productsButtonNext = document.querySelector(".products__slider-next");
const productsButtonPrev = document.querySelector(".products__slider-prev");

productsButtonPrev.addEventListener("click", () => {
  console.log("clicked");
});

productsButtonNext.addEventListener("click", () => {
  productsSlider.animate(
    {
      transform: "translateX(-50%)",
    },
    {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    }
  );
  productsButtonNext.animate(
    {
      opacity: 0,
      pointerEvents: "none",
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
  productsButtonPrev.animate(
    {
      opacity: 1,
      pointerEvents: "unset",
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
});

productsButtonPrev.addEventListener("click", () => {
  productsSlider.animate(
    {
      transform: "translateX(0%)",
    },
    {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
    }
  );
  productsButtonPrev.animate(
    {
      opacity: 0,
      pointerEvents: "none",
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
  productsButtonNext.animate(
    {
      opacity: 1,
      pointerEvents: "unset",
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
});

//////////////////////////////////////////////////////
///////////// testimonials logic

const testimonialsHolder = document.querySelector(".testimonials__holder");
const testimonialsButtons = document.querySelectorAll(
  ".testimonials-actions__btn"
);
const nextButton = document.querySelector(".testimonials-actions__btn--next");
const prevButton = document.querySelector(".testimonials-actions__btn--prev");

const testimonial = document.querySelector(".testimonial");
const testimonialWidth = (testimonial.offsetWidth + 20) * 3; // this makes so we scroll 3 testimonials with one click and 20px for the gap
testimonialsButtons.forEach((button) =>
  button.addEventListener("click", () => {
    let newScrollLeft;
    if (button.id === "next") {
      newScrollLeft =
        testimonialsHolder.scrollLeft +
        testimonialWidth +
        testimonial.offsetWidth;
    } else {
      newScrollLeft = testimonialsHolder.scrollLeft - testimonialWidth;
    }

    console.log(newScrollLeft);

    testimonialsHolder.scrollLeft +=
      button.id === "next" ? testimonialWidth : -testimonialWidth;
    console.log("scroll: ", newScrollLeft);
    console.log("width: ", testimonialsHolder.offsetWidth);
    if (newScrollLeft === 0 || newScrollLeft < 0) {
      prevButton.style.opacity = 0;
      prevButton.style.pointerEvents = "none";
    }

    if (newScrollLeft > 0 && newScrollLeft < testimonialsHolder.offsetWidth) {
      prevButton.style.opacity = 1;
      nextButton.style.opacity = 1;
      prevButton.style.pointerEvents = "unset";
      nextButton.style.pointerEvents = "unset";
    }
    console.log(newScrollLeft, testimonialsHolder.offsetWidth);
    if (newScrollLeft > testimonialsHolder.offsetWidth - 200) {
      console.log("true");
      nextButton.style.opacity = 0;
      nextButton.style.pointerEvents = "none";
    }
  })
);

let startX, startScrollLeft;

const dragging = (e) => {
  testimonialsHolder.classList.add("dragging");
  testimonialsHolder.scrollLeft = startScrollLeft - (e.pageX - startX);
  const newScrollLeft = testimonialsHolder.scrollLeft - (e.pageX - startX);
  if (newScrollLeft === 0 || newScrollLeft < 0) {
    prevButton.style.opacity = 0;
    prevButton.style.pointerEvents = "none";
  }

  if (newScrollLeft > 0 && newScrollLeft < testimonialsHolder.offsetWidth) {
    prevButton.style.opacity = 1;
    nextButton.style.opacity = 1;
    prevButton.style.pointerEvents = "unset";
    nextButton.style.pointerEvents = "unset";
  }

  if (newScrollLeft >= testimonialsHolder.offsetWidth) {
    console.log("true");
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
  }
};

const mousedown = (e) => {
  testimonialsHolder.addEventListener("mousemove", dragging);
  testimonialsHolder.style.cursor = "grabbing";
  startX = e.pageX;
  startScrollLeft = testimonialsHolder.scrollLeft;
};

const mouseup = () => {
  console.log("firing");
  testimonialsHolder.classList.remove("dragging");
  testimonialsHolder.style.cursor = "grab";

  testimonialsHolder.removeEventListener("mousemove", dragging);
};

testimonialsHolder.addEventListener("mousedown", mousedown);
testimonialsHolder.addEventListener("mouseup", mouseup);
