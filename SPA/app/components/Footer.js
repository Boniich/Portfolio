export function Footer(){

    const $footer = document.createElement("footer"),
    $footerConteiner = document.createElement("div"),
    $iconsBox = document.createElement("div"),
    $ulIcons = document.createElement("ul"),
    $authorBox = document.createElement("div"),
    $nameAuthor = document.createElement("p");

    $footer.classList.add("footer");
    $footerConteiner.classList.add("footerConteiner");
    $iconsBox.classList.add("iconsBox");
    $ulIcons.classList.add("iconList");
    $authorBox.classList.add("authorBox");

    $ulIcons.innerHTML = `
    <li><a href=""><span class="icons"><i class="fab fa-github"></i></span></a></li>
    <li><a href=""><span class="icons"><i class="fab fa-linkedin"></i></span></a></li>`

    $nameAuthor.innerHTML = `© Ezequiel Bonino`


    $iconsBox.appendChild($ulIcons);
    $authorBox.appendChild($nameAuthor);

    $footerConteiner.appendChild($iconsBox);
    $footerConteiner.appendChild($authorBox);
    $footer.appendChild($footerConteiner);
    


    return $footer;

}