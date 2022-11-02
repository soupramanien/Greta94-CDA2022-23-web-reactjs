import { Vehicule } from './Vehicule.js'
//héritage
export default class SUV extends Vehicule {
    constructor(id, marque, couleur, puissance) {
        super(id, marque, couleur)
        this.puissance = puissance
        this.avancer()
    }
    getPuissance() {
        return this.puissance;
    }
    //redefinition de la methode du parent
    toString() {
        let res = super.toString()
        return res + "  puissance " + this.puissance
    }
}