import './comments.js';
import './products.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import { Modal } from './modal.js';
import { Form } from './form.js';


class Phone {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    showPhone() {
        console.log(`${this.brand}, ${this.model}, ${this.price} show info`)
    }
}

class WirelessChargePhone extends Phone {
    constructor(brand, model, price, wirelessCharge) {
        super(brand, model, price);
        this.wirelessCharge = wirelessCharge;
    }
    chargeMethod() {
        console.log(`${this.brand}, ${this.model}, ${this.price} is wireless charging`)
    }
}

const xiaomiMi10 = new Phone('xiaomi', 'mi10', '300$');
const xiaomiMi11 = new Phone('xiaomi', 'mi11', '400$');
xiaomiMi10.showPhone();
xiaomiMi11.showPhone();

const xiaomi14 = new WirelessChargePhone('xiaomi', '14', '600$', 'enable');
xiaomi14.showPhone();
xiaomi14.chargeMethod();



const modalOverlay = new Modal('modal-overlay');
const regForm = new Form('registration-form');

// Открыть модалку
const openButton = document.getElementById('reg-button');

if(openButton) {
    openButton.addEventListener('click', () => {
    modalOverlay.open();
    });
}

console.log(modalOverlay.isOpen());




// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');

changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = 'yellow');
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-first-color-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = 'darkgrey';
});

// Открыть сайт Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com');
    }
    else {
        return;
    }
}

//Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}

//Вывод текста в консоль при наведении мыши

const title = document.querySelector('.title');

title.addEventListener('mouseover', function () {
  console.log(title.textContent);
});

//Кнопка смены цвета

const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('toggle__button');
});
