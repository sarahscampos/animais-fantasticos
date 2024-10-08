import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);

    //define touchstart e click como argumento padrão de events caso o usuário não defina
    if(eventos === undefined) {
      this.eventos = ['touchstart', 'click'];
    }
    else {
      this.eventos = eventos;
    }

  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass); 
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }


  init() {
    if(this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
  
}