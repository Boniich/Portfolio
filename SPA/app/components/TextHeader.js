export function TextHeader(){

    const $TextHeader = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1"),
    $author = document.createElement("p");


    $TextHeader.classList.add("textHeader");
    $tag.id = "tagPortfolio";

    $tag.innerHTML = "Portfolio";
    $title.innerHTML = "Desarrollador Full Stack";
    $author.innerHTML = "Por Ezequiel Bonino";

    $TextHeader.appendChild($tag)
    $TextHeader.appendChild($title)
    $TextHeader.appendChild($author);


    return $TextHeader;
}