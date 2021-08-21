export function Footer(){

    const $footer = document.createElement("footer"),
    $iconsBox = document.createElement("div"),
    $ulIcons = document.createElement("ul"),
    $authorBox = document.createElement("div"),
    $nameAuthor = document.createElement("p");

    $footer.classList.add("footer");
    $iconsBox.classList.add("iconsBox");
    $ulIcons.classList.add("iconList");
    $authorBox.classList.add("authorBox");

    $ulIcons.innerHTML = `
    <li><a href=""><span class="icons"><i class="fab fa-github"></i></span></a></li>
    <li><a href=""><span class="icons"><i class="fab fa-linkedin"></i></span></a></li>
    <li><a href=""><span class="icons"><i class="fas fa-envelope"></i></span></a></li>`

    $nameAuthor.innerHTML = `© Ezequiel Bonino`


    $iconsBox.appendChild($ulIcons);
    $authorBox.appendChild($nameAuthor);
    $footer.appendChild($iconsBox);
    $footer.appendChild($authorBox);


    return $footer;

}