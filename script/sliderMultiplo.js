document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel-container");
    carousels.forEach((carousel) => {

    const slide = carousel.querySelector(".carousel-slide");
    const slideItems = carousel.querySelectorAll(".slide-item");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    let currentIndex = 0;
    const totalSlides = slideItems.length;
    const gap = 20;
    let autoSlide;


    slideItems.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function calculateOffset() {
        const containerWidth = carousel.offsetWidth;
        const itemWidth = slideItems[0].offsetWidth;
        const emptySpace = containerWidth - itemWidth;
        const centerOffset = emptySpace / 2;
        return currentIndex * (itemWidth + gap) - centerOffset;
    }

    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        slide.style.transform = `translateX(-${calculateOffset()}px)`;
        updateActiveState();
    }

    function updateActiveState() {
        slideItems.forEach((item, i) => item.classList.toggle("active", i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
    }

    prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

    goToSlide(0);

    });
});