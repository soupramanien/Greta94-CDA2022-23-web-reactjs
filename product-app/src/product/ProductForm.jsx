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
    return (
        <>
            <h1>Formulaire d'ajout de produit</h1>
            <form>
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
            </form>
        </>

    )
}