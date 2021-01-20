import Fruit from "./Fruit.class.js"
import Color from "./Color.class.js" 
class Banane extends Fruit {
       color = new Color(255,255,0);
       acidite=5;
       sucre=10;
       volume=30;
       vitamines =["B6","Mg"];
 
    constructor(){
            super();
    }


   
}
export default Banane;