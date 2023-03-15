import { data } from "./data.js";


const variable = document.getElementById("contHome");
renderCard(data.events, variable)

function renderCard(eventsArray, variable){
    let cardsData = ''
    for(const event of eventsArray){
        cardsData+=`<div class="card border-2 border-dark">
        <img src="${event.image}" class="card-img-top" style="height:11rem" alt="${event.name}"> 
       <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text" style="height:5rem">${event.description}</p>
               <div class="align-content-center align-items-center">
                <div class=" justify-content-center row card-text d-flex">
                        Price: $ ${event.price}
                </div>
                <a href="./details.html" class="d-flex row justify-content-center btn btn-light">Details</a>
            
                </div>
                </div>
            </div>`
     }
          variable.innerHTML = cardsData;
            
    }
