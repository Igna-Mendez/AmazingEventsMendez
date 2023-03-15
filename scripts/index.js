import { data } from "./data.js";

/* 
const pointer = document.getElementById("contHome");
 renderCard(data.events, pointer); */

const contenedor = document.getElementById('contHome')
const contenedorChecks = document.getElementById('checkContainer')
const input = document.querySelector('input')



input.addEventListener('input',doubleFilter)

contenedorChecks.addEventListener('change',doubleFilter)

pintarTarjetas(data.events)
crearCheckboxes(data.events)


function doubleFilter(){
    let arrayFiltrado1 = filtrarPorTexto(data, input.value)
    let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
}

function crearCheckboxes(arrayInfo){
    let checks = ''
    let categories = arrayInfo.map(event => event.category)
    let events = new Set(categories.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    events.forEach(event =>{
        checks += `<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${event}" value="${event}">
        <label class="form-check-label" for="${event}">${event}</label>
      </div>`
    })
    
    contenedorChecks.innerHTML = checks
}

function pintarTarjetas(arrayDatos) {
    if(arrayDatos.length == 0){
        contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
        return
    }
    let tarjetas = ''
    arrayDatos.forEach(event => {
        tarjetas += `<div class="card border-2 border-dark" id="${event._id}">
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
    })
    contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarPorCategoria(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    console.log(arrayChecks);
    let checksChecked = arrayChecks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return arrayInfo
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
    console.log(arrayFiltrado);
    return arrayFiltrado
}



/* 
function renderCard(eventsArray, pointer){
    let cardsData = ''
    for(const event of eventsArray){
        cardsData+=`<div class="card border-2 border-dark" id="${event._id}">
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
          pointer.innerHTML = cardsData;
     
        
    }

 */