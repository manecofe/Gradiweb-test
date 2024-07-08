export async function fetchProducts() {
  const response = await fetch(
    "https://gradistore-spi.herokuapp.com/products/all"
  );
  const data = await response.json();
  console.log(data);
  return data.products.nodes;
}
