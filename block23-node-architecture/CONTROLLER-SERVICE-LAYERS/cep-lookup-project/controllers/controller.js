// ESTE E O TERCEIRO PASSO
// CRIA MODEL E QUERIES
// VAI PARA SERVICES PARA REGRAS DE NEGÓCIO/RESTRIÇÕES
// AI VEM PRA CÁ NO CONTROLLER TRATAR AS REQS

// controllers/Cep.js

const rescue = require('express-rescue');
const service = require('../services/services');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = 
  { findAddressByCep };

// PROXIMO PASSO: MIDDLEWARE DE ERROR