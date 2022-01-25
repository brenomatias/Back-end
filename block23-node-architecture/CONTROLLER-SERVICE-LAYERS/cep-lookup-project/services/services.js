// depois de criar a query no model vem pra ca

const Cep = require('../models/model');

const getPong = (req, res, next) => {
    return res.status(200).json({message: 'pong'})
}

const CEP_REGEX = /\d{5}-?\d{3}/;

const getCep = (req, res, next) => {
    const { cep } = req.body;
}

const findAddressByCep = async (searchedCep) => {
    // VALIDA O CEP 
    if (!CEP_REGEX.test(cep)) {
        return {
            error : {
                code: 'ivalidData',
                message: 'CEP invalido'
            }
        }
    }

    // BUSCA ATRAVÉS DO MODEL
    const cep = await Cep.findAddressByCep(searchedCep);

    // RETORNO DE ERRO CASO NÃO ACHE NENHUM CEP
    if(!cep){
        return {
            error: {
                code: 'notFound',
                message: 'CEP não encontrado'
            }
        }
    }

    // por fim, retorna o cep correto
    return cep;
}

module.exports = {
    getPong, 
    findAddressByCep };


// AQUI É O SEGUNDO PASSO
// TERCEIRO PASSO É A CAMADA DE CONTROLLER PARA DAR RESPOSTA A REQS