export class Modal {
    constructor(modalId) {
        this.modalElement = document.getElementById(modalId);
        this.closeButton = this.modalElement.querySelector('.close__button');

        this.setupCloseButtonListener();
    }
  
    open() {
        if (this.modalElement) {
            this.modalElement.classList.add('modal-showed');
            this.modalElement.style.display = 'flex';
        }
    }

    close() {
        if (this.modalElement) {
            this.modalElement.classList.remove('modal-showed');
            this.modalElement.style.display = 'none';
        }
    }

    isOpen() {
        if (this.modalElement) return false;
        return this.modalElement.classList.contains('modal-showed');
    }

    setupCloseButtonListener() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        } else {
            console.warn('Кнопка закрытия (.close__button) не найдена в модальном окне');
        }
    
    }
}