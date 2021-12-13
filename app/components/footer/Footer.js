export function Footer(){

    const $footer = document.createElement("footer"),
    $footerConteiner = document.createElement("div"),
    $iconsBox = document.createElement("div"),
    $iconsList = document.createElement("ul"),
    $authorBox = document.createElement("div"),
    $authorName = document.createElement("p");

    $footer.classList.add("footer");
    $footerConteiner.classList.add("footer-conteiner");
    $iconsBox.classList.add("icons-box");
    $iconsList.classList.add("footer-icon-list");
    $authorBox.classList.add("author-box");

    $iconsList.innerHTML = `
    <li><a href="https://github.com/boniich" target="_blank"><span class="footer-icons"><i class="fab fa-github"></i></span></a></li>
    <li><a href="https://www.linkedin.com/in/ezequielboninodesarrolladorfrontend/" target="_blank"><span class="footer-icons"><i class="fab fa-linkedin"></i></span></a></li>`

    $authorName.innerHTML = `© Ezequiel Bonino`


    $iconsBox.appendChild($iconsList);
    $authorBox.appendChild($authorName);

    $footerConteiner.appendChild($iconsBox);
    $footerConteiner.appendChild($authorBox);
    $footer.appendChild($footerConteiner);
    


    return $footer;

}