const express = require('express');
const router = express.Router();
const tarefaController = require('../../../../../Downloads/projeto-pessoal-prog (1)/projeto-pessoal-prog/controllers/tarefaController');

router.get('/', tarefaController.getAllTarefas);
router.get('/:id', tarefaController.getTarefaById);
router.post('/', tarefaController.createTarefa);
router.put('/:id', tarefaController.updateTarefa);
router.delete('/:id', tarefaController.deleteTarefa);

module.exports = router;


