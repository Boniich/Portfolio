export function ProyectsCards(props) {
  let { name, img, description, urlDemo, urlRepo, tagProject } = props;

  const $doc = document;

  const $card = $doc.createElement("div"),
    $imgBox = $doc.createElement("div"),
    $img = $doc.createElement("img"),
    $infoBox = $doc.createElement("div"),
    $titleBox = $doc.createElement("div"),
    $title = $doc.createElement("h1"),
    $description = $doc.createElement("p");

  // footer of cards

  const $footerProyectCards = $doc.createElement("div"),
    $footerBox = $doc.createElement("div");

  $footerProyectCards.classList.add("footer-card-conteiner");
  $footerBox.classList.add("footer-box");

  // will be contein title, description, and tags
  const $conteinerBoxCard = $doc.createElement("div");
  $conteinerBoxCard.classList.add("conteinerBoxCard");

  $card.classList.add("proyectCard");

  $img.classList.add("imgCard");
  $imgBox.classList.add("image-box");
  $infoBox.classList.add("project-description");
  $titleBox.classList.add("title-box");

  // content
  $img.src = `${img}`;
  $title.innerHTML = `${name}`;
  $description.innerHTML = `${description}`;

  $footerBox.innerHTML = `
       <a class="button-proyect" href="${urlRepo}" target="_blank"><span class="proyects-icons">
      <i class="fa-solid fa-circle-info"></i></span>Information</a>
      <a class="button-proyect" href="${urlDemo}" target="_blank"><span class="proyects-icons">
      <i class="fas fa-desktop"></i></span>Ver Demo</a>
`;

  $imgBox.appendChild($img);
  $conteinerBoxCard.appendChild($imgBox);
  $titleBox.appendChild($title);
  $infoBox.appendChild(ProjectTagType(tagProject));
  $infoBox.appendChild($titleBox);
  $infoBox.appendChild($description);
  $infoBox.appendChild($footerBox);
  $conteinerBoxCard.appendChild($infoBox);
  $card.appendChild($conteinerBoxCard);
  $card.appendChild($footerProyectCards);

  return $card;
}

function ProjectTagType(tagProject) {
  const $tagTypeContainer = document.createElement("div"),
    $amountPersonType = document.createElement("div");

  $amountPersonType.classList.add("tag-type-container");
  $amountPersonType.classList.add("amount-person-type");

  for (let e = 0; e < tagProject.length; e++) {
    $amountPersonType.id = tagProject[e].idTag;
    $amountPersonType.innerHTML = `<span class="proyects-icons" id="${tagProject[e].idIconTypeProject}"><i class="${tagProject[e].iconTag}"></i></span><p>${tagProject[e].typeTag}</p>`;
  }

  $tagTypeContainer.appendChild($amountPersonType);

  return $tagTypeContainer;
}
