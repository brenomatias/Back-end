const { Patients, Surgeries } = require('../models');

//Crie um endpoint que de acordo com o nome do médico, que deve ser recebido via requisição, liste todas as cirurgias realizadas pelo mesmo, um get na url http://localhost:3000/surgeries/Rey%20Dos%20Santos deve retornar as cirurgias realizadas pelo médico Rey Dos Santos 

const getDoctorSurgeries = (req, res) =>
  Surgeries.findAll({
    where: { doctor: req.params.name },
    include: [{ model: Patients, as: 'patients', through: { attributes: [] } }]
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: 'No plan found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));

module.exports = getDoctorSurgeries;