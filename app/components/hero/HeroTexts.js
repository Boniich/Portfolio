export function HeroTexts(){

    const $HeroTexts = document.createElement("div"),
    $tag = document.createElement("p"),
    $title = document.createElement("h1"),
    $author = document.createElement("p");

    // css
    $HeroTexts.classList.add("hero-texts");
    $tag.classList.add("padding-bottom", "seccion-tag");
    $title.classList.add("padding-bottom");

    $tag.innerHTML = "Portfolio";
    $title.innerHTML = "Desarrollador Front End";
    $author.innerHTML = "Por Ezequiel Bonino";

    $HeroTexts.appendChild($tag)
    $HeroTexts.appendChild($title)
    $HeroTexts.appendChild($author);


    return $HeroTexts;
}