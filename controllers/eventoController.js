const redis = require('redis');
const Evento = require('../models/Evento');
const cpfUtil = require('cpf');

const eventoController = {
  criarEvento: async (req, res) => {

    const redisClient = redis.createClient();
    redisClient.connect();

    const { cpf, ultimaConsulta, movimentacaoFinanceira, ultimaCompra } = req.body;
    if (!cpf) {
      return res.status(400).json({ message: 'O CPF é obrigatório' });
    }
    if (!cpfUtil.isValid(cpf)) {
      return res.status(422).json({ message: 'CPF informado é inválido.' });
    }
    if (!ultimaConsulta && !ultimaConsulta && !ultimaConsulta) {
      return res.status(422).json({ message: 'Evento está vazio.' });
    }

    const novoEvento = new Evento(cpf, ultimaConsulta, movimentacaoFinanceira, ultimaCompra);
    console.log(novoEvento);

    try {
      const result = await redisClient.set(cpf, JSON.stringify(novoEvento));
      console.log('Evento armazenado no Redis');
      return res.status(200).json({ message: 'Evento armazenado com sucesso.' });

    } catch (error) {
      console.error('Erro ao armazenar evento no Redis:', error);
      return res.status(500).json({ error, message: 'Erro ao armazenar evento.' });

    }
  },

  consultarEvento: async (req, res) => {
    const { cpf } = req.params;

    if (!cpf) {
      return res.status(400).json({ message: 'O CPF é obrigatório' });
    }
    if (!cpfUtil.isValid(cpf)) {
      return res.status(422).json({ message: 'CPF informado é inválido.' });
    }

    const redisClient = redis.createClient();
    redisClient.connect();

    try {
      const eventoString = await redisClient.get(cpf);
      console.log('Evento encontrado:', eventoString);

      if (!eventoString) {
        return res.status(404).json({ message: 'Evento não encontrado.' });
      }

      const evento = JSON.parse(eventoString);
      console.log('Evento encontrado:', evento);

      return res.status(200).json(evento);
    } catch (error) {
      console.error('Erro ao consultar evento.', error);
      return res.status(500).json({ error, message: 'Erro ao consultar evento.' });
    }
  }
};

module.exports = eventoController;
