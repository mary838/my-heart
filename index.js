// Add interactive hover effect to petals
const petals = document.querySelectorAll(".petal");
petals.forEach((petal) => {
  petal.addEventListener("mouseover", () => {
    petal.style.transform += " scale(1.2)";
  });
  petal.addEventListener("mouseout", () => {
    petal.style.transform = petal.style.transform.replace(" scale(1.2)", "");
  });
});
