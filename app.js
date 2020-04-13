//BURGER
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-links-active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-links-active");
  });
});

//GALLERY
function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No gallery found.");
  }
  //Variables
  const images = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;

  //Function open and close modal
  function openModal() {
    if (modal.matches(".open")) return;
    modal.classList.add("open");
  }

  function closeModal() {
    modal.classList.remove("open");
  }

  //Functions listen to event
  function handleClickOutside(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") return closeModal();
    if (e.key === "ArrowRight") return showNextImage();
    if (e.key === "ArrowLeft") return showPrevImage();
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  //Show modal and update image
  function showImage(img) {
    if (!img) {
      console.info("No image to show");
      return;
    }
    modal.querySelector("img").src = img.src;
    modal.querySelector("h2").textContent = img.title;
    currentImage = img;
    openModal();
  }

  //AddEventListeners
  images.forEach((image) =>
    image.addEventListener("click", (e) => showImage(e.currentTarget))
  );

  images.forEach((image) => {
    image.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        showImage(e.currentTarget);
      }
    });
  });

  window.addEventListener("keyup", handleKeyUp);
  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);
  modal.addEventListener("click", handleClickOutside);
}

const gallery = Gallery(document.querySelector(".gallery-photos"));
