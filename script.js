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

//CRUD - create read update delete
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'));
    db_client.push(client);
    localStorage.setItem("db_cliente", JSON.stringify(client));
    
}