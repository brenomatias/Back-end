// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define('UserBook',
      {},
      { timestamps: false },
    );
  
    UserBook.associate = (models) => {
      models.Book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'book_id',
        otherKey: 'user_id',
      });

      models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'user_id',
        // foreignKey sempre se refere ao model em que chamamos belongsToMany
        otherKey: 'book_id',
        // se refere ao model com o qual estamos criando a associação.
      });
    };
  
    return UserBook;
  };

// Primeiro de tudo, note que não temos nenhum atributo nesse model. Isso é possível porque quando estabelecemos os relacionamentos usando UserBooks como tabela de associação, o Sequelize já entende que esse model precisa ter os IDs das duas tabelas sendo associadas.
