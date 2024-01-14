// Case Slider
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const paginationContainer = document.querySelector('.pagination');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

slidesContainer.addEventListener('touchstart', handleTouchStart);
slidesContainer.addEventListener('touchmove', handleTouchMove);
slidesContainer.addEventListener('touchend', handleTouchEnd);

function showSlide(index) {
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function updatePagination() {
  paginationContainer.innerHTML = '';
  slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.onclick = () => goToSlide(index);
    paginationContainer.appendChild(button);
  });

  paginationContainer.childNodes[currentIndex].classList.add('active');
}

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
}

function handleTouchMove(e) {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;

  if (diff > 0) {
    nextSlide();
  } else if (diff < 0) {
    prevSlide();
  }

  isDragging = false;
}

function handleTouchEnd() {
  isDragging = false;
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

reviewSlidesContainer.addEventListener('touchstart', handleReviewTouchStart);
reviewSlidesContainer.addEventListener('touchmove', handleReviewTouchMove);
reviewSlidesContainer.addEventListener('touchend', handleReviewTouchEnd);

function showReviewSlide(index) {
  reviewSlidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function updateReviewPagination() {
  reviewPaginationContainer.innerHTML = '';
  reviewSlides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.onclick = () => goToReviewSlide(index);
    reviewPaginationContainer.appendChild(button);
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

function handleReviewTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
}

function handleReviewTouchMove(e) {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;

  if (diff > 0) {
    nextReviewSlide();
  } else if (diff < 0) {
    prevReviewSlide();
  }

  isDragging = false;
}

function handleReviewTouchEnd() {
  isDragging = false;
}

updateReviewPagination();

function redirectToTelegram() {
  window.location.href = 'https://t.me/yuliyapashk';
}

function redirectToInstagram() {
  window.location.href = 'https://www.instagram.com/yuliyapashk/';
}