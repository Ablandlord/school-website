const slideContainers = document.querySelectorAll('.slide-container');

function animateSlide(timestamp) {
  let start;
  if (!start) start = timestamp;
  const elapsed = timestamp - start;

  // Duration of the animation in milliseconds
  const duration = 3000;

  // Calculate the progress of the animation (0 to 1)
  const progress = Math.min(elapsed / duration, 1);

  slideContainers.forEach((container, index) => {
    // Slide the container into view based on the progress
    container.style.opacity = progress;
    container.style.transform = `translateY(${100 - progress * 100}%)`;
  });

  if (elapsed < duration) {
    // If the animation is not finished, request another frame
    requestAnimationFrame(animateSlide);
  }
}

function slideInContainers() {
  // Start the animation
  requestAnimationFrame(animateSlide);
}

