import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => {
        preencherAnimais(animal);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    }
    catch(erro) {
      console.log(erro);
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
  
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
  
    return div;
  }

  return criarAnimais();

}
