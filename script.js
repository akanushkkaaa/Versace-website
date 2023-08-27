// script.js
const expandingText = document.querySelector('.expanding-text');

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const newFontSize = 24 + (scrollPercentage * 0.2); // Adjust the multiplier for desired effect
  expandingText.style.fontSize = `${newFontSize}px`;
});
