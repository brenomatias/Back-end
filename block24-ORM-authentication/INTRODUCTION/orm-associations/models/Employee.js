// models/Employee.js
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    });
  
    Employee.associate = (models) => {
      Employee.hasOne(models.Address,
        { foreignKey: 'employee_id', as: 'addresses' });
    };
    // A função Employee.associate = (models) => {} , que criamos é onde iremos declarar as associações daquele model

    //   Employee.associate = (models) => {
      // Employee.hasMany(models.Address,     (HASMANY)
      //   { foreignKey: 'employee_id', as: 'addresses' });
 //   };
 
    return Employee;
  };

//   No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id , e que o model Employee deve chamar de addresses (note a letra minúscula), como definido na propriedade as

// Essa função é chamada pelo arquivo models/index.js , criado pelo comando npx sequelize-cli init que você já executou ao começar o exemplo.

// No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo . A tradução literal desses métodos facilita o seu entendimento.
// hasOne = tem um
// belongsTo = pertencente a