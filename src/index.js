import "./styles/styles.scss";
import { renderHeader } from "./components/header";
import { renderHero } from "./components/hero";
import {
  renderProductCards,
  updateProductCards,
} from "./components/productCards";
import { renderCta } from "./components/cta";
import { renderFooter } from "./components/footer";
import { carouselLogic } from "./utils/carouselLogic";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");
  app.appendChild(renderHeader());
  app.appendChild(renderHero());
  app.appendChild(renderProductCards());
  app.appendChild(renderCta());
  app.appendChild(renderFooter());

  await updateProductCards();
  carouselLogic();
});
