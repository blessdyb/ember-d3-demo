import Color from "./property/Color";

class Text {
    public content:string = ''
    public front: number = 14
    public color: Color = new Color(0,0,0);
    constructor(c:string) {
        this.content = c
    }
    public placeHolderMethod() {
        return 'will do something'
    }
}
export default Text;