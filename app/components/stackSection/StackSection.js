import { OtherStack, ReactStack } from "../../consts/index.js";
import { PrintStack } from "./printStack/PrintStack.js";

export function StackSection() {
  const $skillSection = document.createElement("section"),
    $skillsBoxConteiner = document.createElement("div"),
    $skillsBoxContent = document.createElement("div"),
    $titleSkills = document.createElement("h6");

  $skillSection.id = "skill-section";
  $skillSection.classList.add("conteiner");
  $skillsBoxConteiner.classList.add("skills-box-conteiner");
  $skillsBoxContent.classList.add("skills-box-content");
  $titleSkills.classList.add("title-sections");

  $titleSkills.innerHTML = `Stacks`;

  $skillSection.appendChild($titleSkills);
  $skillSection.appendChild($skillsBoxConteiner);
  $skillsBoxConteiner.appendChild($skillsBoxContent);
  $skillsBoxContent.appendChild(PrintStack("Stack 1: React", ReactStack));
  $skillsBoxContent.appendChild(PrintStack("General", OtherStack));
  return $skillSection;
}
