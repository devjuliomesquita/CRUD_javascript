'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => document.getElementById('modal')
    .classList.remove('active');

const tempClient = {
    nome:"teste",
    email:"juliocesarmcamilo@gmail.com",
    celular: "32165432165",
    cidade: "Caucaia"
}

const getLocalStorange = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorange = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

//CRUD - create read update delete
//CREATE
const createClient = (client) => {
    const dbClient = getLocalStorange();
    dbClient.push(client);
    setLocalStorange(dbClient);
}
//READ
const readClient = () => getLocalStorange()

//UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorange(dbClient);
}

//DELETE
const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index,1);
    setLocalStorange(dbClient)
}
//MÉTODOS QUE VERIFICA SE OS CAMPOS SÃO VÁLIDOS
const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

//INTERAÇÃO COM O LAYOUT
const saveClient = () => {
    // SE OS CAMPOS SÃO VÁLIDOS
    if(isValidFields()) {
        const client = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value
        }
        createClient(client);
    }
}

//CHAMANDO AS FUNÇÕES - EVENTOS

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    document.getElementById('btnSave')
    .addEventListener('click', saveClient);