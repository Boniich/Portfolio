export function Nav() {
  const $nav = document.createElement("nav");

  const $iconNavMobile = document.createElement("label");

  $iconNavMobile.innerHTML = `<i class="fas fa-bars"></i>`;

  const $logoContainer = document.createElement("div");

  const $navLinksContainer = document.createElement("div"),
    $linkList = document.createElement("ul");

  const $socialMediaContainer = document.createElement("div"),
    $socialMediaList = document.createElement("ul");

  $logoContainer.innerHTML = `<p>Boniich</p>`;

  $linkList.innerHTML = `
  <li><a href="#/">Inicio</a></li>
  <li><a href="#aboutMe-section">Sobre Mi</a></li>
  <li><a href="#projectIntro-section">Desarr. Web</a> 
  <li><a href="#">Desarr. VideoJuegos</a></li>
  <li><a href="#contact">Contactame</a></li>
  `;

  $socialMediaList.innerHTML = `
  <li><a href="https://github.com/boniich" target="_blank"><span class="socialMediaIcon"><i class="fab fa-github"></i></span></a></li>
  <li><a href="https://github.com/boniich" target="_blank"><span class="socialMediaIcon"><i class="fab fa-github"></i></span></a></li>
  <li><a href="https://www.linkedin.com/in/ezequielboninodesarrolladorfrontend/" target="_blank">
  <span class="socialMediaIcon"><i class="fab fa-linkedin"></i></span></a></li>
  `;

  $nav.classList.add("new-nav");
  $navLinksContainer.classList.add("nav-list-container");
  $iconNavMobile.classList.add("icon");
  $linkList.classList.add("linksList");
  $socialMediaList.classList.add("socialMediaList");

  $navLinksContainer.appendChild($linkList);
  $socialMediaContainer.appendChild($socialMediaList);

  $nav.appendChild($iconNavMobile);
  $nav.appendChild($logoContainer);
  $nav.appendChild($navLinksContainer);
  $nav.appendChild($socialMediaContainer);

  return $nav;
}

/*
export function Nav() {
  const $navConteiner = document.createElement("div"),
    $nav = document.createElement("nav"),
    $label = document.createElement("label"),
    $ul = document.createElement("ul");

  const $logoContainer = document.createElement("div");

  $navConteiner.id = "nav-id";
  $navConteiner.classList.add("nav-conteiner"), $nav.classList.add("nav");
  $label.classList.add("icon");
  $ul.classList.add("navList");

  $label.innerHTML = `<i class="fas fa-bars"></i>`;

  $logoContainer.innerHTML = `<p>Boniich</p>`;

  $ul.innerHTML = `
    <li><a href="#/">Inicio</a></li>
    <li><a href="#aboutMe-section">Sobre Mi</a></li>
    <li><a href="#projectIntro-section">Desarr. Web</a> 
    <li><a href="#">Desarr. VideoJuegos</a></li>
    <li><a href="#contact">Contactame</a></li>
    `;
  $nav.appendChild($label);
  $nav.appendChild($ul);

  $navConteiner.appendChild($nav);
  $navConteiner.appendChild($logoContainer);

  return $navConteiner;
}*/
