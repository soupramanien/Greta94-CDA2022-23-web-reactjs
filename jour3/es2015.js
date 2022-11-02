import { Vehicule } from "./Vehicule.js"
import SUV from "./SUV.js"
import obj, { add } from './utils.js'
//classe js

Vehicule.nbInstance = 0
let v1 = new Vehicule(1, "audi", "rouge")
console.log("après v1:" + Vehicule.nbInstance)
let v2 = new Vehicule(2, "peugeot", "noir")
console.log("après v2:" + Vehicule.nbInstance)
console.log("v1 " + v1.toString());
console.log("v2 " + v2.toString());

// let monToString = v1.toString
let monToString = function () {
    return `id: ${this.id} 
                marque: ${this.marque} 
                couleur: ${this.couleur}`
}
console.log(monToString());
console.log("obj " + monToString.apply(obj));
console.log("v1 " + monToString.call(v1));
console.log("window" + monToString.call(window));
monToString = monToString.bind(obj);
console.log("obj " + monToString());



let suv1 = new SUV(1000, "audi", "vert", "150")
console.log("suv1" + suv1.toString());


