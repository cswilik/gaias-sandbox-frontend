import logo from '../logo.svg';
import React, {useState, useEffect} from 'react';
import Login from "./Login"
import MainPage from "./MainPage"

function App() {
  const [ users, setUsers] = useState([])


  
  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
