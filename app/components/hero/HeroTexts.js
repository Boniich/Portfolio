export function HeroTexts() {
  const $HeroTexts = document.createElement("div"),
    $heroTextContent = document.createElement("div"),
    $buttonContainer = document.createElement("div"),
    $downloadCvButton = document.createElement("a"),
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

  $downloadCvButton.addEventListener("click", () => {
    $downloadCvButton.href =
      "http://127.0.0.1:5500/app/assets/pdf/Ezequiel Bonino-cv-port.pdf";
    $downloadCvButton.target = "_blank";
  });

  $heroTextContent.appendChild($author);
  $heroTextContent.appendChild($role);
  $buttonContainer.appendChild($downloadCvButton);
  $HeroTexts.appendChild($heroTextContent);
  $HeroTexts.appendChild($buttonContainer);

  return $HeroTexts;
}
