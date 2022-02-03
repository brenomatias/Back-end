module.exports = (sequelize, DataTypes) => {
    const Plans = sequelize.define('Plans', {
      plan_id: { type: DataTypes.INTEGER, primaryKey: true },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
    });
  
    Plans.associate = (models) => {

      Plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' });

      // em Patients existem diversos planos (um diferente para cada paciente 1:N)

      //One-To-Many(hasMany) associations are connecting one source with multiple targets. The targets however are again connected to exactly one specific source.


    };
  
    return Plans;
  };