document.addEventListener("DOMContentLoaded", () => {
  const closingText = document.querySelector('.closing');
  closingText.addEventListener('mouseover', () => {
    closingText.style.color = "#6a11cb";
    closingText.innerHTML += " 🌟";
  });
  closingText.addEventListener('mouseout', () => {
    closingText.style.color = "#2575fc";
    closingText.innerHTML = "Let’s embark on this journey of learning and growth — together! 🚀";
  });
});
