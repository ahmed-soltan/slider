let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let intervalId; 

function nextSlide() {
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
}

function prevSlide() {
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

startAutoSlide();

slide.addEventListener('mouseenter', stopAutoSlide);

slide.addEventListener('mouseleave', startAutoSlide);
