export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.handleCloseBtnClick = () => {
      this.close();
    };

    this.handleOverlayClick = () => {
      this.close();
    };
  }


  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button');
    closeButton.removeEventListener('click', this.handleCloseBtnClick);
    this.overlay.removeEventListener('click', this.handleOverlayClick);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

#initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button')
    closeButton.addEventListener('click', this.handleCloseBtnClick);
    
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleOverlayClick);
    }
  }

}