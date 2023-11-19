const products = [
  {
    id: 12,
    cover: "path/to/cover-image-0.jpg",
    image: "path/to/product-image-0.jpg",
    date: "2023-11-15",
    price: "43.21",
    sold: 8,
    title: "Hydration Set",
    benefits: ["shine", "volume", "humidity", "intensive-repair"],
  },
  {
    id: 13,
    cover: "path/to/cover-image-1.jpg",
    image: "path/to/product-image-1.jpg",
    date: "2023-11-15",
    price: "29.99",
    sold: 5,
    title: "Eyelash set",
    benefits: ["shine", "humidity"],
  },
  {
    id: 14,
    cover: "path/to/cover-image-2.jpg",
    image: "path/to/product-image-2.jpg",
    date: "2023-11-15",
    price: "41.25",
    sold: 10,
    benefits: ["intensive-repair"],
    title: "Hair set",
  },
  {
    id: 15,
    cover: "path/to/cover-image-3.jpg",
    image: "path/to/product-image-3.jpg",
    date: "2023-11-15",
    price: "35.50",
    sold: 15,
    title: "Well care set",
    benefits: ["shine"],
  },
  {
    id: 16,
    cover: "path/to/cover-image-4.jpg",
    image: "path/to/product-image-4.jpg",
    date: "2023-11-15",
    price: "50.00",
    sold: 3,
    title: "Moustorizing",
    benefits: ["intensive-repair"],
  },
  {
    id: 17,
    cover: "path/to/cover-image-5.jpg",
    image: "path/to/product-image-5.jpg",
    date: "2023-11-15",
    price: "27.80",
    sold: 7,
    title: "Nourishing set",
    benefits: ["volume"],
  },
  {
    id: 18,
    cover: "path/to/cover-image-6.jpg",
    image: "path/to/product-image-6.jpg",
    date: "2023-11-15",
    price: "39.99",
    sold: 12,
    title: "Morning set",
    benefits: ["shine", "intensive-repair"],
  },
  {
    id: 19,
    cover: "path/to/cover-image-7.jpg",
    image: "path/to/product-image-7.jpg",
    date: "2023-11-15",
    price: "22.49",
    sold: 6,
    title: "Night Set",
    benefits: ["shine", "humidity"],
  },
  {
    id: 20,
    cover: "path/to/cover-image-8.jpg",
    image: "path/to/product-image-8.jpg",
    date: "2023-11-15",
    price: "45.30",
    sold: 9,
    title: "Always ready",
    benefits: ["humidity"],
  },
  {
    id: 21,
    cover: "path/to/cover-image-9.jpg",
    image: "path/to/product-image-9.jpg",
    date: "2023-11-15",
    price: "54.75",
    sold: 12,
    title: "Never ever rest",
    benefits: ["intensive-repair"],
  },
  {
    id: 22,
    cover: "path/to/cover-image-10.jpg",
    image: "path/to/product-image-10.jpg",
    date: "2023-11-15",
    price: "34.50",
    sold: 18,
    title: "Bali man",
    benefits: ["shine"],
  },
  {
    id: 23,
    cover: "path/to/cover-image-11.jpg",
    image: "path/to/product-image-11.jpg",
    date: "2023-11-15",
    price: "28.75",
    sold: 11,
    title: "Senet e bajramit",
    benefits: ["volume"],
  },
  {
    id: 24,
    cover: "path/to/cover-image-12.jpg",
    image: "path/to/product-image-12.jpg",
    date: "2023-11-15",
    price: "42.99",
    sold: 9,
    title: "Flija, pite sene",
    benefits: ["humidity"],
  },
  {
    id: 25,
    cover: "path/to/cover-image-13.jpg",
    image: "path/to/product-image-13.jpg",
    date: "2023-11-15",
    price: "31.25",
    sold: 14,
    title: "Ta kona, ta kona",
    benefits: ["intensive-repair"],
  },
  {
    id: 26,
    cover: "path/to/cover-image-14.jpg",
    image: "path/to/product-image-14.jpg",
    date: "2023-11-15",
    price: "48.90",
    sold: 5,
    title: "Para konviktit numer 5",
    benefits: ["volume"],
  },
  {
    id: 27,
    cover: "path/to/cover-image-15.jpg",
    image: "path/to/product-image-15.jpg",
    date: "2023-11-15",
    price: "25.75",
    sold: 16,
    title: "Le mos u merr",
    benefits: ["intensive-repair"],
  },
  {
    id: 28,
    cover: "path/to/cover-image-16.jpg",
    image: "path/to/product-image-16.jpg",
    date: "2023-11-15",
    price: "37.80",
    sold: 8,
    title: "Facemask",
    benefits: ["humidity"],
  },
  {
    id: 29,
    cover: "path/to/cover-image-17.jpg",
    image: "path/to/product-image-17.jpg",
    date: "2023-11-15",
    price: "23.45",
    sold: 13,
    title: "HandCare set",
    benefits: ["shine", "intensive-repair"],
  },
  {
    id: 30,
    cover: "path/to/cover-image-18.jpg",
    image: "path/to/product-image-18.jpg",
    date: "2023-11-15",
    price: "40.20",
    sold: 10,
    title: "Eyelashes set",
    benefits: ["humidity", "intensive-repair"],
  },
  {
    id: 31,
    cover: "path/to/cover-image-19.jpg",
    image: "path/to/product-image-19.jpg",
    date: "2023-11-15",
    price: "29.99",
    sold: 15,
    title: "Eyebrows set",
    benefits: ["shine", "volume"],
  },
];

const shopProductsContainer = document.querySelector(".shop-products");

const productGenerator = (product) => {
  return `<div id="${product.id}" class="products__product shop-products__product">
              <div  class="products__image-holder">
                <div style="background-image: url()" class="cover"></div>
                <div style="background-image: url()" class="image"></div>
                <button  class="btn products__btn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
              </div>
              <p class="heading-4 products__product-title">
                ${product.title}
              </p>
              <p class="heading-3 products__product-price">${product.price}</p>
            </div>`;
};

const productsItemToBeRendered = products.map((product) =>
  productGenerator(product)
);

// adding all eventlistener to inputs
const allInputs = document.querySelectorAll("input");
console.log(allInputs);

let benefitsSelected = [];
let radioButtonActive;
let sorted = [...products];

const filterProducts = (benefitsToCheck) => {
  sorted = sorted.filter((product) => {
    return benefitsToCheck.some((benefit) =>
      product.benefits.includes(benefit)
    );
  });
};

const sortProducts = (type) => {
  switch (type) {
    case "a-to-z":
      sorted = products.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      break;
    case "z-to-a":
      sorted = products.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
        return 0;
      });
      break;
    case "h-to-l":
      sorted = products.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      break;
    case "l-to-h":
      sorted = products.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      break;
    case "n-to-o":
      break;
    case "o-to-n":
      break;
    case "most-sold":
      sorted = products.sort((a, b) => b.sold - a.sold);
      break;
    default:
      sorted = [...products];
  }
};

allInputs.forEach((input) => {
  input.addEventListener("change", () => {
    console.log("benefitsSelected: ", benefitsSelected);
    switch (input.id) {
      case "selected":
        break;
      case "a-to-z":
        radioButtonActive = "a-to-z";
        break;
      case "z-to-a":
        radioButtonActive = "z-to-a";
        break;
      case "l-to-h":
        radioButtonActive = "l-to-h";
        break;
      case "h-to-l":
        radioButtonActive = "h-to-l";
        break;
      case "most-sold":
        radioButtonActive = "most-sold";
        break;
      case "shine":
        if (input.checked) {
          benefitsSelected.push("shine");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "shine"
          );
        }
        break;
      case "volume":
        console.log(input.checked);
        if (input.checked) {
          benefitsSelected.push("volume");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "volume"
          );
        }
        break;
      case "humidity":
        console.log(input.checked);
        if (input.checked) {
          benefitsSelected.push("humidity");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "humidity"
          );
        }
        break;
      case "intensive-repair":
        console.log(input.checked);
        if (input.checked) {
          benefitsSelected.push("intensive-repair");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "intensive-repair"
          );
        }
        break;
      default:
    }

    sortProducts(radioButtonActive);
    if (benefitsSelected.length > 0) {
      filterProducts(benefitsSelected);
    }
    const newProductsToBeRendered = sorted.map((newSortedProduct) =>
      productGenerator(newSortedProduct)
    );
    shopProductsContainer.innerHTML = newProductsToBeRendered.join("");
  });
});

shopProductsContainer.innerHTML = productsItemToBeRendered.join("");

const sortByFilterContainer = document.querySelector(".filter__type--sort-by");
const sortByFilterContainerOptions = document.querySelector(
  ".filter__type-options"
);
console.log(sortByFilterContainer);

const verticalLineToMakePlusSign =
  sortByFilterContainer.querySelector(".vertical");
const liElements = sortByFilterContainerOptions.querySelectorAll("li");
let totalHeight = 0;
liElements.forEach((li) => {
  totalHeight += li.clientHeight;
});
sortByFilterContainer.addEventListener("click", (e) => {
  console.log(sortByFilterContainerOptions.clientHeight);
  if (sortByFilterContainerOptions.clientHeight === 0) {
    sortByFilterContainerOptions.style.height = `${totalHeight + 30}px`;
    sortByFilterContainerOptions.animate(
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        fill: "forwards",
        easing: "ease",
        duration: 300,
        delay: 100,
      }
    );
  } else {
    sortByFilterContainerOptions.style.height = "0px";
    sortByFilterContainerOptions.animate(
      {
        opacity: 0,
        transform: "translateY(50%)",
      },
      {
        fill: "forwards",
        duration: 0,
      }
    );
  }
  console.log(totalHeight);
  verticalLineToMakePlusSign.classList.toggle("appear");
});
// making a on click handler for all of the filters

const benefitsFilterItem = document.getElementById("benefits");
const benefitFilterItemOptions = benefitsFilterItem.querySelector(
  ".filter__type-options"
);
const benefitsVerticalSign = benefitsFilterItem.querySelector(".vertical");
const benefitsOptionsListItems =
  benefitFilterItemOptions.querySelectorAll("li");

let totalBenefitsListHeight = 0;
benefitsOptionsListItems.forEach((li) => {
  totalBenefitsListHeight += li.clientHeight;
});
benefitsFilterItem.addEventListener("click", (e) => {
  console.log("firing");
  if (!e.target.closest(".filter__type-options")) {
    if (benefitFilterItemOptions.clientHeight === 0) {
      // console.log("in");
      // const sortByFilterContainerOptionsStyles = getComputedStyle(
      //   sortByFilterContainerOptions
      // );
      // console.log(sortByFilterContainerOptionsStyles.rowGap);
      benefitFilterItemOptions.style.height = `${
        totalBenefitsListHeight + 15
      }px`;
      benefitFilterItemOptions.animate(
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          fill: "forwards",
          easing: "ease",
          duration: 300,
          delay: 100,
        }
      );
    } else {
      benefitFilterItemOptions.style.height = "0px";
      benefitFilterItemOptions.animate(
        {
          opacity: 0,
          transform: "translateY(50%)",
        },
        {
          fill: "forwards",
          duration: 0,
        }
      );
    }
    console.log(totalBenefitsListHeight);
    benefitsVerticalSign.classList.toggle("appear");
  }
});
