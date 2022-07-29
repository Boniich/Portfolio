export function Footer() {
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
    <li><a title="Github" href="https://github.com/boniich" target="_blank"><span class="footer-icons"><i class="fab fa-github"></i></span></a></li>
    <li><a title="Linkedin" href="https://www.linkedin.com/in/boniich/" target="_blank"><span class="footer-icons"><i class="fab fa-linkedin"></i></span></a></li>
    <li><a title="Twitter" href="https://twitter.com/boniichDev/" target="_blank"><span class="footer-icons"><i class="fa-brands fa-twitter"></i></span></a></li>`;

  $authorName.innerHTML = `© Ezequiel Bonino`;

  $iconsBox.appendChild($iconsList);
  $authorBox.appendChild($authorName);

  $footerConteiner.appendChild($iconsBox);
  $footerConteiner.appendChild($authorBox);
  $footer.appendChild($footerConteiner);

  return $footer;
}
