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

const filterProducts = () => {
  if (benefitsSelected.length > 0 && productTypeSelected.length === 0) {
    console.log("only benefits: ", benefitsSelected);
    sorted = products.filter((product) => {
      return benefitsSelected.some((benefit) =>
        product.benefits.includes(benefit)
      );
    });
  } else if (benefitsSelected.length > 0 && productTypeSelected.length > 0) {
    console.log("both active", benefitsSelected, productTypeSelected);
    if (benefitsSelected.length > 0 || productTypeSelected.length > 0) {
      console.log("both active", benefitsSelected, productTypeSelected);
      sorted = products.filter((product) => {
        const benefitsMatch = benefitsSelected.every((benefit) =>
          product.benefits.includes(benefit)
        );
        const productTypesMatch = productTypeSelected.includes(
          product.productType
        );

        return benefitsMatch && productTypesMatch;
      });
    }
  } else if (benefitsSelected.length === 0 && productTypeSelected.length > 0) {
    console.log("only product type filter: ", productTypeSelected);
    sorted = products.filter((product) => {
      return productTypeSelected.some((productType) =>
        productType.includes(product.productType)
      );
    });
  }
  return sorted;
};

const sortProducts = (type) => {
  console.log(productTypeSelected, benefitsSelected);
  const arrayToSort =
    productTypeSelected.length > 0 || benefitsSelected.length > 0
      ? filterProducts()
      : products;
  console.log("array to sort: ", arrayToSort);
  switch (type) {
    case "a-to-z":
      sorted = arrayToSort.sort((a, b) => {
        const titleA = b.title.toUpperCase();
        const titleB = a.title.toUpperCase();

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
      sorted = arrayToSort.sort((a, b) => {
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
      sorted = arrayToSort.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      break;
    case "l-to-h":
      sorted = arrayToSort.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      break;
    case "n-to-o":
      break;
    case "o-to-n":
      break;
    case "most-sold":
      sorted = arrayToSort.sort((a, b) => b.sold - a.sold);
      break;
    default:
      // no filter if no radio button is selected
      sorted = arrayToSort;
      break;
  }
};

//////////////////////////////////////////////////////
// handling input changes
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
      ///// handling input changes of sort by filter
      case "shine":
        /// handling both selecting and unselecting a benefit filter
        if (input.checked) {
          /// adding a new element to benefits array
          benefitsSelected.push("shine");
          /// adding the corresponding chip to chip container
          addChipToChipContainer("shine");
        } else {
          // removing benefits from array
          benefitsSelected = benefitsSelected.filter(
            (benefit) => benefit !== "shine"
          );
          // removing benefit chip
          chipRemover("shine");
        }
        break;
      case "volume":
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
      ///// handling input changes of products type filter

      case "hair-mask":
        // handling both selecting and unselecting checkbox
        if (input.checked) {
          // adding a new element to array of product type
          productTypeSelected.push("hair-mask");
          // adding chip to chip container
          addChipToChipContainer("hair-mask");
        } else {
          /// removing the unselected element from array
          productTypeSelected = productTypeSelected.filter(
            (productType) => productType !== "hair-mask"
          );
          /// removign the chip from chip container
          chipRemover("hair-mask");
        }
        break;
      case "intensive-repair":
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

    // sorting products by radio buttons
    // checking if we have any benefit filter active
    if (input.name === "benefits" && benefitsSelected.length > 0) {
      filterProducts(input.name, benefitsSelected);
      // checking if we have any product-type filter active
    } else if (
      input.name === "product-type" &&
      productTypeSelected.length > 0
    ) {
      filterProducts(input.name, productTypeSelected);
    }
    sortProducts(radioButtonActive);

    let newProductsToBeRendered;
    // this check is made to handle the case when all of the filter are unselected, after being previosly selected
    if (benefitsSelected.length === 0 && productTypeSelected.length === 0) {
      newProductsToBeRendered = sorted.map((newSortedProduct) =>
        productGenerator(newSortedProduct)
      );
    } else {
      newProductsToBeRendered = sorted.map((newSortedProduct) =>
        productGenerator(newSortedProduct)
      );
    }
    /// html render
    shopProductsContainer.innerHTML = newProductsToBeRendered.join("");
  });
});
// initializing products
shopProductsContainer.innerHTML = productsItemToBeRendered.join("");

//////////////////////////////////////////////////////////////////
////////////// sort by appear effect and logic
const sortByFilterContainer = document.querySelector(".filter__type--sort-by");
const sortByFilterContainerOptions = document.querySelector(
  ".filter__type-options"
);
const verticalLineToMakePlusSign =
  sortByFilterContainer.querySelector(".vertical");
const liElements = sortByFilterContainerOptions.querySelectorAll("li");
let totalHeight = 0;
liElements.forEach((li) => {
  totalHeight += li.clientHeight;
});
sortByFilterContainer.addEventListener("click", (e) => {
  if (sortByFilterContainerOptions.clientHeight === 0) {
    sortByFilterContainerOptions.style.display = "block";
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
    sortByFilterContainerOptions.style.display = "none";
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

//////////////////////////////////////////////////////////////////
////////////// benefits appear effect and logic
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
      benefitFilterItemOptions.style.display = "block";
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
      benefitFilterItemOptions.style.display = "none";
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

//////////////////////////////////////////////////////////////////
////////////// product type appear effect and logic
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
      productTypeFilterItemOptions.style.display = "block";
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
      productTypeFilterItemOptions.style.display = "none";
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

/// remove all filters
const removeAllFiltersButton = document.getElementById("remove-filters");
console.log(removeAllFiltersButton);
const changeEvent = new Event("change");
removeAllFiltersButton.addEventListener("click", () => {
  allInputs.forEach((input) => {
    if (input.checked) {
      input.checked = !input.checked;
    }
    input.dispatchEvent(changeEvent);
  });
});
