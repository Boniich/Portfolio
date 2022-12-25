import { Footer } from "./components/footer/Footer.js";
import { HeroConteiner } from "./components/hero/HeroConteiner.js";
import { MainConteiner } from "./components/main/MainConteiner.js";
import { Nav } from "./components/nav/Nav.js";
import { Router } from "./components/router/Router.js";

export function App() {
  const $root = document.getElementById("root");
  const $home = document.createElement("div");

  $root.innerHTML = null;
  $home.id = "home";

  $root.appendChild($home);
  $root.appendChild(Nav());
  $root.appendChild(HeroConteiner());
  $root.appendChild(MainConteiner());
  $root.appendChild(Footer());

  Router();
}
