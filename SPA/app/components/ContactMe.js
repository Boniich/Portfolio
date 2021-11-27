export function ContactMe(){

    const $contactMe = document.createElement("div"),
    $contactMeInfoConteiner = document.createElement("div"),
    $contactMeTextBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $titleContactMe = document.createElement("h1"),
    $email = document.createElement("h1"),
    $text = document.createElement("p");


    // css

    $titleContactMe.classList.add("title-sections");

    $contactMe.classList.add("conteiner");
    $contactMeInfoConteiner.classList.add("contact-me");
    $contactMeTextBox.classList.add("contact-me-box");
    $text.classList.add("contact-description");
    $textBox.classList.add("contactme-text");


    
    $titleContactMe.innerHTML = "Contactame";
    $email.innerHTML = "EzequielDbo25@gmail.com";
    $text.innerHTML = `Si deseas ponerte en contacto conmigo por trabajo, colaboracion o cualquier otra razon,
     mandame un mail o agregame a <a id="link-linkeding" href="https://www.linkedin.com/in/ezequielboninodesarrolladorfrontend/" target="_blank">Linkedin</a>`;
     
    
    $textBox.appendChild($email);
    $textBox.appendChild($text);
    $contactMeTextBox.appendChild($textBox);
    $contactMeInfoConteiner.appendChild($contactMeTextBox);
    $contactMe.appendChild($titleContactMe);
    $contactMe.appendChild($contactMeInfoConteiner);

    return $contactMe;

}