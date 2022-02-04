// FUNÇOES PARA AJUDAR A LER E ESCREVER NO ARQUIVO SIMPSONS.JSON



const fs = require('fs/promises');

// Node.js File System Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file

function getSimpsons () {
    return fs.readFile('./simpsons.jon', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
    return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons}