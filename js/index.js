const buttonUp = document.getElementById("button_up");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        buttonUp.style.display = "block";
    } else {
        buttonUp.style.display = "none";
    }
}

buttonUp.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const carousel_1 = document.querySelector('.carousel-inner_1');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    const totalItems = items.length/2;
    let isAnimating = false;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${offset}%)`;
        carousel_1.style.transition = 'transform 0.5s ease-in-out';
        carousel_1.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (!isAnimating) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (!isAnimating) {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }
    });

    carousel.addEventListener('transitionend', function() {
        isAnimating = false;
    });

});
