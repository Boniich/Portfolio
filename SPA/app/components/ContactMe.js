export function ContactMe(){

    const $contactMe = document.createElement("div"),
    $contactMeInfoConteiner = document.createElement("div"),
    $contactMeTextBox = document.createElement("div"),
    $textBox = document.createElement("div"),
    $tag = document.createElement("p"),
    $email = document.createElement("h1"),
    $text = document.createElement("p");


    // css

    $tag.classList.add("seccion-tag");

    $contactMe.classList.add("conteiner", "contact");
    $contactMeInfoConteiner.classList.add("contact-me");
    $contactMeTextBox.classList.add("contact-me-box");
    $text.classList.add("contact-description");
    $textBox.classList.add("contactme-text")


    
    $tag.innerHTML = "Contactame";
    $email.innerHTML = "EzequielDbo22@hotmail.com";
    $text.innerHTML = "Si deseas ponerte en contacto conmigo por trabajo, colaboracion o cualquier otra razon, mandame un mail"


    // nodos
    $textBox.appendChild($tag);
    $textBox.appendChild($email);
    $textBox.appendChild($text);
    $contactMeTextBox.appendChild($textBox);
    $contactMeInfoConteiner.appendChild($contactMeTextBox);
    $contactMe.appendChild($contactMeInfoConteiner);

    return $contactMe;

}