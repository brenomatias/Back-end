module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
      patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
      plan_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
    });
  
    Patients.associate = (models) => {

      Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });

// BelongsTo associations are associations where the foreign key for the one-to-one relation exists on the source model.
    };
  
    return Patients;
  };