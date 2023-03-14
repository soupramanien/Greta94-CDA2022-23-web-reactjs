import { useState } from 'react';
import './App.css';
import Login from './auth/Login';
import ProductDisplay from './product/ProductDisplayVersionHook';
// import ProductDisplay
//   from './product/ProductDisplay';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  console.log(user);

  return user ? <ProductDisplay user={user} setUser={setUser} /> : <Login setUser={setUser} />
}

export default App;
