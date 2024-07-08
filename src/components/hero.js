import { createElement } from "../utils/domhelpers";
import { angleIcon } from "../utils/angle";

export function renderHero() {
  const hero = createElement(
    "section",
    { id: "hero" },
    createElement(
      "div",
      {},
      createElement(
        "h2",
        { class: "TitleHero" },
        createElement("div", { id: "TitlebgElement" }),
        createElement("span", {}, "Discover our "),
        createElement("span", {}, "planet-friendly offer")
      ),
      createElement(
        "div",
        { class: "buttonBox" },
        createElement(
          "button",
          { class: "carouselButton", id: "left" },
          createElement(
            "div",
            {},
            (() => {
              const starSpan = createElement("span", { class: "angle" });
              starSpan.innerHTML = angleIcon;
              return starSpan;
            })()
          )
        ),
        createElement(
          "button",
          { class: "carouselButton", id: "right" },
          createElement(
            "div",
            {},
            (() => {
              const starSpan = createElement("span", { class: "angle flip" });
              starSpan.innerHTML = angleIcon;
              return starSpan;
            })()
          )
        )
      )
    )
  );

  return hero;
}
