export function SkillSection() {
  const $skillSection = document.createElement("section"),
    $skillsBoxConteiner = document.createElement("div"),
    $skillsBoxContent = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $stack1Container = document.createElement("div"),
    $stack2Container = document.createElement("div"),
    $stack1Box = document.createElement("div"),
    $stack1String = document.createElement("p"),
    $stack1List = document.createElement("ul"),
    $stack2Box = document.createElement("div"),
    $stack2String = document.createElement("p"),
    $stack2List = document.createElement("ul");

  $skillSection.id = "skill-section";
  $skillSection.classList.add("conteiner");
  $skillsBoxConteiner.classList.add("skills-box-conteiner");
  $skillsBoxContent.classList.add("skills-box-content");
  $stack1Container.classList.add("stacks-container");
  $stack2Container.classList.add("stacks-container");
  $stack1Box.classList.add("skill-box");
  $stack2Box.classList.add("skill-box");
  $titleSkills.classList.add("title-sections");
  $stack1List.classList.add("skills-list");
  $stack2List.classList.add("skills-list");

  $titleSkills.innerHTML = `Stacks`;

  $stack1String.innerHTML = "Stack 1: React";
  $stack1List.innerHTML = `
     <li><img class="icon-skills" src="app/assets/icons/react.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/html.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/css.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/js.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/nodejs.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/sass.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/redux.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/styledcomponents.svg" width="80px" height="80px"></img></<li>
     `;

  $stack2String.innerHTML = "General";
  $stack2List.innerHTML = `
  <li><img class="icon-skills" src="app/assets/icons/git.svg" width="80px" height="80px"></img></<li>
  <li><img class="icon-skills" src="app/assets/icons/trello.svg" width="80px" height="80px"></img></<li>
  <li><img class="icon-skills" src="app/assets/icons/terminal.svg" width="80px" height="80px"></img></<li>
  <li><img class="icon-skills" src="app/assets/icons/jest.svg" width="80px" height="80px"></img></<li>
  <li><img class="icon-skills" src="app/assets/icons/figma1.svg" width="80px" height="80px"></img></<li>
  <li><img class="icon-skills" src="app/assets/icons/jira.svg" width="80px" height="80px"></img></<li>
  `;

  $skillSection.appendChild($titleSkills);
  $skillSection.appendChild($skillsBoxConteiner);
  $skillsBoxConteiner.appendChild($skillsBoxContent);
  $skillsBoxContent.appendChild($stack1Container);
  $skillsBoxContent.appendChild($stack2Container);

  $stack1Container.appendChild($stack1String);
  $stack2Container.appendChild($stack2String);
  $stack1Container.appendChild($stack1Box);
  $stack2Container.appendChild($stack2Box);
  $stack1Box.appendChild($stack1List);
  $stack2Box.appendChild($stack2List);
  return $skillSection;
}
