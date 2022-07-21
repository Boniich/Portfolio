export function PrintStack(stackName, stackObj) {
  const $stackContainer = document.createElement("div"),
    $stackBox = document.createElement("div"),
    $stackString = document.createElement("p"),
    $stackList = document.createElement("ul");

  $stackContainer.classList.add("stacks-container");
  $stackBox.classList.add("skill-box");
  $stackList.classList.add("skills-list");

  $stackString.innerHTML = stackName;

  stackObj.forEach((stack) => {
    $stackList.innerHTML += `<li><img class="icon-skills" src="app/assets/icons/${stack.src}.svg" width="80px" height="80px"></img></<li>
      `;
  });

  $stackContainer.appendChild($stackString);
  $stackContainer.appendChild($stackBox);
  $stackBox.appendChild($stackList);

  return $stackContainer;
}
