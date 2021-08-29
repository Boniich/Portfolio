export function HeroTexts(){

    const $HeroTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");

    // css
    $HeroTexts.classList.add("hero-texts");
    $tag.classList.add("padding-bottom");
    $title.classList.add("padding-bottom");

    $tag.id = "hero-tag";

    $tag.innerHTML = "Portfolio";
    $title.innerHTML = "Desarrollador Full Stack";
    $author.innerHTML = "Por Ezequiel Bonino";

    $HeroTexts.appendChild($tag)
    $HeroTexts.appendChild($title)
    $HeroTexts.appendChild($author);


    return $HeroTexts;
}