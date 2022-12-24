export function PrintStack(stackName, stackObj) {
  const $printStackContainer = document.createElement("div"),
    $stackBox = document.createElement("div"),
    $stackString = document.createElement("p"),
    $stackList = document.createElement("ul");

  $stackString.classList.add("stacks-string");
  $stackBox.classList.add("stack-box");
  $stackList.classList.add("stack-list");

  $stackString.innerHTML = stackName;

  stackObj.forEach((stack) => {
    $stackList.innerHTML += `<li><img class="icon-skills" src="app/assets/icons/${stack.src}.svg" width="80px" height="80px"></img></<li>
        `;
  });

  $printStackContainer.appendChild($stackString);
  $printStackContainer.appendChild($stackBox);
  $stackBox.appendChild($stackList);

  return $printStackContainer;
}
