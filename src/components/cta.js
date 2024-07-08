import { createElement } from "../utils/domhelpers";

export function renderCta() {
  const cta = createElement(
    "section",
    { id: "cta" },
    createElement("button", {}, "Browse All Products")
  );
  return cta;
}
