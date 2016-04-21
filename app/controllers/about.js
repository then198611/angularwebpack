export default class AboutController {
    constructor(randomText){
        this.random = randomText;
        this.arrowImg = require('../images/arrow.png');
        this.bannerImg = require('../images/index2-banner1.png');
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