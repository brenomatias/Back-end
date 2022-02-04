const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // campo email adicionado 'na mao', 
    phone_num: DataTypes.STRING,
    // aqui inserimos o datatype da coluna criada
  });

  return User;
};

module.exports = User;