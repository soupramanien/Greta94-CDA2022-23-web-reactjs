//RequireAuth.js
/**
 * 
 * @param {{isAuthenticated, children}} props 
 * @returns 
 */
export default function RequireAuth(props) {
    console.log(props);
    if (props.isAuthenticated) {
        return props.children;
    } else {
        return <p>Login</p>
    }
}