'use strict';
let local=10;
//on active le mode strict
// en mode strict, le moteur js interdit la création des variables globale
function scope(){
    if(true){
        console.log(local);//10
        local = 15;//15
    }
    b = 15;
}
scope();
console.log(local);//15
// console.log(b);
console.log(a);