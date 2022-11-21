import React from "react";
import ProductListItem from "./ProductListItem";

export default function ProductTable(props) {
    console.log(props.products);
    return (
        // fragment
        <>
            <h2>Liste des produits</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((prod) => {
                        return <ProductListItem
                            key={prod.id.toString()}
                            product={prod}
                            deleteProduct={props.deleteProduct}
                        />
                    })}
                </tbody>
            </table>
        </>
    )
}