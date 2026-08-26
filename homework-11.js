const footerForm = document.querySelector('.footer');

const subscribeForm = document.getElementById('footer-form-center');
const emailEnter = document.querySelector('.footer__form__input');
const subscribeErrorMessage = document.getElementById('subscribe-error');

const openButton = document.getElementById('reg-button');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-modal-button');
const regForm = document.getElementById('registration-form');

const passwordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('reg-confirm');
const regErrorMsg = document.getElementById('reg-error');

let user = null;

footerForm.addEventListener ('submit', (event) => {
    event.preventDefault();
    const formData = {email: emailEnter.value}
    console.log(formData);
});

if (openButton && modalOverlay && closeButton) {
    openButton.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        modalOverlay.querySelector('.modal__window').classList.add('modal-showed'); 
    });

    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        modalOverlay.querySelector('.modal_window').classList.remove('modal-showed');
    });
}


if (regForm) {
    regForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (!regForm.checkValidity()) {
            regErrorMsg.textContent = 'Ошибка: Заполните все поля корректно!';
            regErrorMsg.style.display = 'block';
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            regErrorMsg.textContent = 'Ошибка: Пароли не совпадают!';
            regErrorMsg.style.display = 'block';
            return;
        }

        regErrorMsg.style.display = 'none';

        
        const formData = new FormData(regForm);
        user = {
            name: formData.get('name').trim(),
            surName: formData.get('surName').trim(),
            dateOfBirth: formData.get('dateOfBirth'),
            login: formData.get('login').trim(),
            password: passwordInput.value, 
            createdAt: new Date() 
        };

        console.log(user);

        regForm.reset();
        modalOverlay.style.display = 'none';
        modalOverlay.querySelector('.modal__window').classList.remove('modal-showed');
        alert('Регистрация успешно завершена!');
    });
}