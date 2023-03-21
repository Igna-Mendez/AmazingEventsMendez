import { data } from "./data.js";

const queryStr = location.search;

const params = new URLSearchParams(queryStr);

const id = params.get("id");

console.log(id);

const event = data.events.find( eachEvent => eachEvent._id == id);

const container = document.getElementById("detContainer");


container.innerHTML = `<div class="card border-2 border-dark" id="${event._id}">
<img src="${event.image}" class="card-img-top" style="height:11rem" alt="${event.name}"> 
  <div class="card-body justify-content-center row card-text d-flex">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text" style="height:5rem">${event.description}</p>
       </div>
        <div class=" container justify-content-center row card-text d-flex">
        <h6 class="card-text m-2">Date:  ${event.date}</h6>
        <h6 class="card-text m-2">Location:${event.place}</h6>
        <h6 class="card-text m-2">Price: $ ${event.price} </h6>
        <div class=" justify-content-center row d-flex">
        <a href="./index.html" class="d-flex row justify-content-center btn btn-light">Go Back</a>
        
        </div>
  </div>
 </div>`


