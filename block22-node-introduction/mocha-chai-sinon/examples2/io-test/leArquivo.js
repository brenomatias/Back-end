const fs = require('fs');
//https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// Node.js as a File Server
// The Node.js file system module allows you to work with the file system on your computer.
// To include the File System module, use the require() method:
// var fs = require('fs');

// Common use for the File System module:
// Read files
// Create files
// Update files
// Delete files
// Rename files


function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;