
export default class RandomText {
    constructor(){
        this.texts = ['about aaaaaa','about bbbbbbb','about ccccccc','about dddddd','about eeeeeee','about ffffff'];
    }

    getText(){
        const length = this.texts.length;
        const rand = Math.floor(Math.random() * length);
        return this.texts[rand];
    }
}
