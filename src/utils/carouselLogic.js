export function carouselLogic() {
  const carousel = document.getElementById("product-cards");
  const buttons = document.querySelectorAll(".carouselButton");
  const CardWidth = carousel.querySelector(".product-card").offsetWidth;
  const wrapper = document.querySelector("#product-cards-container");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ? -CardWidth : CardWidth;
    });
  });
  let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollinLeft,
    timeoutId;

  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollinLeft = carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollinLeft - (e.pageX - startX);
  };
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };
  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => (carousel.scrollLeft += CardWidth), 2500);
  };
  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
}
