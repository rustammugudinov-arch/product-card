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

const consoleTitle = document.querySelector('.title');

consoleTitle.addEventListener('mouseover', function () {
  console.log(consoleTitle.textContent);
});

//Кнопка смены цвета

const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('toggle__button__orange');
});

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('toggle__button__blue');
});
