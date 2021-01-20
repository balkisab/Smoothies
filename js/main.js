import Fruit from "./Fruit.class.js"
import Banane from "./Banane.class.js"
import Kiwi from "./Kiwi.class.js"
import Fraise from "./Fraise.class.js"
import Juice from "./Juice.class.js"



document.addEventListener('DOMContentLoaded', afterDomLoaded)

function afterDomLoaded() {

    let banana = document.getElementById("banana");
    let fraise = document.getElementById("strawberry");
    let kiwi = document.getElementById("kiwi");
    let container=document.getElementById("juice-container")
    console.log()
    let juice = new Juice()
    // let countGlobal = 0
    // let countBanane = 0
    // let countFraise= 0
    // let countKiwi = 0
    
    function fonctionClickbanane() {
    //  if(juice.height <  + ){
        let banane = new Banane()
        juice.addFruit(banane)
        // juice.mixColor()
        // console.log(juice.getColor())
        // console.log(juice.height)
        
    }

    function fonctionClickfraise() {
        // countGlobal ++
        // countFraise++
        let fraise = new Fraise()
        juice.addFruit(fraise)
        // juice.mixColor(countGlobal,countBanane,countFraise,countKiwi)

        // console.log(juice.getColor())
        // console.log(juice.height)
       
    }

    function fonctionClickkiwi() {
        // countGlobal ++
        // countKiwi ++
        let kiwi = new Kiwi()
        juice.addFruit(kiwi)
        // juice.mixColor(countGlobal,countBanane,countFraise,countKiwi)

        // console.log(juice.getColor())
        // console.log(juice.height)

    }


    banana.addEventListener("click", fonctionClickbanane);
    fraise.addEventListener("click", fonctionClickfraise);
    kiwi.addEventListener("click", fonctionClickkiwi);



}