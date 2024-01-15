function toggleAnswer(element) {
  var item = element.closest('.faq-content__item');
  var answer = item.nextElementSibling;
  var plusIcon = item.querySelector('.faq-content__item-icon.plus');
  var minusIcon = item.querySelector('.faq-content__item-icon.minus');

  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    plusIcon.classList.add('hidden');
    minusIcon.classList.remove('hidden');
  } else {
    answer.classList.add('hidden');
    plusIcon.classList.remove('hidden');
    minusIcon.classList.add('hidden');
  }
}

document.querySelectorAll('.faq-content__item').forEach(function(item) {
  item.addEventListener('click', function() {
    toggleAnswer(this);
  });
});

document.querySelectorAll('.faq-content__item-icon').forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    toggleAnswer(this);
  });
});