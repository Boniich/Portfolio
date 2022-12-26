import { HeroInfoProjects } from "./heroInfoProjects.js";

export function InfoProjects() {
  const $infoProjectsContainer = document.createElement("div");

  $infoProjectsContainer.appendChild(HeroInfoProjects());
  $infoProjectsContainer.appendChild(InfoSection());

  return $infoProjectsContainer;
}

function InfoSection() {
  // one of main conteiner of aboutMeIntro and title of section
  const $aboutMeSection = document.createElement("section");

  // classes
  $aboutMeSection.id = "aboutMe-section";
  $aboutMeSection.classList.add("conteiner");
  $aboutMeSection.classList.add("about-me-intro");

  $aboutMeSection.appendChild(AboutMe());

  return $aboutMeSection;
}

function AboutMe() {
  // conteiner of text and button
  const $aboutMeContainer = document.createElement("div"),
    // box of text and text himself
    $aboutMeBox = document.createElement("div");
  // class of text

  $aboutMeContainer.classList.add("box-about-me-conteiner");

  // classes of text

  $aboutMeBox.classList.add("about-me-box");

  $aboutMeContainer.appendChild(InfoList());
  // added the text box and button box in his main div

  $aboutMeContainer.appendChild($aboutMeBox);

  return $aboutMeContainer;
}

function InfoList() {
  const $infoListContainer = document.createElement("div"),
    $infoList = document.createElement("ul");

  $infoList.innerHTML = ``;

  insertRepositoryItem($infoList);

  insertTechnologiesItem($infoList);

  if (true) {
    insertPlataformsItem($infoList);
  }

  if (false) {
    insertDataItem($infoList);
  }

  if (false) {
    insertGroupItem($infoList);
  }

  $infoListContainer.appendChild($infoList);

  return $infoListContainer;
}

function insertRepositoryItem($infoList) {
  $infoList.innerHTML += `
    
  <li class="list__item list__item--click">
  <div class="list__button list__button--click repo_links">
      <a class="nav__link  repo_links">Repository and Links</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow repo_links">
  </div>

  <ul class="list__show">
      <li class="list__inside">
          <p class="nav__link nav__link--inside">Github: <a href="https://github.com/Boniich/Car-Crash"> Ir a repo</a></p>
      </li>

      <li class="list__inside">
          <a  class="nav__link nav__link--inside">Link demo: </a>
      </li>
  </ul>

</li>
    `;
}

function insertTechnologiesItem($infoList) {
  $infoList.innerHTML += `
  <li class="list__item list__item--click">
  <div class="list__button list__button--click technologies">
      <a class="nav__link technologies">Technologies</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow technologies">
  </div>
  
  <ul class="list__show">
      <li class="list__inside">
          <a  class="nav__link nav__link--inside">Unity and C#</a>
      </li>
  </ul>
  
  </li>
    `;
}

function insertGroupItem($infoList) {
  $infoList.innerHTML += `
    <li class="list__item list__item--click">
    <div class="list__button list__button--click members">
      <a class="nav__link members">Members team</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow members">
    </div>

    <ul class="list__show">
      <li class="list__inside">
        <a  class="nav__link nav__link--inside"></a>
    </li>

    <li class="list__inside">
        <a  class="nav__link nav__link--inside"></a>
    </li>
    </ul>

</li>
    `;
}

function insertDataItem($infoList) {
  $infoList.innerHTML += `
<li class="list__item list__item--click">
<div class="list__button list__button--click access-Data">
    <a class="nav__link access-Data">Access Data</a>
    <img src="app/assets/icons/arrow.svg" class="list__arrow access-Data">
</div>

<ul class="list__show">
    <li class="list__inside">
        <p  class="nav__link nav__link--inside">Email: </p>
    </li>

    <li class="list__inside">
      <p  class="nav__link nav__link--inside">Pass:</p>
    </li>
</ul>

</li>
    `;
}

function insertPlataformsItem($infoList) {
  $infoList.innerHTML += `
  <li class="list__item list__item--click">
  <div class="list__button list__button--click platforms">
      <a class="nav__link platforms">Platforms</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow platforms">
  </div>
  
  <ul class="list__show">
      <li class="list__inside">
          <a  class="nav__link nav__link--inside">Window, linux, mac</a>
      </li>
  </ul>
  
  </li>
    `;
}
