import { AboutMeIntroCards } from "./AboutMeIntroCards.js";

export function AboutMeIntro(){

    const $conteinerIntro = document.createElement("div"),
    $aboutMeTitle = document.createElement("h6"),
    $boxAboutMe = document.createElement("div"),
    $text = document.createElement("p");

    $conteinerIntro.classList.add("aboutMeIntro");
    $boxAboutMe.classList.add("boxAboutMe")

    $aboutMeTitle.innerHTML = "Sobre Mi";
    $text.innerHTML = `Mi nombre es Ezequiel, hace 6 años aproximadamente que practico programación
    haciendo pequeños ejemplos de código con C, Java, MySQL y demás.
    <br>Pero no fue hasta mediados de 2020, en medio de la pandemia, que decidi volcarme 
    totalmente en la programación web`;
    

    $conteinerIntro.appendChild($aboutMeTitle);
    $conteinerIntro.appendChild($boxAboutMe);
    $boxAboutMe.appendChild($text);
    $conteinerIntro.appendChild(AboutMeIntroCards());


    return $conteinerIntro;

}