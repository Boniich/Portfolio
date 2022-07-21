export function HeroTexts() {
  const $HeroTexts = document.createElement("div"),
    $heroTextContent = document.createElement("div"),
    $buttonContainer = document.createElement("div"),
    $downloadCvButton = document.createElement("button"),
    $author = document.createElement("h1"),
    $role = document.createElement("p");

  // css
  $HeroTexts.classList.add("hero-texts");
  $heroTextContent.classList.add("hero-text-content");
  $buttonContainer.classList.add("hero-button-container");
  $downloadCvButton.classList.add("downloadCv-button");
  $role.classList.add("role");

  $author.innerHTML = "Ezequiel Bonino";
  $role.innerHTML = "Desarrollador Front end";
  $downloadCvButton.innerHTML = "Descargar Cv";

  $heroTextContent.appendChild($author);
  $heroTextContent.appendChild($role);
  $buttonContainer.appendChild($downloadCvButton);
  $HeroTexts.appendChild($heroTextContent);
  $HeroTexts.appendChild($buttonContainer);

  return $HeroTexts;
}
