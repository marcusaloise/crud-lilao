
'use strict'



// CRUD


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//Delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}


//update
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)

}

// read
const readClient = () => getLocalStorage()

// create
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// vinculando com o index


const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}


const saveClient = () => {
    if (isValidFields()) {
        console.log("cadastrando client")
        const client = {
            nome: document.getElementById('nome').value,
            celular: document.getElementById('celular').value,
            email: document.getElementById('email').value
        }
        createClient(client)
    }
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')
    }
}

const createRow = (client) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>
            <a class="btn-modify" href="">Editar</a>
            <a class="btn-modify" href="">Excluir</a>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}
const updateTable = () => {
    const dbClient = readClient()
    dbClient.forEach(createRow)

}

updateTable()



// Eventos

document.getElementById('adicionar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

