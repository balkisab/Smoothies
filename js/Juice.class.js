import Fruit from "./Fruit.class.js"
import Color from "./Color.class.js" 
import Banane from "./Banane.class.js"
import Kiwi from "./Kiwi.class.js"
import Fraise from "./Fraise.class.js"

class Juice {
       color = new Color(0,0,0);
       height = 0
       countGlobal = 0
       sugar = 0
       acidity=0
       vitamines =0
       
    constructor(){
       this.html=document.getElementById("juice")
       this.sucre=document.querySelector("#sugar-level span")
       this.vitamine=document.querySelector("#vitamin-level span")
       this.acidite=document.querySelector("#acidity-level span")
       this.volume=document.querySelector("#volume-level span")
    }
    
    setColor(color){
    //   this.color = color;
      this.html.style.backgroundColor = color  ;

    }
    getColor(){
        return this.color;
    }
     setHeight(hauteur){
    //   this.height=height; 
       console.log(this.html)
       this.html.style.height = hauteur;
    }
    getHeight(){
        return this.height;
    }
     setSugar(sugar){
      this.sugar=sugar; 
    }
    getSugar(){
        return this.sugar;
    }
    setAcidity(acidity){
      this.acidity=acidity; 
    }
    getAcidity(){
        return this.acidity;
    }
    setVitamines(vitamines){
      this.vitamines=vitamines; 
    }
    getVitamines(){
        return this.vitamines;
    }
    
    addFruit(fruit){
        
        this.height = this.height + fruit.volume 
        this.sugar = this.sugar + fruit.sucre
        this.acidity = this.acidity + fruit.acidite
        this.vitamines = this.vitamines + fruit.vitamines



        console.log(this.height)
        this.setHeight(this.height + "px")
        this.countGlobal++
        this.color.red += fruit.color.red
        this.color.green += fruit.color.green
        this.color.blue += fruit.color.blue
        this.volume.innerHTML = this.height
        this.sucre.innerHTML = this.sugar
        this.acidite.innerHTML = this.acidity
        this.vitamine.innerHTML = this.vitamines
        this.mixColor(fruit)
        // this.composition()
        }
        
    mixColor(fruit){
         let couleur = new Color(this.color.red/this.countGlobal,this.color.green/this.countGlobal,this.color.blue/this.countGlobal)
         console.log(this.color)
        this.setColor(couleur.getRGB())
        }
        
    // composition(){
        
    //     this.volume.innerHTML = this.height
    // }
        
    
   

   
}
export default Juice ;