const oneItem = {
  id: "34",
  title: "The wild hibiscus Clay mask",
  subTitle: "Reinigung + Glanz",
  price: "24.99",
  newPrice: "12.50",
  highlights: [
    "Cleansed scalp",
    "Shiny hair",
    "Protects hair color",
    "Contains 96.7% natural ingredients",
  ],
  description:
    "The new Hair + Scalp Clay Mask cleanses the scalp with clay and gives every hair type shiny hair. The best thing: you apply it to dry hair!",
  howTo: `Find a relaxing dream island, go ashore and off you go:  MERMAID TIME! Apply the mask to dry scalp, massage it in waves and, preferably with a comb, distribute it to the ends of the hair. Now it's time:  SHELLLAXEN. Sit back and relax... watch an episode on Netflix, make plans for the future with your best friends or just daydream a bit. The mask should be left on  for at least 15 minutes  , but can even be left in the hair overnight. Treat yourself! Tip: Wrap a towel around your head, as the warmth allows the magical active ingredients to develop better. Then jump into the waves and  rinse  your hair thoroughly  . You can also use shampoo if you feel like it.
In Love? Then  show us your #mermazinghair on Instagram  @mermaidme.de`,
  ingredients: `Aqua (Water), Cetearyl Alcohol, Glycerin, Caprylic/Capric Triglyceride, Distearoylethyl Hydroxyethylmonium Methosulfate, Kaolin, Coconut Alkanes, Stearamidopropyl Dimethylamine, 1,2-Hexanediol, Bentonite, Panthenol, Plukenetia Volubilis (Inca Inchi) Seed Oil*, Hibiscus Sabdariﬀa Flower Extract, Kappaphycus Alvarezii (Algae) Extract, Euterpe Oleracea Fruit Extract*, Tocopherol, Coco-Glucoside, Coco-Caprylate/Caprate, Xanthan Gum, Propanediol, Parfum (Fragrance), Limonene**, Linalool**, Caprylhydroxamic Acid, Citric Acid , Levulinic Acid, Sodium Levulinate, Sodium Benzoate, Potassium Sorbate, CI 77491 (Iron Oxides), CI 77499 (Iron Oxides)`,
};
const nextImageButton = document.querySelector(".gallery__actions--next");
const prevImageButton = document.querySelector(".gallery__actions--prev");
const galleryPhotos = document.querySelector(".gallery__photos");
const images = galleryPhotos.querySelectorAll("img");
const galleryPreview = document.querySelector(".gallery__preview");
const previewImages = galleryPreview.querySelectorAll("img");

console.log(images, previewImages);

// current slide
let currentSlide = 0;
nextImageButton.addEventListener("click", () => {
  // we make the button of the current photo invisible
  previewImages[currentSlide].style.border = "2px solid transparent";
  // add 1 when we click next button, and handling special cases
  if (currentSlide === images.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  // moving the gallery photos on click
  galleryPhotos.style.transform = `translateX(-${currentSlide * 100}%)`;
  // setting the new border to the current photo shown
  previewImages[currentSlide].style.border = "2px solid black";
});

prevImageButton.addEventListener("click", () => {
  previewImages[currentSlide].style.border = "2px solid transparent";

  if (currentSlide === 0) {
    currentSlide = images.length - 1;
    console.log("loop1:", currentSlide);
  } else {
    currentSlide -= 1;
  }
  console.log(currentSlide);
  galleryPhotos.style.transform = `translateX(-${currentSlide * 100}%)`;
  previewImages[currentSlide].style.border = "2px solid black";
});

const itemInfoContainer = document.querySelector(".item__info");
const additionalInfoContainer = itemInfoContainer.querySelector(
  ".additional-information"
);

const additionalInfoTitles = additionalInfoContainer.querySelectorAll(".title");

// adding event listeners to each one of the titles
additionalInfoTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    additionalInfoTitles.forEach((titleInside) => {
      if (titleInside.id !== title.id) {
        title.classList.remove("activeTitle");
      }
    });
    additionalInfoContainer
      .querySelectorAll(".context")
      .forEach((context) => context.classList.remove("activeContext"));
    // adding the active state to the title we clicked
    title.classList.toggle("activeTitle");
    // finding the context of the said clicked title and updating it
    const context = additionalInfoContainer.querySelector(
      `.${title.id}-context`
    );
    console.log(context);
    context.classList.toggle("activeContext");
  });
});
