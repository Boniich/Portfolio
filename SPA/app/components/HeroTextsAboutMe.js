export function HeroTextsAboutMe(){

    const $HeroTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");

    // css

    $tag.classList.add("padding-bottom");

    $tag.id = "hero-tag";

    $tag.innerHTML = "About Me";
    $title.innerHTML = "Ezequiel Bonino";

    $HeroTexts.appendChild($tag)
    $HeroTexts.appendChild($title)


    return $HeroTexts;
}