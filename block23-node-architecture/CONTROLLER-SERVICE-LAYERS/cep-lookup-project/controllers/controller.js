// ESTE E O TERCEIRO PASSO
// CRIA MODEL E QUERIES
// VAI PARA SERVICES PARA REGRAS DE NEGÓCIO/RESTRIÇÕES
// AI VEM PRA CÁ NO CONTROLLER TRATAR AS REQS

const rescue = require('express-rescue');

const service = require('../services/services');

const findAddresByCEP = rescue(async (req, res, next) => {
    const { cep } = req.params;

    const addres = await service.findAddressByCep(cep);

    if (addres.error) {
        return next(addres.error)
    }

    return res.status(200).json(addres);
});

module.exports = findAddresByCEP;

// PROXIMO PASSO: MIDDLEWARE DE ERROR