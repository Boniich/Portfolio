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
    $boxAboutMe = document.createElement("div"),
    $textBox = document.createElement("div"),
    $text = document.createElement("p");

    // classes

    $conteinerIntro.classList.add("conteiner");
    $conteinerIntro.classList.add("aboutMeIntro");

    // class of text and button

    $boxAboutMeConteiner.classList.add("boxAboutMeConteiner");

    // classes of text

    $boxAboutMe.classList.add("boxAboutMe");
    $textBox.classList.add("textBox");
    

    // const of helper component buttons
    const textButton = "Mas Sobre Mi",
    urlButton = "#/sobremi";

    // title and text content

    $aboutMeTitle.innerHTML = "Sobre Mi";
   
    $text.innerHTML = fakeApi("intro");
   
    // appeding main divs
    $conteinerIntro.appendChild($aboutMeTitle);
    $conteinerIntro.appendChild($boxAboutMeConteiner);

    // added the text to the box text
    $textBox.appendChild($text);

    // added the box in the text box
    $boxAboutMe.appendChild($textBox);

    // added button's herper component
    $boxAboutMe.appendChild(buttons(urlButton, textButton));

    // added the text box and button box in his main div
    $boxAboutMeConteiner.appendChild($boxAboutMe);

    // added component of cards/box (interest, softskills and hobbies)
    $boxAboutMeConteiner.appendChild(AboutMeIntroCards());


    return $conteinerIntro;

}