export function ProyectsCards(props, typeProject, onInitiative) {
  let { name, img, description, tag, urlDemo, urlRepo, version, urlVersion } =
    props;
  let length = tag.length;
  let html = "";

  const $doc = document;

  const $card = $doc.createElement("div"),
    $cardContainer = $doc.createElement("div"),
    $imgBox = $doc.createElement("div"),
    $img = $doc.createElement("img"),
    $infoBox = $doc.createElement("div"),
    $titleBox = $doc.createElement("div"),
    $title = $doc.createElement("h1"),
    $description = $doc.createElement("p"),
    $titleVersionBox = $doc.createElement("div"),
    $versionBox = $doc.createElement("div"),
    $membersBox = $doc.createElement("div"),
    $initiativeBox = $doc.createElement("div"),
    $initiative = $doc.createElement("p"),
    $accessDataBox = $doc.createElement("div"),
    $accessAndVersionBox = $doc.createElement("div");

  // footer of cards

  const $footerProyectCards = $doc.createElement("div"),
    $footerBox = $doc.createElement("div");

  $footerProyectCards.classList.add("footer-card-conteiner");
  $footerBox.classList.add("footer-box");

  // skill tags
  const $skillsBox = $doc.createElement("div"),
    $skillsList = $doc.createElement("ul");

  // will be contein title, description, and tags
  const $conteinerBoxCard = $doc.createElement("div");
  $conteinerBoxCard.classList.add("conteinerBoxCard");

  $skillsBox.classList.add("skill-tag-box");
  $skillsList.classList.add("skill-tag-list");

  $card.classList.add("card");
  $cardContainer.classList.add("proyectCard");

  $img.classList.add("imgCard");
  $imgBox.classList.add("padding-bottom");
  $infoBox.classList.add("description-proyects");
  $titleVersionBox.classList.add("titleVersionBox", "padding-bottom");
  $titleBox.classList.add("title-box");
  $versionBox.classList.add("versionBox");
  $membersBox.classList.add("member-box");
  $initiativeBox.classList.add("initiative-box");
  $accessDataBox.classList.add("versionBox", "accessDataBox");
  $accessAndVersionBox.classList.add("access-version-box");

  // content
  $img.src = `${img}`;
  $title.innerHTML = `${name}`;
  $initiative.innerHTML = "Iniciativa: Alkemy";
  $accessDataBox.innerHTML = `<a class="version"  title="Datos de acceso" href="${urlVersion}" target="_blank">Data</a>`;
  $description.innerHTML = `${description}`;
  $versionBox.innerHTML = `<a class="version" href="${urlVersion}" target="_blank">v${version}</a>`;
  $membersBox.innerHTML = `<a class="member-box" href="" target="_blank">Participantes</a>`;

  for (let e = 0; e < length; e++) {
    html += `<li><p id="${tag[e].idtag}" class="${tag[e].classtag}">${tag[e].tagname}</p></li>`;
  }

  $skillsList.innerHTML = html;

  $footerBox.innerHTML = `
      <a class="button-proyect" href="${urlDemo}" target="_blank"><span class="proyects-icons"><i class="fas fa-desktop"></i></span>Ver Demo</a>
      <a class="button-proyect" href="${urlRepo}" target="_blank"><span class="proyects-icons"><i class="fab fa-github"></i></span> Repositorio</a>`;

  $imgBox.appendChild($img);
  $conteinerBoxCard.appendChild($imgBox);
  $titleBox.appendChild($title);
  $accessAndVersionBox.appendChild($versionBox);
  $accessAndVersionBox.appendChild($accessDataBox);
  $initiativeBox.appendChild($initiative);
  $titleVersionBox.appendChild($titleBox);
  $titleVersionBox.appendChild($accessAndVersionBox);
  $infoBox.appendChild($titleVersionBox);
  $infoBox.appendChild($description);

  if (typeProject === "group") {
    $card.appendChild($membersBox);
    $infoBox.appendChild($initiativeBox);
  }

  $skillsBox.appendChild($skillsList);
  $conteinerBoxCard.appendChild($infoBox);
  $conteinerBoxCard.appendChild($skillsBox);
  $footerProyectCards.appendChild($footerBox);
  $cardContainer.appendChild($conteinerBoxCard);
  $cardContainer.appendChild($footerProyectCards);

  $card.appendChild($cardContainer);

  return $card;
}
