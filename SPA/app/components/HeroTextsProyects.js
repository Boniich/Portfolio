export function HeroTextsProyects(){

    const $HeroTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");

    // css

    $tag.classList.add("padding-bottom");

    $tag.id = "hero-tag";

    $tag.innerHTML = "Proyectos";
    $title.innerHTML = "Selecciona un de los Proyectos que realize con mucho entuciasmo.";

    $HeroTexts.appendChild($tag)
    $HeroTexts.appendChild($title)


    return $HeroTexts;
}