import { HeroInfoProjects } from "./heroInfoProjects.js";

export function InfoProjects(dataObject) {
  const $infoProjectsContainer = document.createElement("div");

  $infoProjectsContainer.appendChild(HeroInfoProjects(dataObject));
  $infoProjectsContainer.appendChild(InfoSection(dataObject));

  return $infoProjectsContainer;
}

function InfoSection(dataObject) {
  // one of main conteiner of aboutMeIntro and title of section
  const $aboutMeSection = document.createElement("section");

  // classes
  $aboutMeSection.id = "aboutMe-section";
  $aboutMeSection.classList.add("container-info-section");
  $aboutMeSection.classList.add("about-me-intro");

  $aboutMeSection.appendChild(AboutMe(dataObject));

  return $aboutMeSection;
}

function AboutMe(dataObject) {
  const $aboutMeContainer = document.createElement("div");

  $aboutMeContainer.classList.add("box-about-me-conteiner");

  $aboutMeContainer.appendChild(InfoList(dataObject));

  return $aboutMeContainer;
}

function InfoList(dataObject) {
  const $infoListContainer = document.createElement("div"),
    $infoList = document.createElement("ul");

  $infoList.innerHTML = ``;

  insertRepositoryItem($infoList, dataObject);

  insertTechnologiesItem($infoList, dataObject);

  if (dataObject.thereIsPlataform) {
    insertPlataformsItem($infoList, dataObject);
  }

  if (dataObject.thereIsAccessData) {
    insertDataItem($infoList, dataObject);
  }

  if (dataObject.isAGroupProject) {
    insertGroupItem($infoList, dataObject);
  }

  $infoListContainer.appendChild($infoList);

  return $infoListContainer;
}

function insertRepositoryItem($infoList, dataObject) {
  $infoList.innerHTML += `
    
  <li class="list__item list__item--click">
  <div class="list__button list__button--click repo_links">
      <a class="nav__link  repo_links">Repository and Links</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow repo_links">
  </div>

  <ul class="list__show">
      <li class="list__inside">
          <p class="nav__link nav__link--inside"><b class="bolt">Github</b>: <a class="info-links" target="_blank" href="${dataObject.repositoryAndLikns.repo}"> Go to repo</a></p>
      </li>

      <li class="list__inside">
      <p class="nav__link nav__link--inside"><b class="bolt">Demo</b>: <a class="info-links" target="_blank" href="${dataObject.repositoryAndLikns.links}"> Go to demo</a></p>
      </li>
  </ul>

</li>
    `;
}

function insertTechnologiesItem($infoList, dataObject) {
  $infoList.innerHTML += `
  <li class="list__item list__item--click">
  <div class="list__button list__button--click technologies">
      <a class="nav__link technologies">Technologies</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow technologies">
  </div>
  
  <ul class="list__show">
      <li class="list__inside">
          <p  class="nav__link nav__link--inside">${dataObject.technologies}</p>
      </li>
  </ul>
  
  </li>
    `;
}

function insertGroupItem($infoList, dataObject) {
  $infoList.innerHTML += `
    <li class="list__item list__item--click">
    <div class="list__button list__button--click members">
      <a class="nav__link members">Members team</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow members">
    </div>

    <ul class="list__show">
      <li class="list__inside">
        <p  class="nav__link nav__link--inside">
        <b class="bolt">Frontend</b>: ${dataObject.members.frontend} </p>
    </li>

    <li class="list__inside">
        <p class="nav__link nav__link--inside">
        <b class="bolt">Backend</b>: ${dataObject.members.backend}</p>
    </li>

    <li class="list__inside">
      <p  class="nav__link nav__link--inside">
      <b class="bolt">UI</b>: ${dataObject.members.ui} </p>
    </li>

    <li class="list__inside">
      <p  class="nav__link nav__link--inside">
      <b class="bolt">PM</b>: ${dataObject.members.pm} </p>
    </li>
    </ul>

</li>
    `;
}

function insertDataItem($infoList, dataObject) {
  $infoList.innerHTML += `
<li class="list__item list__item--click">
<div class="list__button list__button--click access-Data">
    <a class="nav__link access-Data">Access Data</a>
    <img src="app/assets/icons/arrow.svg" class="list__arrow access-Data">
</div>

<ul class="list__show">
    <li class="list__inside">
        <p  class="nav__link nav__link--inside"><b class="bolt">Email</b>: ${dataObject.accessData.email} </p>
    </li>

    <li class="list__inside">
      <p  class="nav__link nav__link--inside"><b class="bolt">Pass</b>: ${dataObject.accessData.pass}</p>
    </li>
</ul>

</li>
    `;
}

function insertPlataformsItem($infoList, dataObject) {
  $infoList.innerHTML += `
  <li class="list__item list__item--click">
  <div class="list__button list__button--click platforms">
      <a class="nav__link platforms">Plataforms</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow platforms">
  </div>
  
  <ul class="list__show">
      <li class="list__inside">
          <a  class="nav__link nav__link--inside">${dataObject.plataforms}</a>
      </li>
  </ul>
  
  </li>
    `;
}
