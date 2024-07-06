//import "./footer.css";

export function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <p class="footer__text">© 2024 Mi Empresa</p>
  `;
  return footer;
}
