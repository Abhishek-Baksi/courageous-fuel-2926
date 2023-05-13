function displayProductsSectionTop(data) {
  data.forEach((element, index) => {
    let card = document.createElement("div");
    // card.addEventListener("click", () => {
    //   window.location.href = "product.html";
    // });

    let image = document.createElement("img");
    image.setAttribute("src", element.img);
    let headding = document.createElement("h3");
    headding.innerText = element.name;
    let desc = document.createElement("p");
    desc.setAttribute("class", "desc");
    desc.innerText = element.description;
    let price = document.createElement("h6");
    price.innerText = "₹ " + element.offerPrice;
    let shades = document.createElement("p");
    shades.innerText = element.count;
    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Cart";

    // Add an event listener to the button that adds the product to the cart when clicked
    addToCartBtn.addEventListener("click", () => {
      console.log(element);
      addProductToCart(element);
    });
    card.append(image, headding, desc, shades, price, addToCartBtn);
    SectionTopContainer.append(card);
  });
}


const addToCartBtn = document.createElement("a");
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.setAttribute("class","btn btn-primary")
    addToCartBtn.setAttribute("href", "#somewhere");