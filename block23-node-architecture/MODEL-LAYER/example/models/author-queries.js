const connection = require('./connection');




// Cria uma string com o nome completo do autor
  //     const getNewAuthor = ({id, firstName, middleName, lastName}) => {

  //       // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  //       // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  //       const fullName = [firstName, middleName, lastName]
  //         .filter(Boolean)
  //         .join(' ');

  //       return {
  //       id,
  //       firstName,
  //       middleName,
  //       lastName,
  //       fullName,
  //      };
  // };



  const getAll = async() => {
    
    const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
    const [result] = await connection.execute(query);

    return result;
}      // função que retorna a lista de todos autores

// O model author-queries exporta uma função getAll . Essa função retornará todas as pessoas autoras cadastradas no banco de dados. Utilizamos o método execute para fazer uma query mysql como já estamos acostumados

// Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] 



// FIND BY ID
const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = authorData[0];

  return getAll({
      id,
      firstName,
      middleName,
      lastName,
  });
};


module.exports = { getAll, findById }
