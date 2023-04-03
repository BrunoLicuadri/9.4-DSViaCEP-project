import * as modalControler from './modal-controller.js';

export function init(){
    const contacLink = document.querySelector(".contact-link");
    contacLink.addEventListener('click', handleContactLinkClick);
}

export function handleContactLinkClick(event){
    event.preventDefault();
    modalControler.showModal();
}