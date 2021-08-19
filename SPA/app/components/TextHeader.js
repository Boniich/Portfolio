export function TextHeader(){

    const $TextHeader = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");

    $tag.innerHTML = "Porfolio";
    $title.innerHTML = "Desarrollador Full Stack";
    $author.innerHTML = "Por Ezequiel Bonino";

    $TextHeader.appendChild($tag)
    $TextHeader.appendChild($title)
    $TextHeader.appendChild($author);


    return $TextHeader;
}