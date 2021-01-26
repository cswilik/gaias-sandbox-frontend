import React, {useState, useEffect} from 'react';
import { Route} from 'react-router-dom'
// import { Switch } from 'react-router-dom'
import Header from './Header';
import Login from "./Login"
import MainPage from "./MainPage"

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  


  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }, [])
  

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Route exact path= '/'>
        <Login users={users} onSetCurrentUser={setCurrentUser} />
      </Route>
      <Route path = '/mainpage'>
        <MainPage currentUser={currentUser} />
      </Route>
    </div>
  );
}

export default App;
