import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function ProductDisplay(props) {
    //utiliser le hook useState pour ajouter l'etat
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);

    //componentDidMount
    useEffect(() => {
        fetch("http://localhost:3000/data.json").then((res) => {
            console.log(res);
            //convertir le corps de la réponse en objet JS
            return res.json();//renvoie promesse
        }).then((tab) => {
            // this.setState({
            //     products: tab
            // })
            //mettre à jour 'products'
            setProducts(tab)
        })
        //componentWillUnmount
        // return () => {
        //     cleanup
        // };
    }, []);//tableau de dépendance
    // useEffect(() => {
    //     const monFetch = async () => {
    //         const res = await fetch("http://localhost:3000/data.json");
    //         const tab = await res.json();
    //         setProducts(tab)
    //     }
    //     monFetch();
    // }, []);//tableau de dépendance

    const handleShowFormBtn = function () {
        // this.setState((prevState) => {
        //     return {
        //         showFrom: !prevState.showFrom
        //     }
        // })
        // setShowForm(!showForm);
        setShowForm(function (oldShowForm) {
            setShowForm(!oldShowForm)
        })
        // setShowForm((oldShowForm) => setShowForm(!oldShowForm))
    }
    const deleteProduct = (id) => {
        // this.setState((prevState) => {
        //     return {
        //         products: prevState.products.filter((prod) => prod.id !== id)
        //     }
        // })
        // setProducts(products.filter((prod) => prod.id !== id))
        setProducts((oldProducts) => setProducts(oldProducts.filter((prod) => prod.id !== id)))
    }
    return (
        <div>
            <h1>Gestion de produits</h1>
            <button onClick={handleShowFormBtn}>
                {showForm ? "Afficher la liste" : "Ajouter un produit"}
            </button>
            {showForm ?
                <ProductForm />
                :
                <ProductTable
                    products={products}
                    deleteProduct={deleteProduct} />}
        </div>
    )

}