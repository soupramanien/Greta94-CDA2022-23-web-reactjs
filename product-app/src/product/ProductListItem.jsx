export default function ProductListItem(props) {
    const prod = props.product
    return <tr key={prod.id.toString()}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
        <td>
            <button
                onClick={() => props.deleteProduct(prod.id)}>Supprimer</button>
            {/* <button onClick={()=>deleteProduct(prod.id)}>Supprimer</button> */}
            <button>Modifier</button>
        </td>
    </tr>
}