document.addEventListener("click", (e) => {
  const menu = document.querySelector(".navList");

  if (e.target.matches(".fas.fa-bars")) {
    menu.classList.toggle("open");
    document.body.classList.toggle("hidden");
  }
});

window.addEventListener("hashchange", () => {
  document.body.classList.remove("hidden");
});
