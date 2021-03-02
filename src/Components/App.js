import React, {useState, useEffect} from 'react';
import { Route} from 'react-router-dom'
import Header from './Header';
import Login from "./Login"
import MainPage from "./MainPage"
// import Video from "./Video"

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const url = process.env.NODE_ENV === 'production' ? "https://gaias-sandbox-backend.herokuapp.com" : "http://localhost:3000"

  
  useEffect(() => {
    fetch(`${url}/users`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }, [])
  

  return (
    <div className="App">
      {/* <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setDarkMode={setDarkMode}/> */}
      <Route exact path= '/'>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Login users={users} onSetCurrentUser={setCurrentUser} setUsers={setUsers} />
      </Route>
      
      <Route path = '/mainpage'>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <MainPage currentUser={currentUser} />
      </Route>
    </div>
  );
}

export default App;
