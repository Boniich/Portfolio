export function Nav() {
  const $navContainer = document.createElement("div");
  const $nav = document.createElement("nav");

  $nav.classList.add("new-nav");
  $navContainer.classList.add("nav-container");

  $nav.appendChild(MobileIcon());
  $nav.appendChild(Logo());
  $nav.appendChild(MainNav());
  $nav.appendChild(SocialMedia());

  $navContainer.appendChild($nav);

  return $navContainer;
}

function MobileIcon() {
  const $iconNavMobile = document.createElement("label");

  $iconNavMobile.classList.add("nav-icon-mobile");

  $iconNavMobile.innerHTML = `<i class="fas fa-bars"></i>`;

  return $iconNavMobile;
}

function Logo() {
  const $logoContainer = document.createElement("div");

  $logoContainer.innerHTML = `<p class="logo">Boniich</p>`;

  return $logoContainer;
}

function MainNav() {
  const $navLinksContainer = document.createElement("div"),
    $linkList = document.createElement("ul");

  $navLinksContainer.classList.add("nav-list-container");
  $linkList.classList.add("linksList");

  $linkList.innerHTML = `
    <li><a href="#home">Home</a></li>
    <li><a href="#aboutMe-section">About Me</a></li>
    <li><a href="#game-dev">Game Develop</a></li>
    <li><a href="#web-dev">Web Devop</a> 
    <li><a href="#contact">Lets Talk</a></li>
    `;

  $navLinksContainer.appendChild($linkList);

  return $navLinksContainer;
}

function SocialMedia() {
  const $socialMediaContainer = document.createElement("div"),
    $socialMediaList = document.createElement("ul");

  $socialMediaList.classList.add("socialMediaList");

  $socialMediaList.innerHTML = `
    <li><a href="https://www.youtube.com/channel/UC50c6pI2XhGQYzI1hmxMiOg" target="_blank"><span class="socialMediaIcon">
    <i id="youtube-icon" class="fa-brands fa-youtube"></i></span></a></li>
    <li><a id="linkedin-icon" href="https://www.linkedin.com/in/boniich/" target="_blank">
    <span class="socialMediaIcon"><i class="fab fa-linkedin"></i></span></a></li>
    <li><a id="github-icon" href="https://github.com/boniich" target="_blank"><span class="socialMediaIcon">
    <i class="fab fa-github"></i></span></a></li>

    `;

  $socialMediaContainer.appendChild($socialMediaList);

  return $socialMediaContainer;
}
