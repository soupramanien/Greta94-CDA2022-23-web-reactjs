import React, { useState } from "react";

export default function ProductForm(props) {
    // const [id, setId] = useState(0);
    //nom de produit
    //  -doit contenir au 2 caracteres
    //  -les caracteres $,@,&,% sont interdit
    //prix doit être strictement superieur à 0
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

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
                setName(value)
                break;
            case "price":
                console.log("price");
                setPrice(value)
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
                </div>

                <input type="submit" value="Ajouter Produit" />
                {/* <input type="submit" value="Ajouter Produit" onClick={handleSubmit}/> */}
            </form>
        </>

    )
}