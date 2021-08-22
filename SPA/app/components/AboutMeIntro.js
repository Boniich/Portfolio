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

    // button box and button himself
    const $buttonBox = document.createElement("div"),
    $button = document.createElement("p");

    // classes

    $conteinerIntro.classList.add("conteiner");
    $conteinerIntro.classList.add("aboutMeIntro");

    // class of text and button

    $boxAboutMeConteiner.classList.add("boxAboutMeConteiner");

    // classes of text

    $boxAboutMe.classList.add("boxAboutMe");
    $textBox.classList.add("textBox");
    

    // classes of button
    $buttonBox.classList.add("buttonBox");
    $button.classList.add("btnAboutMe");

    // title and text content

    $aboutMeTitle.innerHTML = "Sobre Mi";
    $text.innerHTML = `Mi nombre es Ezequiel, hace 6 años aproximadamente que practico programación
    haciendo pequeños ejemplos de código con C, Java, MySQL y demás.
    Pero no fue hasta mediados de 2020, en medio de la pandemia, que encontre distintos proyectos que queria hacer
    y la programacion web fue el mejor camino para llevarlos a cabo`;

    // button
    $button.innerHTML = `<a href="#">Mas Sobre mi</a>`;
    
    // appeding main divs
    $conteinerIntro.appendChild($aboutMeTitle);
    $conteinerIntro.appendChild($boxAboutMeConteiner);

    // added the text to the box text
    $textBox.appendChild($text);

    // added the box in the text box
    $boxAboutMe.appendChild($textBox);

    // added the button in his div
    $buttonBox.appendChild($button);

    // added button div in boxAboutMe div
    $boxAboutMe.appendChild($buttonBox);

    // added the text box and button box in his main div
    $boxAboutMeConteiner.appendChild($boxAboutMe);

    // added component of cards/box (interest, softskills and hobbies)
    $boxAboutMeConteiner.appendChild(AboutMeIntroCards());


    return $conteinerIntro;

}