import Address from '../models/address.js';
import * as addressService from '../services/address-service.js';
import * as listController from '../controllers/list-controller.js';

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

    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);
    state.inputCep.addEventListener('change', handleInputCepChange);
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);

}

function handleInputNumberKeyup(event){
    state.address.number = event.target.value;
}

async function handleInputCepChange(event){
    const cep = event.target.value;
    try{
        const address = await addressService.findByCep(cep);

        state.inputStreet.value = address.street;
        state.inputCity.value = address.city;

        state.address = address;

        setFormError("cep", "");

        state.inputNumber.focus();
    }
    catch(e){
        state.inputStreet.value = "";
        state.inputCity.value = "";
        setFormError("cep", "Informe um CEP válido");
        state.inputCep.focus();
    }
}

function handleBtnSaveClick(event){
    event.preventDefault();
    const errors = addressService.getError(state.address);
    const keys = Object.keys(errors);
    /*
    if(keys.length > 0){
        for (let i=0; i<keys.length; i++){
            setFormError(keys[i], errors[keys[i]]);
        }
    }
    */
   // above is the most common way to gog thu an array. Below its a difference an awesome way to do so:
   if(keys.length > 0){
    keys.forEach(keys => {
        setFormError(keys, errors[keys])
    });
   }
    else{
        listController.addCard(state.address);
        clearForm();
    } 
}

function handleBtnClearClick(event){
    event.preventDefault();
    clearForm();
}

function clearForm(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.address = new Address();

    state.inputCep.focus();
}

function setFormError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

function handleInputNumberChange(event){
    if (event.target.value == ""){
        setFormError("number", "Campo Obrigatório");
    }
    else{
        setFormError("number", "");
    }
}