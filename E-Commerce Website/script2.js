async function getProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const products = document.getElementById("products");

  products.innerHTML = "";

  data.forEach((element) => {
    const d = document.createElement("div");
    d.classList.add("col-4", "mt-2", "border", "bg-light", "rounded");
    d.innerHTML = `
            <div class="product-img text-center">
              <img src=${
                element.image
              }  style="width: 30vh;height: 40vh;"  class="object-fit-content"/>
            </div>
            <div class="product-details my-2 mx-3">
              <h5 class="title">${
                element.title.length > 40
                  ? element.title.slice(0,40) + "..."
                  : element.title
              }</h5>
              <h5 class="price">$${element.price}</h5>
              <h6 class="category text-muted">${element.category}</h6>
              <div>
              <button class="btn btn-primary">Buy Now</button>
              <button class="btn btn-outline-primary">Add to Cart</button>
            </div>
            </div>`;

    products.appendChild(d);
  });
}

getProduct();
