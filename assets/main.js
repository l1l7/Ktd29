const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
