import { HeroTexts } from "./HeroTexts.js";

export function Hero() {
  const $hero = document.createElement("div"),
    $heroColor = document.createElement("div"),
    $heroWave = document.createElement("div"),
    $heroWave2 = document.createElement("div"),
    $heroContent = document.createElement("div"),
    $conteinerPersonalImg = document.createElement("div"),
    $boxPersonalImg = document.createElement("div"),
    $PersonalImg = document.createElement("img");

  $PersonalImg.src = "app/assets/img/personalImg.jpg";
  $PersonalImg.id = "personal-img";

  $hero.classList.add("hero");
  $heroColor.classList.add("hero-color");
  $heroWave.classList.add("wave", "w1");
  $heroWave2.classList.add("wave", "w2");
  $heroContent.classList.add("hero-content");
  $conteinerPersonalImg.classList.add("conteiner-personal-img");
  $boxPersonalImg.classList.add("box-personal-img");

  $boxPersonalImg.appendChild($PersonalImg);

  $heroContent.appendChild(HeroTexts());

  $conteinerPersonalImg.appendChild($boxPersonalImg);
  $heroContent.appendChild($conteinerPersonalImg);
  $hero.appendChild($heroColor);
  $hero.appendChild($heroWave);
  $hero.appendChild($heroWave2);
  $hero.appendChild($heroContent);

  return $hero;
}
