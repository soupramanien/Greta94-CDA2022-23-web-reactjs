//vehicule
export class Vehicule {
    //attributs/variables d'instance
    //fonction qui est utilisé pour initialiser les variables d'instance
    //invoquée avec le mot clé new
    constructor(id, marque, couleur) {
        this.id = id;
        this.marque = marque;
        this.couleur = couleur;
        Vehicule.nbInstance++
    }
    avancer() {
        console.log("dans la méthode avancer");
    }
    freiner() {
        console.log("dans la méthode freiner");
    }
    toString() {
        return `id: ${this.id} 
                marque: ${this.marque} 
                couleur: ${this.couleur}`
    }
}