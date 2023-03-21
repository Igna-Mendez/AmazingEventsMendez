import { data } from "./data.js";


/* const contenedor = document.getElementById('contHome') */
const contenedorChecks = document.getElementById('checkContainer')
const input = document.querySelector('input')



input.addEventListener('input',doubleFilter)

contenedorChecks.addEventListener('change',doubleFilter)

/* renderCards(data.events) */
createChecks(data.events)


let events
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    events = data.results
    renderCards(events)
})
.catch((error)=> console.log(error))


function renderCards(arrayData){
      const cards = arrayData.reduce( (acc, act) => {
        return acc + `<div class="card border-2 border-dark" id="${act._id}">
        <img src="${act.image}" class="card-img-top" style="height:11rem" alt="${act.name}"> 
       <div class="card-body">
                <h5 class="card-title">${act.name}</h5>
                <p class="card-text" style="height:5rem">${act.description}</p>
               <div class="align-content-center align-items-center">
                <div class=" justify-content-center row card-text d-flex">
                        Price: $ ${act.price}
                </div>
                <a href="./details.html?id=${act._id}" class="d-flex row justify-content-center btn btn-light">Details</a>
                
                </div>
                </div>
            </div>
        `
    }, "" )

    const contenedor = document.getElementById( 'contHome' )

    contenedor.innerHTML = cards

}

function doubleFilter(){
    let filtered1 = filterByText(data.events, input.value)
    let filtered2 = filterByCategory(filtered1)
    renderCards(filtered2)
}

function createChecks(arrayInfo){
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

/* function renderCards(arrayDatos) {
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
                <a href="./details.html?id=${event._id}" class="d-flex row justify-content-center btn btn-light">Details</a>
                
                </div>
                </div>
            </div>`
    })
    contenedor.innerHTML = tarjetas
} */

function filterByText(arrayDatos, text){
    let arrayFiltrado = arrayDatos.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFiltrado
}

function filterByCategory(arrayInfo){
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



