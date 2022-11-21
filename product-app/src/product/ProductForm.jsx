import React, { useState } from "react";

export default function ProductForm(props) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    const handleChange = (event) => {
        const value = event.target.value
        switch (event.target.name) {
            case "id":
                console.log("id");
                setId(value)
                break;
            case "name":
                console.log("name");
                setName(value)
                break;
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        //empecher l'action par défaut de navigateur
        event.preventDefault();

        //faire la validation
        //ajouter le produit
        const product = {
            id: id,
            name: name
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
                <label htmlFor="id">Id</label>
                <input
                    type="number"
                    name="id"
                    value={id}
                    id="id"
                    onChange={handleChange}
                />
                <label htmlFor="name">Nom de produit</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    onChange={handleChange}
                />
                <input type="submit" value="Ajouter Produit" />
                {/* <input type="submit" value="Ajouter Produit" onClick={handleSubmit}/> */}
            </form>
        </>

    )
}