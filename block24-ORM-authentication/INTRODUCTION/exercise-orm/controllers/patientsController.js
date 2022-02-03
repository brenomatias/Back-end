const { Patients, Plans, Surgeries } = require('../models');



//Crie um endpoint que liste todos os pacientes e seus respectivos planos;
// eager load
const getAllPatientsPlans = (_req, res) =>

Patients.findAll({ include: { model: Plans, as: 'plan' } })

  .then((listOfPatients) => {
    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  })
  .catch(() => {
    return res.status(500).json({ message: 'Algo deu errado' });
  });
// Crie um endpoint que liste todos os pacientes e seus respectivos planos;



// Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas;
const getAllPatientsSurgeries = (_req, res) =>
Patients.findAll({
  include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } }

//   through: { attributes: [] } deve estar presente, pois sem ela, em cada surgeries , apareceriam todos seus respectivos patients
})
  .then((listOfPatients) => {
    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  })
  .catch(() => {
    return res.status(500).json({ message: 'Algo deu errado' });
  });
// Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas;


// Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável;
const getPatientsAndSurgeriesNoDoctor = (_req, res) =>
Patients.findAll({
  include: {
    model: Surgeries,
    as: 'surgeries',
    attributes: { exclude: ['doctor'] },
    through: { attributes: [] }
  }
})
  .then((listOfPatients) => {
    if (listOfPatients === null) {
      return res.status(404).send({ message: 'No patients found' });
    }

    return res.status(200).json(listOfPatients);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
//   Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável;




//  Crie um endpoint capaz de adicionar um novo paciente;
const createPatients = (req, res) => {
  const { fullname, plan_id } = req.body;
  Patients.create({ fullname, plan_id })
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
};
//  Crie um endpoint capaz de adicionar um novo paciente;


module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
};