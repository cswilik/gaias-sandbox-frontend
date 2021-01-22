import React, {useState, useEffect} from 'react';
import Login from "./Login"
import MainPage from "./MainPage"

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)


  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, [])
  
  
  return (
    <div className="App">
      <Login users={users} onSetCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
