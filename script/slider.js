document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".carousel-container");
    const slide = document.querySelector(".carousel-slide");
    const slideItems = document.querySelectorAll(".slide-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 1;
    const totalSlides = slideItems.length;
    const gap = 20; 
    let autoSlideInterval;


    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            goToSlide(i);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");


    function calculateOffset() {
        const containerWidth = container.offsetWidth;
        const itemWidth = slideItems[0].offsetWidth;

        const emptySpace = containerWidth - itemWidth;
        const centerOffset = emptySpace / 2;

        const offsetToLeftEdge = currentIndex * (itemWidth + gap);

        return offsetToLeftEdge - centerOffset;
    }

    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;

        slide.style.transform = `translateX(-${calculateOffset()}px)`;

        updateActiveSlide();
        updateDots();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function updateActiveSlide() {
        slideItems.forEach((item, i) => {
            item.classList.toggle("active", i === currentIndex);
        });
    }

    function updateDots() {
        dots.forEach((dot, i) =>
            dot.classList.toggle("active", i === currentIndex)
        );
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        startAutoSlide();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    goToSlide(currentIndex);
    startAutoSlide();
});