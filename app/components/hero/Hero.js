export function Hero() {
  const $hero = document.createElement("div"),
    $heroContent = document.createElement("div"),
    $conteinerPersonalImg = document.createElement("div"),
    $boxPersonalImg = document.createElement("div"),
    $PersonalImg = document.createElement("img");

  $PersonalImg.src = "app/assets/img/personalImg.jpg";
  $PersonalImg.id = "personal-img";

  $hero.classList.add("hero");
  $heroContent.classList.add("hero-content");
  $conteinerPersonalImg.classList.add("conteiner-personal-img");
  $boxPersonalImg.classList.add("box-personal-img");

  $boxPersonalImg.appendChild($PersonalImg);

  $heroContent.appendChild(HeroTexts());
  $conteinerPersonalImg.appendChild($boxPersonalImg);
  $heroContent.appendChild($conteinerPersonalImg);
  $hero.appendChild($heroContent);

  return $hero;
}

function HeroTexts() {
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
