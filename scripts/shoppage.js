const products = [
  {
    id: "12",
    cover: "path/to/cover-image-0.jpg",
    image: "path/to/product-image-0.jpg",
    date: "2023-11-15",
    price: "43.21",
    sold: 8,
    title: "Hydration Set",
    benefits: ["shine", "volume", "humidity", "intensive-repair"],
    productType: "hair-mask",
  },
  {
    id: "13",
    cover: "path/to/cover-image-1.jpg",
    image: "path/to/product-image-1.jpg",
    date: "2023-11-15",
    price: "29.99",
    sold: 5,
    title: "Eyelash set",
    benefits: ["shine", "humidity"],
    productType: "shampoo-conditioner",
  },
  {
    id: "14",
    cover: "path/to/cover-image-2.jpg",
    image: "path/to/product-image-2.jpg",
    date: "2023-11-15",
    price: "41.25",
    sold: 10,
    benefits: ["intensive-repair"],
    title: "Hair set",
    productType: "styling-and-care",
  },
  {
    id: "15",
    cover: "path/to/cover-image-3.jpg",
    image: "path/to/product-image-3.jpg",
    date: "2023-11-15",
    price: "35.50",
    sold: 15,
    title: "Well care set",
    benefits: ["shine"],
    productType: "starter-mermaid",
  },
  {
    id: "16",
    cover: "path/to/cover-image-4.jpg",
    image: "path/to/product-image-4.jpg",
    date: "2023-11-15",
    price: "50.00",
    sold: 3,
    title: "Moustorizing",
    benefits: ["intensive-repair"],
    productType: "expert-mermaid",
  },
  {
    id: "17",
    cover: "path/to/cover-image-5.jpg",
    image: "path/to/product-image-5.jpg",
    date: "2023-11-15",
    price: "27.80",
    sold: 7,
    title: "Nourishing set",
    benefits: ["volume"],
    productType: "starter-mermaid",
  },
  {
    id: "18",
    cover: "path/to/cover-image-6.jpg",
    image: "path/to/product-image-6.jpg",
    date: "2023-11-15",
    price: "39.99",
    sold: 12,
    title: "Morning set",
    benefits: ["shine", "intensive-repair"],
    productType: -"shampoo-conditioner",
  },
  {
    id: "19",
    cover: "path/to/cover-image-7.jpg",
    image: "path/to/product-image-7.jpg",
    date: "2023-11-15",
    price: "22.49",
    sold: 6,
    title: "Night Set",
    benefits: ["shine", "humidity"],
    productType: "hair-mask",
  },
  {
    id: "20",
    cover: "path/to/cover-image-8.jpg",
    image: "path/to/product-image-8.jpg",
    date: "2023-11-15",
    price: "45.30",
    sold: 9,
    title: "Always ready",
    benefits: ["humidity"],
    productType: "hair-mask",
  },
  {
    id: "21",
    cover: "path/to/cover-image-9.jpg",
    image: "path/to/product-image-9.jpg",
    date: "2023-11-15",
    price: "54.75",
    sold: 12,
    title: "Never ever rest",
    benefits: ["intensive-repair"],
    productType: "styling-and-care",
  },
  {
    id: "22",
    cover: "path/to/cover-image-10.jpg",
    image: "path/to/product-image-10.jpg",
    date: "2023-11-15",
    price: "34.50",
    sold: 18,
    title: "Krem per dur",
    benefits: ["shine"],
    productType: "styling-and-care",
  },
  {
    id: "23",
    cover: "path/to/cover-image-11.jpg",
    image: "path/to/product-image-11.jpg",
    date: "2023-11-15",
    price: "28.75",
    sold: 11,
    title: "Hair ruiner",
    benefits: ["volume"],
    productType: "shampoo-conditioner",
  },
  {
    id: "24",
    cover: "path/to/cover-image-12.jpg",
    image: "path/to/product-image-12.jpg",
    date: "2023-11-15",
    price: "42.99",
    sold: 9,
    title: "Elbow smoother",
    benefits: ["humidity"],
    productType: "expert-mermaid",
  },
  {
    id: "25",
    cover: "path/to/cover-image-13.jpg",
    image: "path/to/product-image-13.jpg",
    date: "2023-11-15",
    price: "31.25",
    sold: 14,
    title: "Handwasher",
    benefits: ["intensive-repair"],
    productType: "starter-mermaid",
  },
  {
    id: "26",
    cover: "path/to/cover-image-14.jpg",
    image: "path/to/product-image-14.jpg",
    date: "2023-11-15",
    price: "48.90",
    sold: 5,
    title: "Scalp shampoo",
    benefits: ["volume"],
    productType: "hair-mask",
  },
  {
    id: "27",
    cover: "path/to/cover-image-15.jpg",
    image: "path/to/product-image-15.jpg",
    date: "2023-11-15",
    price: "25.75",
    sold: 16,
    title: "Nail polisher",
    benefits: ["intensive-repair"],
    productType: "expert-mermaid",
  },
  {
    id: "28",
    cover: "path/to/cover-image-16.jpg",
    image: "path/to/product-image-16.jpg",
    date: "2023-11-15",
    price: "37.80",
    sold: 8,
    title: "Facemask",
    productType: "starter-mermaid",
    benefits: ["humidity"],
  },
  {
    id: "29",
    cover: "path/to/cover-image-17.jpg",
    image: "path/to/product-image-17.jpg",
    date: "2023-11-15",
    price: "23.45",
    sold: 13,
    title: "HandCare set",
    benefits: ["shine", "intensive-repair"],
    productType: "hair-care",
  },
  {
    id: "30",
    cover: "path/to/cover-image-18.jpg",
    image: "path/to/product-image-18.jpg",
    date: "2023-11-15",
    price: "40.20",
    sold: 10,
    title: "Eyelashes set",
    benefits: ["humidity", "intensive-repair"],
    productType: "shampoo-conditioner",
  },
  {
    id: "31",
    cover: "path/to/cover-image-19.jpg",
    image: "path/to/product-image-19.jpg",
    date: "2023-11-15",
    price: "29.99",
    sold: 15,
    title: "Eyebrows set",
    benefits: ["shine", "volume"],
    productType: "starter-mermaid",
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
              <p class="heading-3 products__product-price">€ ${product.price}</p>
            </div>`;
};

const chipGenerator = (chip) => {
  return `<div class="chip chip-${chip}">
                <p class="chip-title">${chip}</p>
                <div class="deleteChip">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="currentColor"></path> </g></svg></div>
              </div>`;
};

let benefitsSelected = [];
let productTypeSelected = [];
let radioButtonActive;
let sorted = [...products];

const chipRemover = (chip) => {
  document.querySelector(`.chip-${chip}`)?.remove();
};

const productsItemToBeRendered = products.map((product) =>
  productGenerator(product)
);
const chipContainer = document.querySelector(".filter__chip-holder");

const addChipToChipContainer = (chip) => {
  chipContainer.insertAdjacentHTML("beforeend", chipGenerator(chip));
};

chipContainer.addEventListener("click", (e) => {
  if (e.target.closest(".deleteChip")) {
    const chip = e.target.closest(".chip");
    chip.remove();
    const chipText = chip.querySelector("p").innerText;
    benefitsSelected = benefitsSelected.filter(
      (benefit) => benefit !== chipText
    );
    const inputOfClickedChip = document.querySelector(`input#${chipText}`);
    inputOfClickedChip.checked = false;
    // dispatching a new event to handle the change in our input
    const changeEvent = new Event("change");
    inputOfClickedChip.dispatchEvent(changeEvent);
  }
});

// adding all eventlistener to inputs
const allInputs = document.querySelectorAll("input");

const filterProducts = (type, filterOptionToCheck) => {
  console.log(type);
  if (type === "benefits") {
    console.log("running");
    sorted = sorted.filter((product) => {
      return filterOptionToCheck.some((benefit) =>
        product.benefits.includes(benefit)
      );
    });
  } else if (type === "product-type") {
    sorted = sorted.filter((product) => {
      return filterOptionToCheck.some((productType) =>
        productType.includes(product.productType)
      );
    });
    console.log("sorted form product type: ", sorted);
  }
};

const sortProducts = (type) => {
  console.log("sorted form sortProducts: ", sorted);
  switch (type) {
    case "a-to-z":
      sorted = sorted.sort((a, b) => {
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
      sorted = sorted.sort((a, b) => {
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
      sorted = sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "l-to-h":
      sorted = sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "n-to-o":
      break;
    case "o-to-n":
      break;
    case "most-sold":
      sorted = sorted.sort((a, b) => b.sold - a.sold);
      break;
    default:
      break;
  }
};

allInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
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
        console.log("changed");
        if (input.checked) {
          benefitsSelected.push("shine");
          addChipToChipContainer("shine");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "shine"
          );
          chipRemover("shine");
        }
        break;
      case "volume":
        console.log(input.checked);
        if (input.checked) {
          benefitsSelected.push("volume");
          addChipToChipContainer("volume");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "volume"
          );
          chipRemover("volume");
        }
        break;
      case "humidity":
        console.log(input.checked);
        if (input.checked) {
          benefitsSelected.push("humidity");
          addChipToChipContainer("humidity");
        } else {
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "humidity"
          );
          chipRemover("humidity");
        }
        break;
      case "hair-mask":
        console.log(input.checked);
        if (input.checked) {
          productTypeSelected.push("hair-mask");
          addChipToChipContainer("hair-mask");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "hair-mask"
          );
          chipRemover("hair-mask");
        }
        break;
      case "intensive-repair":
        console.log(input.checked);
        if (input.checked) {
          productTypeSelected.push("intensive-repair");
          addChipToChipContainer("intensive-repair");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "intensive-repair"
          );
          chipRemover("intensive-repair");
        }
        break;
      case "shampoo-conditioner":
        if (input.checked) {
          productTypeSelected.push("shampoo-conditioner");
          addChipToChipContainer("shampoo-conditioner");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "shampoo-conditioner"
          );
          chipRemover("shampoo-conditioner");
        }
        break;
      case "styling-and-care":
        if (input.checked) {
          productTypeSelected.push("styling-and-care");
          addChipToChipContainer("styling-and-care");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "styling-and-care"
          );
          chipRemover("styling-and-care");
        }
        break;
      case "starter-mermaid":
        if (input.checked) {
          productTypeSelected.push("starter-mermaid");
          addChipToChipContainer("starter-mermaid");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "starter-mermaid"
          );
          chipRemover("starter-mermaid");
        }
        break;

      case "expert-mermaid":
        if (input.checked) {
          productTypeSelected.push("expert-mermaid");
          addChipToChipContainer("expert-mermaid");
        } else {
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "expert-mermaid"
          );
          chipRemover("expert-mermaid");
        }
        break;

      default:
    }

    console.log("reading");

    sortProducts(radioButtonActive);
    console.log(e.target);
    if (input.name === "benefits") {
      console.log("inside of loop");
      if (benefitsSelected.length > 0) {
        console.log("inside of loop if 1");

        filterProducts(input.name, benefitsSelected);
      }
    } else if (input.name === "product-type") {
      console.log("inside of loop if 2");
      console.log(productTypeSelected);
      if (productTypeSelected.length > 0) {
        filterProducts(input.name, productTypeSelected);
      }
    }
    console.log("sorted from to be rendered: ", sorted);
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

const productTypeFilterItem = document.getElementById("product-type");
const productTypeFilterItemOptions = productTypeFilterItem.querySelector(
  ".filter__type-options"
);
const productTypeVerticalSign =
  productTypeFilterItem.querySelector(".vertical");
const productTypeOptionsListItems =
  benefitFilterItemOptions.querySelectorAll("li");

let totalProductTypeListHeight = 0;
productTypeOptionsListItems.forEach((li) => {
  totalProductTypeListHeight += li.clientHeight;
});
productTypeFilterItem.addEventListener("click", (e) => {
  console.log("firing");
  if (!e.target.closest(".filter__type-options")) {
    if (productTypeFilterItemOptions.clientHeight === 0) {
      productTypeFilterItemOptions.style.height = `${
        totalProductTypeListHeight + 55
      }px`;
      productTypeFilterItemOptions.animate(
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
      productTypeFilterItemOptions.style.height = "0px";
      productTypeFilterItemOptions.animate(
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
    console.log(totalProductTypeListHeight);
    productTypeVerticalSign.classList.toggle("appear");
  }
});
