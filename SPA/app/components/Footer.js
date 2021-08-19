export function Footer(){

    const $footer = document.createElement("footer"),
    $iconsBox = document.createElement("div"),
    $ulIcons = document.createElement("ul"),
    $authorBox = document.createElement("div"),
    $nameAuthor = document.createElement("p");

    $ulIcons.innerHTML = `
    <li><a href="">Github</a></li>
    <li><a href="">Linkedin</a></li>
    <li><a href="">Mail</a></li>`

    $nameAuthor.innerHTML = `Ezequiel Bonino`


    $iconsBox.appendChild($ulIcons);
    $authorBox.appendChild($nameAuthor);
    $footer.appendChild($iconsBox);
    $footer.appendChild($authorBox);


    return $footer;

}