//import "./hero.css";

export function renderHero() {
  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <p>Gratis verzending vanaf €30<p>
    <h2 class="hero__title">Bienvenido</h2>
    <p class="hero__description">Esta es una descripción impresionante.</p>
  `;
  return hero;
}
