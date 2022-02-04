// Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:

const crypto = require('crypto');

function generateToken() {
    return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;