import { buttons } from "../helpers/buttons.js";
import { fakeApi} from "../helpers/fakeApi.js";
import { AboutMeIntroCards } from "./AboutMeIntroCards.js";

export function AboutMeIntro(){

    // one of main conteiner of aboutMeIntro and title of section
    const $conteinerIntro = document.createElement("div"),
    $aboutMeTitle = document.createElement("h6");

    // conteiner of text and button
    const $boxAboutMeConteiner = document.createElement("div"),

    // box of text and text himself
    $aboutMeBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $text = document.createElement("p");

    // classes

    $conteinerIntro.classList.add("conteiner");
    $conteinerIntro.classList.add("about-me-intro");

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
    $conteinerIntro.appendChild($aboutMeTitle);
    $conteinerIntro.appendChild($boxAboutMeConteiner);

    // added the text to the box text
    $textBox.appendChild($text);

    // added the box in the text box
    $aboutMeBox.appendChild($textBox);

    // added the text box and button box in his main div
    $boxAboutMeConteiner.appendChild($aboutMeBox);

    // added component of cards/box (interest, softskills and hobbies)
    $boxAboutMeConteiner.appendChild(AboutMeIntroCards());


    return $conteinerIntro;

}