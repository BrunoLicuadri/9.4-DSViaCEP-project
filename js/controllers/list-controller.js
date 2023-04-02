import Address from '../models/address.js';

function State(){
    this.listSection = null;
}

const state = new State();

export function init(){
    state.listSection = document.querySelector("#list-section");
}


function createCard(Address){

    const div = document.createElement("div");
    div.classList.add("card-item-list");

    const h3 = document.createElement("h3");
    h3.innerHTML = Address.city;

    const line = document.createElement("p");
    line.classList.add("address-line")
    line.innerHTML = `${Address.street}, ${Address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("address-cep");
    cep.innerHTML = Address.cep;

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}

export function addCard(Address){
    const card = createCard(Address);
    state.listSection.appendChild(card);
}
