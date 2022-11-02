//générer un nombre aléatoire entre  1 et 10
let nombre = Math.ceil((Math.random()*10));
console.log(nombre);
//demander l'user de deviner le nombre (réponse)
do{
    let reponse = prompt("deviner un nombre entre 1 et 10");
    //si nombre aléatoire < réponse
    
    if (nombre < reponse) {
        console.log("c'est moins");
    } else if(nombre > reponse){
        console.log("c'est plus");
    }
    else{
        console.log("c'est exact, vous avez gagné");
        break;
    }
}while (true);
//https://sharemycode.fr/vdx
//afficher "c'est moins"
// sinon afficher "c'est plus"

//tant que nombre aléatoire n'est pas égal à réponse
    //demander l'user de deviner le nombre (réponse)
        //si nombre aléatoire < réponse
            //afficher "c'est moins"
        // sinon afficher "c'est plus"
