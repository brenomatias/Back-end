module.exports = (sequelize, DataTypes) => {
    const PatientSurgeries = sequelize.define(
      'Patient_surgeries',
      {//atributes
                  },
    // os atributes vao ser vazios aqui porque a tabela
    // vai receber 2 foreign keys

      { timestamps: false },
    );
  
    PatientSurgeries.associate = (models) => {
      models.Surgeries.belongsToMany(models.Patients, {
        as: 'patients',
        through: PatientSurgeries,
        // junction table
        foreignKey: 'surgery_id',
        // foreignKey sempre se refere ao model em que chamamos belongsToMany
        otherKey: 'patient_id',
        //model com o qual estamos criando a associação
      });

      models.Patients.belongsToMany(models.Surgeries, {
        as: 'surgeries',
        through: PatientSurgeries,
        foreignKey: 'patient_id',
        otherKey: 'surgery_id',
      });

     // varias cirurgias diferente podem ser feitas por
     // diferentes usuários 

    // Belongs-To-Many associations are used to connect sources with multiple targets. Furthermore the targets can also have connections to multiple sources.


    };
  
    return PatientSurgeries;
  };