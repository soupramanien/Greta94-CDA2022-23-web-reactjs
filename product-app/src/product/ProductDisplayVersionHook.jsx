import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/api";
import useFetch from "../hooks/useFetch";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function ProductDisplay(props) {
    //utiliser le hook useState pour ajouter l'etat
    const [showForm, setShowForm] = useState(false);
    //appeler le hook useFetch()
    // const obj = useFetch("http://localhost:3000/data.json")
    // const status = obj.status
    // const error = obj.error
    // const products1 = obj.data
    const { data: products, setData: setProducts, error, status } =
        useFetch(API_BASE_URL + "/products")
    // const [products, setProducts] = useState([]);

    //componentDidMount
    // useEffect(() => {
    //     fetch("http://localhost:3000/data.json").then((res) => {
    //         console.log(res);
    //         //convertir le corps de la réponse en objet JS
    //         return res.json();//renvoie promesse
    //     }).then((tab) => {
    //         //mettre à jour 'products'
    //         setProducts(tab)
    //     })
    // }, []);//tableau de dépendance
    // useEffect(() => {
    //     const monFetch = async () => {
    //         const res = await fetch("http://localhost:3000/data.json");
    //         const tab = await res.json();
    //         setProducts(tab)
    //     }
    //     monFetch();
    // }, []);//tableau de dépendance

    const handleShowFormBtn = function () {
        setShowForm(function (oldShowForm) {
            return !oldShowForm
        })
        // setShowForm((oldShowForm) => setShowForm(!oldShowForm))
    }
    const deleteProduct = (id) => {
        const headers = new Headers();
        console.log(props.user.accessToken);
        headers.set("Authorization", "Bearer " + props.user.accessToken)
        fetch(API_BASE_URL + "/admin/products/" + id,
            { method: 'delete', headers: headers }).then((res) => {
                if (res.ok) {
                    return res.json()
                }
                else if (res.status === 403) {
                    props.setUser(null)
                    return
                }
            }).then((data) => {
                if (data.ok) {
                    setProducts((oldProducts) => oldProducts.filter((prod) => prod.id !== id))
                }
            })
    }
    const addProduct = (product) => {
        //envoyer une requete
        //créer une en-tete
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", "Bearer " + props.user.accessToken)
        fetch(API_BASE_URL + "/admin/products",
            {
                method: 'POST',//methode HTTP à utiliser
                body: JSON.stringify(product),//sérialisation JS -> JSON
                headers: headers
            }).then((res) => {
                console.log(res);
                if (res.ok) {
                    return res.json()//desérialisation JSON -> JS
                }
                else if (res.status === 403) {
                    props.setUser(null)
                    return
                }
            }).then((product) => {
                setProducts((oldProducts) => [...oldProducts, product])
                setShowForm(false)//afficher la liste des produits
            })
        // setProducts((oldProducts) => oldProducts.push(product)); //faut pas l'utiliser
        // setProducts((oldProducts) => oldProducts.concat(product))
        // setProducts((oldProducts) => [...oldProducts, product])
        // setShowForm(false)//afficher la liste des produits
    }
    if (status === "error") {
        return <p>Echec de récupération de données : {error}</p>
    }
    else if (status === "loading") {
        return <p>En cours de chargement</p>
    }
    else if (status === "success") {
        return (
            <div className="container">
                <h1>Gestion de produits</h1>
                <button onClick={handleShowFormBtn} className="btn btn-primary">
                    {showForm ? "Afficher la liste" : "Ajouter un produit"}
                </button>
                {showForm ?
                    <ProductForm
                        addProduct={addProduct}
                    />
                    :
                    <ProductTable
                        products={products}
                        deleteProduct={deleteProduct} />}
            </div>
        )
    }


}