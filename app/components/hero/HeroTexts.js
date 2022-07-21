export function HeroTexts() {
  const $HeroTexts = document.createElement("div"),
    $author = document.createElement("h1"),
    $role = document.createElement("p");

  // css
  $HeroTexts.classList.add("hero-texts");
  $role.classList.add("padding-bottom", "role");

  $author.innerHTML = "Ezequiel Bonino";
  $role.innerHTML = "Desarrollador Front end";

  $HeroTexts.appendChild($author);
  $HeroTexts.appendChild($role);

  return $HeroTexts;
}
