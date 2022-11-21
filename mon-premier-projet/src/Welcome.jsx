/**
 * 
 * @param {{name: "", address:"", age:""}} props 
 * @returns 
 */
export default function Welcome(props) {//props = {name: ""}
    console.log(props);
    return <h2>Bonjour, {props.name}</h2>
}
