export default function ProductListItem(props) {
    const prod = props.product
    return <tr key={prod.id.toString()}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
        <td>
            <button className="btn btn-success">Afficher</button>
            <button className="btn btn-warning">Modifier</button>
            <button className="btn btn-danger"
                onClick={() => props.deleteProduct(prod.id)}>Supprimer</button>
            {/* <button onClick={()=>deleteProduct(prod.id)}>Supprimer</button> */}

        </td>
    </tr>
}