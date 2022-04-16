'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
    clearFields();

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
};
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
}

//ACRESCENTANDO OS DADOS NA MINHA TABELA

const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button blue" id="edit-${index}">editar</button>
            <button type="button" class="button red" id="delete-${index}">excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow);
};

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr');
    rows.forEach(row =>row.parentNode.removeChild(row));
};

const updateTable = () => {
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
};

updateTable();

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
        updateTable();
        clearFields();
    }
}

const fillFields = (client) => {
    document.getElementById('name').value = client.name;
    document.getElementById('email').value = client.email;
    document.getElementById('phone').value = client.phone;
    document.getElementById('city').value = client.city;
};

const editClient = (index) => {
    const client = readClient()[index];
    fillFields(client);
    openModal();
};

const editDelete = (event) =>{
    if(event.target.type == 'button'){
        const [action, index] = event.target.id.split('-');

        if(action == 'edit'){
            editClient(index);
        } else{

        }
    };
};

//CHAMANDO AS FUNÇÕES - EVENTOS

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('btnSave')
    .addEventListener('click', saveClient);

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete);