import { BASE_URL } from "./constant.js";


const cards=document.querySelector(".cards");
async function getData() {
    const res=await axios.get(BASE_URL);
console.log(res.data)
    drawCard(res.data)
    
}

getData()

function drawCard(products){
    cards.innerHTML=" "
    products.forEach(products => {

        cards.innerHTML+=`
         <div class="card">
               <div class="card-img"> <img src="${products.image}" alt=""></div>
                <p><b>${products.title}</b></p>
                <p>${products.price$}</p>
            </div>
        
        
        
        `
    });
}




