export function HeroTexts() {
  const $HeroTexts = document.createElement("div"),
    $author = document.createElement("h1"),
    $role = document.createElement("h2");

  $HeroTexts.classList.add("hero-texts");
  $role.classList.add("padding-bottom");

  $author.innerHTML = "Ezequiel Bonino (Boniich)";
  $role.innerHTML = "Game Developer";

  $HeroTexts.appendChild($author);
  $HeroTexts.appendChild($role);

  return $HeroTexts;
}
