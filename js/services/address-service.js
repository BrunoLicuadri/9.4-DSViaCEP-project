import * as requestService from './request-service.js';
import Address from '../models/address.js';

export async function findByCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);
    const address = new Address(result.cep, result.logradouro, null, result.localidade);
    return address;
}

export function getError(Address){
    const errors = {};

    if (!Address.cep || Address.cep == "" ){
        errors.cep = "Campo Obrigatório";
    }

    if (!Address.number || Address.number == "" ){
        errors.number= "Campo Obrigatório";
    }

    return errors;
}