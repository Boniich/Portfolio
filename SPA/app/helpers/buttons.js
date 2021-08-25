
export function buttons(urlButton, textButton){

    const $buttonBox = document.createElement("div"),
    $button = document.createElement("p");

    $buttonBox.classList.add("button-box");
    $button.classList.add("btn-proyect-aboutMe");

    $button.innerHTML = `<a href="${urlButton}">${textButton}</a>`;

    $buttonBox.appendChild($button);

    return $buttonBox;
}