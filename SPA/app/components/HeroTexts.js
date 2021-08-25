export function HeroTexts(){

    const $HeroTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");


    $HeroTexts.classList.add("hero-texts");
    $tag.id = "hero-tag";

    $tag.innerHTML = "Portfolio";
    $title.innerHTML = "Desarrollador Full Stack";
    $author.innerHTML = "Por Ezequiel Bonino";

    $HeroTexts.appendChild($tag)
    $HeroTexts.appendChild($title)
    $HeroTexts.appendChild($author);


    return $HeroTexts;
}