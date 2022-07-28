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

  $titleContactMe.innerHTML = "Contactame";
  $email.innerHTML = "BonichDev@gmail.com";
  $text.innerHTML = `Si deseas ponerte en contacto conmigo por trabajo, colaboracion o cualquier otra razon,
     mandame un mail o agregame a <a id="link-linkeding" href="https://www.linkedin.com/in/ezequielboninodesarrolladorfrontend/" target="_blank">Linkedin</a>`;

  $textBox.appendChild($email);
  $textBox.appendChild($text);
  $contactMeTextBox.appendChild($textBox);
  $contactMeInfoConteiner.appendChild($contactMeTextBox);
  $contactMeSection.appendChild($titleContactMe);
  $contactMeSection.appendChild($contactMeInfoConteiner);

  return $contactMeSection;
}
