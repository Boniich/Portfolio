export function ProyectsCards(props){

    let {name, img, description, tag, urlDemo, urlRepo} = props;
    let length = tag.length;
    let html = "";

    const $doc = document;
  
    const $card  = $doc.createElement("div"),
    $imgBox = $doc.createElement("div"),
    $img = $doc.createElement("img"),
    $infoBox = $doc.createElement("div"),
    $titleBox = $doc.createElement("h1"),
    $DescriptionBox = $doc.createElement("p");

    // footer of cards

    const $footerProyectCards = $doc.createElement("div"),
    $footerBox = $doc.createElement("div");

    $footerProyectCards.classList.add("footer-card-conteiner");
    $footerBox.classList.add("footer-box")

    // skill tags
    const $skillsBox = $doc.createElement("div"),
    $skillsList = $doc.createElement("ul");


    // will be contein title, description, and tags
    const $conteinerBoxCard = $doc.createElement("div");
    $conteinerBoxCard.classList.add("conteinerBoxCard");



    $skillsBox.classList.add("skill-tag-box");
    $skillsList.classList.add("skill-tag-card")

    $card.classList.add("proyectCard");

    $img.classList.add("imgCard");
    $imgBox.classList.add("padding-bottom");
    $infoBox.classList.add("description-proyects");
    $titleBox.classList.add("padding-bottom");



      
      // content
      $img.src = `${img}`;
      $titleBox.innerHTML = `${name}`;
      $DescriptionBox.innerHTML = `${description}`;
      
      for(let e = 0; e < length; e++){
        html += `<li><p id="${tag[e].idtag}" class="${tag[e].classtag}">${tag[e].tagname}</p></li>`
      }

      $skillsList.innerHTML = html;

      $footerBox.innerHTML = `
      <a class="button-proyect" href="${urlDemo}" target="_blank"><span class="proyects-icons"><i class="fas fa-desktop"></i></span>Ver Demo</a>
      <a class="button-proyect" href="${urlRepo}" target="_blank"><span class="proyects-icons"><i class="fab fa-github"></i></span> Repositorio</a>`;


    $imgBox.appendChild($img);
    $conteinerBoxCard.appendChild($imgBox);
    $infoBox.appendChild($titleBox);
    $infoBox.appendChild($DescriptionBox);
    $skillsBox.appendChild($skillsList);
    $conteinerBoxCard.appendChild($infoBox);
    $conteinerBoxCard.appendChild($skillsBox);
    $footerProyectCards.appendChild($footerBox)
    $card.appendChild($conteinerBoxCard);
    $card.appendChild($footerProyectCards);

    return $card;
}