//SectionTopContainer
FETCHDATA();


let SectionTopContainer = document.getElementById("SectionTopContainer");



let makeupCardGlobal;




async function FETCHDATA(){
    try {
        let URL = "database/db.json";
        let promise = await fetch(URL);
        let data = await promise.json();
        // mainFectchData=actualData.data;
        // console.log(data);
        let makeupCard = data.makeup;

        makeupCardGlobal=data.makeup;
        console.log(data.makeup);
        displayProductsSectionTop(makeupCard);

      } catch (error) {
        console.log(error);
      }
}

// Make up Page DOM id- SectionTopContainer
function displayProductsSectionTop(data){

    data.forEach((element,index) => {
        
        let card = document.createElement("div");
        let p = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",element.img);

        let headding = document.createElement("h3");
        headding.innerText=element.name;
        let desc = document.createElement("h4");
        desc.innerText=element.description;
        let shades = document.createElement("p");
        shades.innerText=element.count;
        // let favBtn = document.createElement("button");
        // favBtn.innerText="Favourites";
        
       
        
        card.append(image,headding,desc,shades);
        SectionTopContainer.append(card);
      });
}

