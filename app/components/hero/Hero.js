export function Hero() {
  const $hero = document.createElement("div"),
    $heroContent = document.createElement("div");

  $hero.classList.add("hero");
  $heroContent.classList.add("hero-content");

  $heroContent.appendChild(HeroTexts());
  $heroContent.appendChild(PersonalImage());
  $hero.appendChild($heroContent);

  return $hero;
}

function PersonalImage() {
  const $personalImageContainer = document.createElement("div"),
    $personalImageBox = document.createElement("div"),
    $image = document.createElement("img");

  $image.src = "app/assets/img/personalImages/personal-image.png";
  $image.id = "personal-img";

  $personalImageContainer.classList.add("conteiner-personal-img");
  $personalImageBox.classList.add("box-personal-img");

  $personalImageBox.appendChild($image);
  $personalImageContainer.appendChild($personalImageBox);

  return $personalImageContainer;
}

function HeroTexts() {
  const $HeroTexts = document.createElement("div"),
    $author = document.createElement("h1"),
    $role = document.createElement("h2");

  $HeroTexts.classList.add("hero-texts");

  $author.innerHTML = "Ezequiel Bonino (Boniich)";
  $role.innerHTML = "Game Developer";

  $HeroTexts.appendChild($author);
  $HeroTexts.appendChild($role);

  return $HeroTexts;
}
