import { createElement } from "../utils/domhelpers";

export function renderFooter() {
  const footer = createElement(
    "div",
    { id: "footer", class: "footer" },
    createElement(
      "p",
      {},
      createElement(
        "section",
        { id: "subscription" },
        createElement("h2", {}, "Join the green revolution without commitment"),
        createElement(
          "p",
          {},
          "If you are missing something and don't want to miss future promotions or our future products"
        ),
        createElement(
          "form",
          {},
          createElement("input", { type: "email", placeholder: "Your Email" }),
          createElement("button", { type: "submit" }, "Send")
        )
      )
    )
  );
  return footer;
}
