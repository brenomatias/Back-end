module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    });
  
    return Book;
  };

// Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui (e seus tipos de dados). O model pode ser definido de duas formas