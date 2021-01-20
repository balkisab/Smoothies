class Color {
       red = 0;
       green = 0;
       blue = 0 ;
    constructor(red ,green ,blue){
        this.red = red ;
        this.green = green;
        this.blue = blue ;
        
    }
    set red(red){ // mutateur
        this.red = red ;
    }
    get red(){ // acesseur
        return this.red ;
    }
     set green(green){ // mutateur
        this.green = green ;
    }
    get green(){ // acesseur
        return this.green ;
    }
     set blue(blue){ // mutateur
        this.blue = blue ;
    }
    get blue(){ // acesseur
        return this.blue}
    getRGB(){
           return ("rgb("+ this.red +","+ this.green +","+ this.blue + ")")
    
        }

}
   

export default Color;