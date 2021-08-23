
export function buttons(urlButton, textButton){

    const $buttonBox = document.createElement("div"),
    $button = document.createElement("p");

    $buttonBox.classList.add("buttonBox");
    $button.classList.add("btn_proyect_aboutMe");

    $button.innerHTML = `<a href="${urlButton}">${textButton}</a>`;

    $buttonBox.appendChild($button);

    return $buttonBox;
}