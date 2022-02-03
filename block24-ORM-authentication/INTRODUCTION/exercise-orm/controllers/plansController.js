const { Patients, Plans } = require('../models');

//Crie um endpoint que de acordo com o id de um plano, que deve ser recebido via requisição, liste os pacientes que o possuem.

const getPlanById = (req, res) =>

  Plans.findAll({
    where: { plan_id: req.params.id },
    include: [{ model: Patients, as: 'patients' }]
  })

    .then((listOfPatients) => {

      if (!listOfPatients.length) {
        return res.status(404).send({ message: 'No plan found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => {
      return res.status(500).json({ message: 'Algo deu errado' });
    });

module.exports = getPlanById;