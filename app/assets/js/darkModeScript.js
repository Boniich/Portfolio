const token = localStorage.getItem("theme");
console.log(token);
const SUN = `<i class="fa-solid fa-sun"></i>`;
const MOON = `<i class="fa-solid fa-moon"></i>`;

document.addEventListener("DOMContentLoaded", (e) => {
  const icon = document.querySelector(".mode-icon");
  if (token === "light" || !token) {
    icon.innerHTML = MOON;
  } else if (token === "dark") {
    icon.innerHTML = SUN;
  }
});

document.addEventListener("click", (e) => {
  const icon = document.querySelector(".mode-icon");
  if (e.target.matches(".fa-solid.fa-moon")) {
    localStorage.setItem("theme", "dark");
    icon.innerHTML = SUN;
  }

  if (e.target.matches(".fa-solid.fa-sun")) {
    localStorage.setItem("theme", "light");
    icon.innerHTML = MOON;
  }
});

window.addEventListener("hashchange", () => {
  let token = localStorage.getItem("theme");
  console.log("valor del token al entrar en el hashchange: ", token);
  const icon = document.querySelector(".mode-icon");
  console.log(icon);
  if (token === "light") {
    console.log(token);
    console.log("light");
    icon.innerHTML = MOON;
  } else if (token === "dark") {
    console.log("dark");
    icon.innerHTML = SUN;
  }
});
