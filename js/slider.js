// Case Slider
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const paginationContainer = document.querySelector('.pagination');
let currentIndex = 0;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function updatePagination() {
  paginationContainer.innerHTML = '';
  slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.onclick = () => goToSlide(index);
    paginationContainer.appendChild(button);
    button.classList.add('pagination-button');
  });
  paginationContainer.childNodes[currentIndex].classList.add('active');
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  updatePagination();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  updatePagination();
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
  updatePagination();
}

updatePagination();

// Review Slider
const reviewSlidesContainer = document.querySelector('.review-slides');
const reviewSlides = document.querySelectorAll('.review-slide');
const reviewPaginationContainer = document.querySelector('.review-pagination');
let currentReviewIndex = 0;

function showReviewSlide(index) {
  reviewSlidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function updateReviewPagination() {
  reviewPaginationContainer.innerHTML = '';
  reviewSlides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.onclick = () => goToReviewSlide(index);
    reviewPaginationContainer.appendChild(button);
    button.classList.add('review-pagination-button');
  });

  reviewPaginationContainer.childNodes[currentReviewIndex].classList.add('active');
}

function prevReviewSlide() {
  currentReviewIndex = (currentReviewIndex - 1 + reviewSlides.length) % reviewSlides.length;
  showReviewSlide(currentReviewIndex);
  updateReviewPagination();
}

function nextReviewSlide() {
  currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;
  showReviewSlide(currentReviewIndex);
  updateReviewPagination();
}

function goToReviewSlide(index) {
  currentReviewIndex = index;
  showReviewSlide(currentReviewIndex);
  updateReviewPagination();
}

updateReviewPagination();