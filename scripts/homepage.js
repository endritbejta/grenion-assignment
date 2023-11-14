//////////////////////////////////////////////////////////////////////////
/////////// selectors
const header = document.querySelector(".header");
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

/////////////////////////////////////////////////////////////
////////////// products manager here

// initialize the width of the active to be the width of the bestseller container
productsLine.style.setProperty(
  "--active-width",
  bestSeller.offsetWidth / productsLine.offsetWidth
);
// lining up the active line with best seller container
productsLine.style.setProperty("--translate-x", `-${bestSeller.offsetWidth}px`);

// on click then we change the width to its desired value
bestSeller.addEventListener("click", () => {
  const width = bestSeller.offsetWidth / productsLine.offsetWidth;
  productsLine.style.setProperty("--active-width", `${width}`);
  productsLine.style.setProperty("--translate-x", `-${75}px`);
});
// on click then we change the width to its desired value
lineOFTheMonth.addEventListener("click", () => {
  const width = lineOFTheMonth.offsetWidth / productsLine.offsetWidth;
  productsLine.style.setProperty("--active-width", `${width}`);
  productsLine.style.setProperty("--translate-x", `${45}px`);
});

////////////////////////////////////////////////////////////////
/////////////// products logic here

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
    type: "2",
    cover: "",
    title: "",
    price: "",
  },
  {
    type: "2",
    cover: "",
    title: "",
    price: "",
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
                +
                </button>
              </div>
              <p class="heading-4 products__product-title">
                ${product.title}
              </p>
              <p class="heading-3 products__product-price">${product.price}</p>
            </div>`;
};

productsData.forEach((product, i) => {
  productsSlider.insertAdjacentHTML("beforeend", productsCreator(product, i));
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
      products.forEach(
        (product) => (product.style.animationPlayState = "running")
      );
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
