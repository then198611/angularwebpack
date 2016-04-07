export default class AboutController {
    constructor(randomText){
        this.random = randomText;
        this.defaultText = '我是原来的样子';
        this.aboutText =  this.defaultText;
    }
    changeText(){
        this.aboutText ='哈哈,我已经变了';
    }
    restoreText(){
        this.aboutText = this.defaultText;
    }
    randomText(){
        this.aboutText = this.random.getText();
    }
}

AboutController.$inject = ['randomText'];