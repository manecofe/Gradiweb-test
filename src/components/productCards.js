import { createElement } from "../utils/domhelpers";
import { fetchProducts } from "../utils/carouselRequest";
import { starIcon } from "../utils/Star";

let productCardsContainer;

export function renderProductCards() {
  productCardsContainer = createElement("section", {
    id: "product-cards-container",
  });

  return productCardsContainer;
}
function getStarCount(tags) {
  const numericTags = tags
    .map((tag) => parseInt(tag, 10))
    .filter((num) => !isNaN(num));
  const average =
    numericTags.reduce((sum, num) => sum + num, 0) / numericTags.length;

  if (average < 100) return 1;
  if (average < 200) return 2;
  if (average < 300) return 3;
  if (average < 400) return 4;
  return 5;
}
export async function updateProductCards() {
  const products = await fetchProducts();

  const productCards = createElement(
    "div",
    { id: "product-cards", class: "product-cards" },
    ...products.map((product) => {
      const starCount = getStarCount(product.tags);
      return createElement(
        "div",
        { class: "product-card" },
        createElement(
          "div",
          { class: "content" },
          createElement(
            "div",
            { class: "imageContainer" },
            createElement("img", {
              src: product.featuredImage.url,
              alt: product.title,
              draggable: "false",
            })
          ),
          createElement("button", {}, "Add to cart"),
          createElement("p", {}, product.title),
          createElement(
            "div",
            {},
            createElement(
              "div",
              {},
              ...Array(starCount)
                .fill()
                .map(() => {
                  const starSpan = createElement("span", { class: "starGold" });
                  starSpan.innerHTML = starIcon;
                  return starSpan;
                }),
              ...Array(5 - starCount)
                .fill()
                .map(() => {
                  const starSpan = createElement("span", { class: "starGrey" });
                  starSpan.innerHTML = starIcon;
                  return starSpan;
                }),
              createElement("div", {}, `(${product.tags[0]})`)
            ),
            createElement(
              "p",
              {},
              createElement("span", {}, `€${product.prices.min.amount}`),
              `€${product.prices.min.amount}`
            )
          )
        )
      );
    })
  );

  const oldProductCards = productCardsContainer.querySelector("#product-cards");
  if (oldProductCards) {
    productCardsContainer.removeChild(oldProductCards);
  }

  productCardsContainer.appendChild(productCards);
}
