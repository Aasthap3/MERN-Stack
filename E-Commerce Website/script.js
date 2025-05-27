async function getProduct() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const products = document.getElementById("products");

    products.innerHTML = "";

    data.forEach(element=>{
        const d = document.createElement("div");
        d.innerHTML = `<div class="product-container container my-2 bg-light border rounded d-flex gap-4">
          <div class="product-img my-2 w-25 text-center">
            <img src=${element.image} class="object-fit-contain" style="height:30vh; width:30vh">
          </div>
          <div class="product-details container my-2 mx-3">
            <h5 class="title">${element.title}</h5>
            <h5 class="price">$${element.price}</h5>
            <p class="description text-muted">${element.description}</p>
            <h6 class="category text-muted">${element.category}</h6>
            <div>
              <button class="btn btn-primary">Buy Now</button>
              <button class="btn btn-outline-primary">Add to Cart</button>
            </div>
          </div>
        </div>`;

        products.appendChild(d);
    });
}

getProduct();