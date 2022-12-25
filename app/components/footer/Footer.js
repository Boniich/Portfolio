import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_UTL,
} from "../../helpers/helperObjects.js";

export function Footer() {
  const $footer = document.createElement("footer"),
    $footerConteiner = document.createElement("div"),
    $authorBox = document.createElement("div"),
    $authorName = document.createElement("p");

  $footer.classList.add("footer");
  $footerConteiner.classList.add("footer-conteiner");
  $authorBox.classList.add("author-box");

  $authorName.innerHTML = `Ezequiel Bonino`;

  $authorBox.appendChild($authorName);
  $footerConteiner.appendChild(SocialMediaInFooter());
  $footerConteiner.appendChild($authorBox);
  $footer.appendChild($footerConteiner);

  return $footer;
}

function SocialMediaInFooter() {
  const $socialMediaContainer = document.createElement("div"),
    $socialMediaList = document.createElement("ul");

  $socialMediaList.classList.add("socialMediaList");

  $socialMediaList.innerHTML = `
    <li><a href="${YOUTUBE_UTL}" target="_blank"><span class="socialMediaIconInFooter">
    <i  class="fa-brands fa-youtube"></i></span></a></li>
    <li><a href="${GITHUB_URL}" target="_blank">
    <span class="socialMediaIconInFooter"><i class="fab fa-linkedin"></i></span></a></li>
    <li><a  href="${LINKEDIN_URL}" target="_blank"><span class="socialMediaIconInFooter">
    <i class="fab fa-github"></i></span></a></li>

    `;

  $socialMediaContainer.appendChild($socialMediaList);

  return $socialMediaContainer;
}
