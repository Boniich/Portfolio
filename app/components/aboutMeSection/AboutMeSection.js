import { buttons } from "../../helpers/buttons.js";
import { fakeApi } from "../../helpers/fakeApi.js";
import { OtherStack, ReactStack } from "../../helpers/stackObject.js";
import { AboutMeIntroCards } from "./aboutMeCards/AboutMeIntroCards.js";
import { PrintStack } from "./stacks/PrintStacks.js";

export function AboutMeSection() {
  // one of main conteiner of aboutMeIntro and title of section
  const $aboutMeSection = document.createElement("section"),
    $aboutMeTitle = document.createElement("h6");

  // conteiner of text and button
  const $boxAboutMeConteiner = document.createElement("div"),
    // box of text and text himself
    $aboutMeBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $text = document.createElement("p");

  //stact sub section

  // classes
  $aboutMeSection.id = "aboutMe-section";
  $aboutMeSection.classList.add("conteiner");
  $aboutMeSection.classList.add("about-me-intro");

  // class of text

  $boxAboutMeConteiner.classList.add("box-about-me-conteiner");

  // classes of text

  $aboutMeBox.classList.add("about-me-box");
  $textBox.classList.add("text-box");

  // title and text content
  $aboutMeTitle.classList.add("title-sections");
  $aboutMeTitle.innerHTML = "Sobre Mi";

  $text.innerHTML = fakeApi();

  // appeding main divs
  $aboutMeSection.appendChild($aboutMeTitle);
  $aboutMeSection.appendChild(AboutMeButtons());
  $aboutMeSection.appendChild($boxAboutMeConteiner);
  $aboutMeSection.appendChild(Stacks());

  // added the text to the box text
  $textBox.appendChild($text);

  // added the box in the text box
  $aboutMeBox.appendChild($textBox);

  // added the text box and button box in his main div

  $boxAboutMeConteiner.appendChild($aboutMeBox);

  // added component of cards/box (interest, softskills and hobbies)
  //$boxAboutMeConteiner.appendChild(AboutMeIntroCards());

  return $aboutMeSection;
}

function AboutMeButtons() {
  const buttonContainer = document.createElement("div"),
    $aboutMeBtn = document.createElement("p"),
    $stacksBtn = document.createElement("p");

  $aboutMeBtn.innerHTML = "About Me";
  $stacksBtn.innerHTML = "Stacks";

  buttonContainer.classList.add("about-me-container");
  $aboutMeBtn.classList.add("about-me-stacks-buttons", "active");
  $stacksBtn.classList.add("about-me-stacks-buttons");

  $aboutMeBtn.id = "about-me-btn";
  $stacksBtn.id = "stacks-btn";

  buttonContainer.appendChild($aboutMeBtn);
  buttonContainer.appendChild($stacksBtn);

  return buttonContainer;
}

function Stacks() {
  const $stackContainer = document.createElement("div");

  $stackContainer.classList.add("stacks-container");

  $stackContainer.appendChild(PrintStack("(WEB) Stack 1: React", ReactStack));
  $stackContainer.appendChild(PrintStack("General", OtherStack));

  return $stackContainer;
}
