const express = require('express');
const eventoController = require('../controllers/eventoController');

const router = express.Router();


router.get('/', (req, res) => {
    const routes = [
        { method: 'POST', path: '/evento', description: 'Criar um novo evento' },
        { method: 'GET', path: '/evento/:cpf', description: 'Consultar um evento pelo CPF' },
    ];

    res.status(200).json({ message: 'Bem-vindo à API de Eventos', routes });
});

router.post('/evento', eventoController.criarEvento);
router.get('/evento/:cpf', eventoController.consultarEvento);

router.all('*', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = router;
