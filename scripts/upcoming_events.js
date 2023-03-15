import { data } from "./data.js";

const variable = document.getElementById('contUpcoming');
renderUpcomingEvents(data.events, variable);

export function renderUpcomingEvents(eventsArray, variable) {


  let upcomingEvents = [];
  
  let dateVar = data.currentDate;
  for (let i = 0; i < eventsArray.length; i++) {
    let eventDate = eventsArray[i].date;
    if (eventDate > dateVar) {
      upcomingEvents.push(eventsArray[i]);
    }
  }
  let cardsData = ''
  for(const event of upcomingEvents){
    cardsData+= ` <div class="card border-2 border-dark">
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
        </div>`}
        variable.innerHTML = cardsData;
 }
