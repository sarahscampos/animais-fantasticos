import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scrollAnima.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from './modules/modal.js';
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"', '[data-modal="container"');
modal.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
