import { HeroTextsAboutMe } from "./HeroTextsAboutMe.js";

export function HeroAboutMe() {

    const $heroAboutMe = document.createElement("div"),
    $heroAboutMeContent = document.createElement("div");

    $heroAboutMe.classList.add("hero-about-me");
    $heroAboutMeContent.classList.add("hero-content-about-me");

    $heroAboutMeContent.appendChild(HeroTextsAboutMe());
    $heroAboutMe.appendChild($heroAboutMeContent);
    return $heroAboutMe;
    
}