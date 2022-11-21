// App.js
import { useEffect, useState } from 'react';
import './App.css';
import Clock from './Clock';
import NumberList from './NumberList';
import RequireAuth from './RequireAuth';
import Toggle from './Toggle';
import { formatName, random as rand } from './utils';
import Welcome from './Welcome';

const user1 = {
  firstName: "Kylian",
  lastName: "MBAPPE"
}
function App() {
  const [random, setRandom] = useState(1);
  useEffect(() => {
    //componentDidMount
    const timerId = setInterval(() => setRandom(rand(2)), 2000)
    //componentWillUnmount
    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NumberList numbers={[1, 2, 3, 4, 5]} />
        <Toggle />
        {random === 1 && <Clock message="horloge" />}

        <h1 id={user1.firstName}>Bonjour, {formatName(user1)}</h1>
        <RequireAuth isAuthenticated={true}>
          {/* contenu reservé aux utilisateurs authentifiés */}
          <Welcome name="Sara" age="28" />
          <Welcome />
          <Welcome name="Paul" />
          <Welcome name='toto' address='mon adresse' age='12' children={<p>children</p>} />
        </RequireAuth>
      </header>
    </div>
  );

}
//props = {name:undefined}
export default App;
