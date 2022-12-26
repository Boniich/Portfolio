import { fakeApi } from "../../../helpers/fakeApi.js";
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
    $aboutMeBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $text = document.createElement("p");

  // class of text

  $aboutMeContainer.classList.add("box-about-me-conteiner");

  // classes of text

  $aboutMeBox.classList.add("about-me-box");
  $textBox.classList.add("text-box");

  $text.innerHTML = "Repositorio y links";

  // added the text to the box text
  $textBox.appendChild($text);

  // added the box in the text box
  // $aboutMeBox.appendChild($textBox);

  $aboutMeContainer.appendChild(InfoList());
  // added the text box and button box in his main div

  $aboutMeContainer.appendChild($aboutMeBox);

  return $aboutMeContainer;
}

function InfoList() {
  const $infoListContainer = document.createElement("div"),
    $infoList = document.createElement("ul");

  //$infoListContainer.classList.add("nav");

  //$infoList.classList.add("list");

  $infoList.innerHTML = `
  
  <li class="list__item list__item--click">
  <div class="list__button list__button--click repo_links">
      <a class="nav__link  repo_links">Servicios</a>
      <img src="app/assets/icons/arrow.svg" class="list__arrow repo_links">
  </div>

  <ul class="list__show">
      <li class="list__inside">
          <a  class="nav__link nav__link--inside">Estoy dentro</a>
      </li>

      <li class="list__inside">
          <a  class="nav__link nav__link--inside">Estoy dentro</a>
      </li>
  </ul>

</li>

<li class="list__item list__item--click">
<div class="list__button list__button--click technologies">
    <a class="nav__link technologies">Servicios</a>
    <img src="app/assets/icons/arrow.svg" class="list__arrow technologies">
</div>

<ul class="list__show">
    <li class="list__inside">
        <a  class="nav__link nav__link--inside">Estoy dentro</a>
    </li>

    <li class="list__inside">
        <a  class="nav__link nav__link--inside">Estoy dentro</a>
    </li>
</ul>

</li>

  `;

  $infoListContainer.appendChild($infoList);

  return $infoListContainer;
}
