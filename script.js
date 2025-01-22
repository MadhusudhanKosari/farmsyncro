document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = Array.from(carousel.children);
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    // Initialize carousel on load
    updateCarousel();
});
