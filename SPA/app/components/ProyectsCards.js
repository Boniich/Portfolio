export function ProyectsCards(){

    const $doc = document,
    $ProyectsCards = $doc.createElement("div");

    // HOTFIX, will be added a API later
    const $Card1  = $doc.createElement("div"),
    $imgBox1 = $doc.createElement("div"),
    $img1 = $doc.createElement("img"),
    $infoBox1 = $doc.createElement("div"),
    $titleBox1 = $doc.createElement("h1"),
    $DescriptionBox1 = $doc.createElement("p");

    // footer of cards

    const $footerProyectCards = $doc.createElement("div"),
    $footerBox = $doc.createElement("div");

    $footerProyectCards.classList.add("footer-card-conteiner");
    $footerBox.classList.add("footer-box")

    // skill tags
    const $boxSkills1 = $doc.createElement("div"),
    $ul1 = $doc.createElement("ul");

    // const $boxSkills2 = $doc.createElement("div"),
    // $ul2 = $doc.createElement("ul");

    // const $boxSkills3 = $doc.createElement("div"),
    // $ul3 = $doc.createElement("ul");

    // will be contein title, description, and tags
    const $conteinerBoxCard1 = $doc.createElement("div");
    $conteinerBoxCard1.classList.add("conteinerBoxCard");

    // const $conteinerBoxCard2 = $doc.createElement("div");
    // $conteinerBoxCard1.classList.add("conteinerBoxCard");

    // const $conteinerBoxCard3 = $doc.createElement("div");
    // $conteinerBoxCard1.classList.add("conteinerBoxCard");

    $boxSkills1.classList.add("skill-tag-box");
    $ul1.classList.add("skill-tag-card")

    // const $Card2  = $doc.createElement("div"),
    // $imgBox2 = $doc.createElement("div"),
    // $img2 = $doc.createElement("img"),
    // $infoBox2 = $doc.createElement("div"),
    // $titleBox2 = $doc.createElement("h1"),
    // $DescriptionBox2 = $doc.createElement("p");


    // const $Card3  = $doc.createElement("div"),
    // $imgBox3 = $doc.createElement("div"),
    // $img3 = $doc.createElement("img"),
    // $infoBox3 = $doc.createElement("div"),
    // $titleBox3 = $doc.createElement("h1"),
    // $DescriptionBox3 = $doc.createElement("p");

    // css
    $ProyectsCards.classList.add("proyectCardConteiner");
    $Card1.classList.add("proyectCard");
    // $Card2.classList.add("proyectCard");
    // $Card3.classList.add("proyectCard");

    $img1.classList.add("imgCard");
    $imgBox1.classList.add("padding-bottom");
    $infoBox1.classList.add("description-proyects");
    $titleBox1.classList.add("padding-bottom");

   


      // content
      $img1.src = "app/assets/img/1.jpg";
      $titleBox1.innerHTML = `Kinihongo`;
      $DescriptionBox1.innerHTML = `Sitio web para un mini emprendimiento propio`


      $ul1.innerHTML = `
      <li><p id="html" class="skills-proyects">HTML</p></li>
      <li><p id="css" class="skills-proyects">Css</p></li>
      <li><p id="js" class="skills-proyects">JavaScript</p></li>
      `
      
      $footerBox.innerHTML = `
      <a class="button-proyect" href=""><span class="proyects-icons"><i class="fas fa-desktop"></i></span>Ver Demo</a>
      <a class="button-proyect" href=""><span class="proyects-icons"><i class="fab fa-github"></i></span> Repositorio</a>`;

    // Box 1    

    

    $imgBox1.appendChild($img1);
    $conteinerBoxCard1.appendChild($imgBox1);
    $infoBox1.appendChild($titleBox1);
    $infoBox1.appendChild($DescriptionBox1);
    $boxSkills1.appendChild($ul1);
    $conteinerBoxCard1.appendChild($infoBox1);
    $conteinerBoxCard1.appendChild($boxSkills1);
    $footerProyectCards.appendChild($footerBox)
    $Card1.appendChild($conteinerBoxCard1);
    $Card1.appendChild($footerProyectCards);


    // Box 2

    // $imgBox2.appendChild($img2);
    // $conteinerBoxCard2.appendChild($imgBox2);
    // $infoBox2.appendChild($titleBox2);
    // $infoBox2.appendChild($DescriptionBox2);
    // $conteinerBoxCard2.appendChild($infoBox2);
    // $Card2.appendChild($infoBox2);

    // Box 3

    // $imgBox3.appendChild($img3);
    // $Card3.appendChild($imgBox3);
    // $infoBox3.appendChild($titleBox3);
    // $infoBox3.appendChild($DescriptionBox3);
    // $Card3.appendChild($infoBox3);

  

    // added at main parent

    // $ProyectsCards.appendChild($Card1);
    // $ProyectsCards.appendChild($Card2);
    $ProyectsCards.appendChild($Card1);


    return $ProyectsCards;
}