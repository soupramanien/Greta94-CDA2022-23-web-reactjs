import React, { useState } from "react";

export default function ProductForm(props) {
    // const [id, setId] = useState(0);
    //nom de produit
    //  -doit contenir au 2 caracteres
    //  -les caracteres $,@,&,% sont interdit
    //prix doit être strictement superieur à 0
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    //A FAIRE : créer des variables d'état pour stocker les messages d'erreur
    const [nameMessage, setNameMessage] = useState("")
    const [priceMessage, setPriceMessage] = useState("")

    const handleChange = (event) => {
        const value = event.target.value
        switch (event.target.name) {
            // case "id":
            //     console.log("id");
            //     setId(value)
            //     break;
            //nom de produit
            //  -doit contenir au 2 caracteres
            //  -les caracteres $,@,&,% sont interdit
            //prix doit être strictement superieur à 0
            case "name":
                console.log("name");
                //A FAIRE
                // appeler setName ssi value ne contient pas de caracteres spéciaux
                // indice : utiliser RegExp
                if (/^[^$@&%]*$/.test(value)) {
                    setName(value)
                }
                else {
                    setNameMessage("le caractere n'est pas valide")
                }
                if (value.length < 2) {
                    setNameMessage((msg) => msg + " il manque " + (2 - value.length) + " caractere(s)")
                } else {
                    setNameMessage("")
                }
                break;
            case "price":
                console.log("price");
                //A FAIRE
                // appeler setPrice ssi value est vide ou 0 ou un nombre supérieur à 0
                if (value === "") {
                    setPrice(value)
                }
                if (value === "0") {
                    setPrice(value)
                }
                let newVal = parseFloat(value)
                if (!isNaN(newVal) && newVal > 0) {
                    setPrice(newVal)
                    setPriceMessage("");
                }
                else {
                    setPriceMessage("prix n'est pas valide")
                }

                break;
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        //empecher l'action par défaut de navigateur
        event.preventDefault();

        //faire la validation
        //A FAIRE
        //name : vérifier si il y a au moins deux caracteres
        if (!/^[^$@&%]{2,}$/.test(name) || price <= 0) {
            alert("nom et/ou prix n'est pas valide !");
            return;
        };
        //prix : vérifier si le prix est supérieur à 0
        //ajouter le produit
        const product = {
            // id: id,
            name: name,
            price: price,
        }
        //requete AJAX vers le backend

        // const product = {
        //     id,
        //     name
        // }
        props.addProduct(product)
        // props.addProduct({id, name})
    }
    return (
        <>
            <h1>Formulaire d'ajout de produit</h1>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="id">Id</label>
                <input
                    type="number"
                    name="id"
                    value={id}
                    id="id"
                    onChange={handleChange}
                /> */}
                <div>
                    <label htmlFor="name">Nom de produit</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        onChange={handleChange}
                    />
                    {/* A FAIRE : afficher le message d'erreur si name est invalide */}
                    {nameMessage.length > 0 && <p>{nameMessage}</p>}
                </div>
                <div>
                    <label htmlFor="price">Prix de produit</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        id="price"
                        step={0.01}
                        onChange={handleChange}
                    />
                    {/* A FAIRE : afficher le message d'erreur si price est invalide */}
                    {priceMessage.length > 0 && <p>{priceMessage}</p>}
                </div>

                <input type="submit" value="Ajouter Produit" />
                {/* <input type="submit" value="Ajouter Produit" onClick={handleSubmit}/> */}
            </form>
        </>

    )
}