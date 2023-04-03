
function State(){
    this.container = null;
    this.btnClose = null;
    this.cep = null;

}

const state = new State();

export function init(){
    state.container = document.querySelector(".modal-container");
    state.btnClose = document.querySelector("#modal-contact-close");
    state.inputCep = document.forms.newAddress.cep;

    state.btnClose.addEventListener('click', handleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);
}

export function showModal(){
    state.container.classList.add("active");
}

export function closeModal(){
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event){
    event.preventDefault();
    closeModal();
    state.inputCep.focus();
}

function handleContainerClick(event){
    event.preventDefault();
    if( event.target == this){
        closeModal();
        state.inputCep.focus();
    }
}