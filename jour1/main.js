// alert(100)

console.log("Hello world")
console.log("Hello world 2")

// test.alert() test() //erreur de chargement

alert("bonjour 1")
console.log("on ne doit pas voir cette ligne");

// window.print();
//définir une fonction
function imprimer(){
    //les instructions à executer
    window.print();
}
//appeler une fonction
imprimer()
//redéfinition d'une fonction
function alert(message){
    console.log(message);
}
alert("bonjour")