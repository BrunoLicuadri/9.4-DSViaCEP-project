import Address from '../models/address.js';

function State(){
    
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.cep = null;
    this.street = null;
    this.number = null;
    this.city = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();



export function init(){

    state.inputcep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');


    console.log(state);
}