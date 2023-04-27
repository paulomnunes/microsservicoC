class Evento {
  constructor(cpf, ultimaConsulta, movimentacaoFinanceira, ultimaCompra) {
    this.cpf = cpf;
    this.ultimaConsulta = ultimaConsulta;
    this.movimentacaoFinanceira = movimentacaoFinanceira;
    this.ultimaCompra = ultimaCompra;
  }
}

module.exports = Evento;
