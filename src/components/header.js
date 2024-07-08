import { createElement } from "../utils/domhelpers";

export function renderHeader() {
  const header = createElement(
    "header",
    { id: "header" },
    createElement("p", {}, "GRATIS VERZENDING VANAF €50")
  );
  return header;
}
