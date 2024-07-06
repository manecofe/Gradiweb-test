import "./styles/styles.css";
import { renderHero } from "./components/hero";
import { renderFooter } from "./components/footer";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.appendChild(renderHero());
  app.appendChild(renderFooter());
});
