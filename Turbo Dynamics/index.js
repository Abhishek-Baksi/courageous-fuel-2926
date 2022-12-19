

FETCHDATA();
let makeupCardGlobal;


//HOME LINK
let HOME = document.getElementById("logo");

HOME.addEventListener("click",()=>{
  window.location.href = 'index.html';
})
//Ended Click event

//cart link

function cartimg(){
  window.location.href = "cart.html";
}

//SectionTopContainer



let SectionTopContainer = document.getElementById("SectionTopContainer");
let landingPage = document.getElementById("indexSectionTopContainer");
let userBtn = document.getElementById("user");
let SignUppopupWindow = document.getElementById("SignUppopupWindow");

// user button javascript
userBtn.addEventListener("click",()=>{
  
  // document.test.classList.add("signupPopupdivOpen");
  SignUppopupWindow.classList.add("signupPopupdivOpen");
  
})
function closeSignup(){
  // var popup = document.getElementById("SignUppopupWindow");
  // popup.classList.remove("signupPopupdivOpen");

  SignUppopupWindow.classList.remove("signupPopupdivOpen");
}

// Search Functionality
const searchBox = document.getElementById('searchBox');

searchBox.addEventListener("input",(e)=>{
  OpenSearch();
  let searchQuery = e.target.value.toLowerCase();
  // console.log(searchQuery);
  let new_arr=makeupCardGlobal.filter((el)=>{
    return el.name.toLowerCase().includes(searchQuery);
  })
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = ''; // clear the search results container
  for (let result of new_arr) {
    // create an element for the search result
    const resultElement = document.createElement('div');
    resultElement.setAttribute("class","searchEL")
    resultElement.innerHTML = `<p>${result.name}</p>`;//storing all found results in each divs
  
    // append the result element to the search results container
    searchResults.appendChild(resultElement);
    
  }
  
})

function OpenSearch() {
  const viewResults = document.getElementById("searchResults");
  viewResults.classList.toggle("searchResultsOpen");
  viewResults.classList.toggle("searchResultsClose");
}

 













async function FETCHDATA(){
    try {
        let URL = "database/db.json";
        let promise = await fetch(URL);
        let data = await promise.json();
        // mainFectchData=actualData.data;
        // console.log(data);
        let makeupCard = data.makeup;

        makeupCardGlobal=data.makeup;
        // console.log(makeupCard);
         displayProductsSectionTop(makeupCard);

      } catch (error) {
        console.log(error);
      }
}


//Index page DOM id - indexSectionTopContainer;


// Make up Page DOM id- SectionTopContainer
// function displayProductsSectionTop(data){

//     data.forEach((element,index) => {
        
//         let card = document.createElement("div");
//         card.addEventListener("click",()=>{
//           window.location.href = "product.html";
//         })
//         let image = document.createElement("img");
//         image.setAttribute("src",element.img);

//         let headding = document.createElement("h3");
//         headding.innerText=element.name;
//         let desc = document.createElement("h4");
//         desc.innerText=element.description;
//         let shades = document.createElement("p");
//         shades.innerText=element.count;
//         // let favBtn = document.createElement("button");
//         // favBtn.innerText="Favourites";
        
       
        
//         card.append(image,headding,desc,shades);
//         SectionTopContainer.append(card);
//       });
// }

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
    desc.setAttribute("class","desc");
    desc.innerText = element.description;
    let price = document.createElement("h6");
    price.innerText = "₹ "+element.offerPrice;
    let shades = document.createElement("p");
    shades.innerText = element.count;
    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Cart";

    // Add an event listener to the button that adds the product to the cart when clicked
    addToCartBtn.addEventListener("click", () => {
      console.log(element);
      addProductToCart(element);
    });
    card.append(image, headding, desc, shades,price, addToCartBtn);
    SectionTopContainer.append(card);
  });
}


function addProductToCart(product) {
  if (localStorage.getItem("cart") === null) {
    let cart = [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}



