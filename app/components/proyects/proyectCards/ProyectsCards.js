export function ProyectsCards(props) {
  let { name, img, description, tag, urlDemo, urlRepo, version, urlVersion } =
    props;
  let length = tag.length;
  let html = "";

  const $doc = document;

  const $card = $doc.createElement("div"),
    $imgBox = $doc.createElement("div"),
    $img = $doc.createElement("img"),
    $infoBox = $doc.createElement("div"),
    $titleBox = $doc.createElement("div"),
    $title = $doc.createElement("h1"),
    $description = $doc.createElement("p"),
    $titleVersionBox = $doc.createElement("div"),
    $versionBox = $doc.createElement("div");

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

  $card.classList.add("proyectCard");

  $img.classList.add("imgCard");
  $imgBox.classList.add("padding-bottom");
  $infoBox.classList.add("description-proyects");
  $titleVersionBox.classList.add("titleVersionBox", "padding-bottom");
  $titleBox.classList.add("title-box");
  $versionBox.classList.add("versionBox");

  // content
  $img.src = `${img}`;
  $title.innerHTML = `${name}`;
  $description.innerHTML = `${description}`;
  $versionBox.innerHTML = `<a class="version" href="${urlVersion}" target="_blank">v${version}</a>`;

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
  $titleVersionBox.appendChild($titleBox);
  $titleVersionBox.appendChild($versionBox);
  $infoBox.appendChild($titleVersionBox);
  $infoBox.appendChild($description);
  $skillsBox.appendChild($skillsList);
  $conteinerBoxCard.appendChild($infoBox);
  $conteinerBoxCard.appendChild($skillsBox);
  $footerProyectCards.appendChild($footerBox);
  $card.appendChild($conteinerBoxCard);
  $card.appendChild($footerProyectCards);

  return $card;
}
