import Fruit from "./Fruit.class.js"
import Color from "./Color.class.js" 

class Kiwi extends Fruit {
       color=new Color(0,128,0);
       acidite=25;
       sucre=7;
       volume=15;
       vitamines =["C"];
    constructor(){
                super();
       
    }

}
export default Kiwi;