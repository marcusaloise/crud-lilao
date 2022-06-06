

'use strict'



// CRUD


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const readClient = () => getLocalStorage()

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

