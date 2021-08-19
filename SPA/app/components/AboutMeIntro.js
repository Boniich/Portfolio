import { AboutMeIntroCards } from "./AboutMeIntroCards.js";

export function AboutMeIntro(){

    const $ConteinerIntro = document.createElement("div"),
    $aboutMeTitle = document.createElement("h6"),
    $boxAboutMe = document.createElement("div"),
    $text = document.createElement("p");

    $aboutMeTitle.innerHTML = "Sobre Mi";
    $text.innerHTML = `Mi nombre es Ezequiel, hace 6 años aproximadamente que practico programación
    haciendo pequeños ejemplos de código con C, Java, MySQL y demás.
    Pero no fue hasta mediados de 2020, en medio de la pandemia, que decidi volcarme 
    totalmente en la programación web`;
    

    $ConteinerIntro.appendChild($aboutMeTitle);
    $ConteinerIntro.appendChild($boxAboutMe);
    $boxAboutMe.appendChild($text);
    $ConteinerIntro.appendChild(AboutMeIntroCards());


    return $ConteinerIntro;

}