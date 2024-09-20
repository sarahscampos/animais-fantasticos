export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }
  
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); //usar o map em um array de string de numeros dessa forma ira fazer com que seja retornado numeros.
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);

  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;

  }

  estaAberto() {

    //verifica se é dia de semana
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    
    //verifica se está no horário de funcionamento
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }
  
  ativaAberto() {
    if(this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if(this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }

    return this;
  }


  
}
