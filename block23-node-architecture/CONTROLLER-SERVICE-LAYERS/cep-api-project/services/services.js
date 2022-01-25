// service/Cep.js

const Cep = require('../models/getApiData');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {

  //buscamos na API
  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  // Caso o CEP exista na API, pedimos ao model
  // que armazene-o no banco e retornamos
  // o resultado
  return Cep.create(cepFromApi);
};


module.exports = { findAddressByCep };