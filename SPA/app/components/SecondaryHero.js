import { SecondaryHeroTexts } from "./SecondaryHeroTexts.js";

export function SecondaryHero() {

    let {hash} = location;

    const $secondaryHero = document.createElement("div"),
    $heroAboutMeContent = document.createElement("div");

    $secondaryHero.classList.add("hero-about-me");
    $heroAboutMeContent.classList.add("hero-content-about-me");

    if(hash === "#/sobremi"){
        
    $heroAboutMeContent.appendChild(SecondaryHeroTexts());
    $secondaryHero.appendChild($heroAboutMeContent);

    }else if(hash === "#/proyectos"){

    $heroAboutMeContent.appendChild(SecondaryHeroTexts());
    $secondaryHero.appendChild($heroAboutMeContent);

    }

    return $secondaryHero;
    
}