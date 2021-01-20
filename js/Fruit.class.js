class Fruit {
    color = "red";
    acidite = 7
    sucre = 4
    volume = 8
    vitamines =["B6", "Mg"] ;

    constructor(){
       
    }

    set color(color){
       this.color=color; 
    }
    get color(){
        return this.color;
    }
     set acidite(acidite){
       this.acidite=acidite; 
    }
    get acidite(){
        return this.acidite;
    }
     set sucre(sucre){
       this.sucre=sucre; 
    }
    get sucre(){
        return this.sucre;
    }
     set volume(volume){
       this.volume=volume; 
    }
    get volume(){
        return this.volume;
    }
     set vitamines(vitamines){
       this.vitamines=vitamines; 
    }
    get vitamines(){
        return this.vitamines;
    }
}
export default Fruit;