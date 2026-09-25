export class Form {
    constructor(formId) {
        this.element = document.getElementById('formId');
    }

    getValues() {
        if (!this.element) return{};
        return Object.fromEntries(new FormData(this.element));
    }

    isValid() {
        if (!this.element) return false;
        return this.element.checkValidity();
    }

    resetForm() {
        if (this.element) {
            this.element.reset();
        }
    }
}
