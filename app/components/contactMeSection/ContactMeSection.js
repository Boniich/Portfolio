import { LINKEDIN_URL } from "../../helpers/helperObjects.js";

export function ContactMeSection() {
  const $contactMeSection = document.createElement("section"),
    $contactMeInfoConteiner = document.createElement("div"),
    $contactMeTextBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $titleContactMe = document.createElement("h1"),
    $email = document.createElement("h1"),
    $text = document.createElement("p");

  // css

  $titleContactMe.classList.add("title-sections");

  $contactMeSection.classList.add("conteiner");
  $contactMeSection.id = "contact";
  $contactMeInfoConteiner.classList.add("contact-me");
  $contactMeTextBox.classList.add("contact-me-box");
  $text.classList.add("contact-description");
  $textBox.classList.add("contactme-text");

  $titleContactMe.innerHTML = `<i  class="fa-solid fa-walkie-talkie title-section-icon"></i> Lets Talk`;
  $email.innerHTML = "BoniichDev@gmail.com";
  $text.innerHTML = `If you want talk with me for job, collaboration or another reason, you can send me an email or talk with me in 
  <a id="link-linkeding" href="${LINKEDIN_URL}" target="_blank">Linkedin</a>`;

  $textBox.appendChild($email);
  $textBox.appendChild($text);
  $contactMeTextBox.appendChild($textBox);
  $contactMeInfoConteiner.appendChild($contactMeTextBox);
  $contactMeSection.appendChild($titleContactMe);
  $contactMeSection.appendChild($contactMeInfoConteiner);

  return $contactMeSection;
}
