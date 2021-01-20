import Fruit from "./Fruit.class.js"
import Color from "./Color.class.js" 

class Fraise extends Fruit {
       color = new Color(255,0,0);
       acidite=15;
       sucre=4;
       volume=8;
       vitamines =["B6","Mg"];
 
    constructor(){
            super();
     
    }


}
export default Fraise;