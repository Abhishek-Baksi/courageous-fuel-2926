const redirectToHome = document.getElementById("logo");
redirectToHome.addEventListener("click", () => {
  window.location.href = "/Turbo Dynamics/index.html";
});

let data = [];

window.onload = function () {
  fetchMakeupData();
};

async function fetchMakeupData() {
  const req = await fetch("https://backend-root.onrender.com/allproducts");
  const response = await req.json();
  data = response.makeup;
  displayProducts(data);
}

function displayProducts(data) {
  const container = document.getElementById("makeupContainer");

  container.innerHTML = "";

  const row = document.createElement("div");
  row.setAttribute("class", "row");

  data.forEach((element, index) => {
    const col = document.createElement("div");
    col.setAttribute("class", "col");

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "20rem";

    const image = document.createElement("img");
    image.setAttribute("src", element.img);
    image.setAttribute("class", "card-img-top");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const name = document.createElement("h5");
    name.innerText = element.name;
    name.setAttribute("class", "card-title");

    const desc = document.createElement("p");
    desc.setAttribute("class", "card-subtitle mb-2 text-muted");
    desc.innerText = element.description;

    const price = document.createElement("h5");
    price.innerText = "₹ " + element.offerPrice;

    cardBody.append(name, desc, price);
    card.append(image, cardBody);
    col.append(card);
    row.append(col);
  });
  container.append(row);
}
