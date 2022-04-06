'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => document.getElementById('modal')
    .classList.remove('active');

const tempClient = {
    nome:"Júlio César",
    email:"juliocesarmcamilo@gmail.com",
    celular: "32165432165",
    cidade: "Caucaia"
}
//CHAMANDO AS FUNÇÕES
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

const getLocalStorange = () => JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorange = () => localStorage.setItem("db_client", JSON.stringify(client));

//CRUD - create read update delete
const createClient = (client) => {
    const dbClient = 
    dbClient.push(client);
    setLocalStorange(dbClient)
    
}