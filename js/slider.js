const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const paginationContainer = document.querySelector('.pagination');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

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

slidesContainer.addEventListener('touchstart', handleTouchStart);
slidesContainer.addEventListener('touchmove', handleTouchMove);
slidesContainer.addEventListener('touchend', handleTouchEnd);

updatePagination();
