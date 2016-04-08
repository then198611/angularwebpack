export default class FormController {
    constructor() {
        this.err = {
            user : false,
            email : false
        }
    }

    showError(typeName) {
        this.err[typeName] = true;
    }
    hideError(typeName){
        this.err[typeName] = false;
    }
    register(){
        alert('you click me!')
    }
}