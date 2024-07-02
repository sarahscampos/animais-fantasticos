export default function initFuncionamento() {
  
  const funcionamento = document.querySelector('[data-semana]');
  
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); //usar o map em um array de string de numeros dessa forma ira fazer com que seja retornado numeros.
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  //verifica se é dia de semana
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  
  
  //verifica se está no horário de funcionamento
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  
  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  
}
