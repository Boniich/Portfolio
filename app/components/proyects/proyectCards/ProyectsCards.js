export function ProyectsCards(props) {
  const $doc = document;

  const $card = $doc.createElement("div");
  $card.classList.add("proyectCard");

  $card.appendChild(MainContentProject({ props }));

  return $card;
}

function MainContentProject({ props }) {
  let { name, img, description, urlDemo, urlRepo, tagProject } = props;

  const $imgBox = document.createElement("div"),
    $img = document.createElement("img"),
    $infoBox = document.createElement("div"),
    $titleBox = document.createElement("div"),
    $title = document.createElement("h1"),
    $description = document.createElement("p");

  // footer of cards

  // will be contein title, description, and tags
  const $conteinerBoxCard = document.createElement("div");
  $conteinerBoxCard.classList.add("conteinerBoxCard");

  $img.classList.add("imgCard");
  $imgBox.classList.add("image-box");
  $infoBox.classList.add("project-description");
  $titleBox.classList.add("title-box");

  // content
  $img.src = `${img}`;
  $title.innerHTML = `${name}`;
  $description.innerHTML = `${description}`;

  $imgBox.appendChild($img);
  $conteinerBoxCard.appendChild($imgBox);
  $titleBox.appendChild($title);
  $infoBox.appendChild(ProjectTagType(tagProject));
  $infoBox.appendChild($titleBox);
  $infoBox.appendChild($description);
  $infoBox.appendChild(ProjectCardFooter(urlDemo, urlRepo));
  $conteinerBoxCard.appendChild($infoBox);

  return $conteinerBoxCard;
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

function ProjectCardFooter(urlDemo, urlRepo) {
  const $footerProyectCards = document.createElement("div"),
    $footerBox = document.createElement("div");

  $footerProyectCards.classList.add("footer-card-conteiner");
  $footerBox.classList.add("footer-box");

  $footerBox.innerHTML = `
  <a class="button-proyect" href="${urlRepo}" target="_blank"><span class="proyects-icons">
 <i class="fa-solid fa-circle-info"></i></span>Information</a>
 <a class="button-proyect" href="${urlDemo}" target="_blank"><span class="proyects-icons">
 <i class="fas fa-desktop"></i></span>See Demo</a>
`;

  $footerProyectCards.appendChild($footerBox);

  return $footerProyectCards;
}
