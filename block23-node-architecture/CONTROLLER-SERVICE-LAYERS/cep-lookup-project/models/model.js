// connection with db
const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

// Função que formata um CEP
const formatCep = (cep) => {
    if(CEP_REGEX.test(cep)) return cep;

    return cep.replace(/(\d{5})(\d{3})/, '$1-$2')
}

// formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf});
  
const findAddresByCEP = async (cepToSearch) => {
   // Removemos todos os traços, pois armazenamos o CEP
   // puro no banco
  const treatedCep = cepToSearch.replace('-', '');

    const query = 'SELECT * FROM ceps WHERE cep = ?';
    const[rows] = await connection.execute(query);

    const result = await connection.execute(query, [treatedCep])
      .then(([results]) => (results.lenght ? results[0] : null));

      if(!result) return null;

      return getNewCep(result);
}


module.exports = findAddresByCEP;

// PRIMEIRO PASSO AQUI: conexão e queries
// DEPOIS VAI PARA os SERVICES
