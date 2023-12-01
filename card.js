// Get the cards
const cards = document.querySelectorAll('.card');

// Slide-in animation function
function slideIn() {
  cards.forEach((card, index) => {
    card.style.transform = `translateX(0)`;
    card.style.transitionDelay = `${index * 100}ms`; // Add delay for each card to create a staggered effect
  });
}

// Trigger the slide-in animation when the page loads
window.onload = () => {
  slideIn();
};
