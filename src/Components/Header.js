import { useHistory } from "react-router-dom";
import React from 'react';

function Header({currentUser, setCurrentUser}) {
  const history = useHistory()


  // function login() {
  //   fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
  //     method: "POST",
  //   })
  //   .then(r => r.json())
  //   .then(user => {
  //     console.log(user)
  //     setCurrentUser(user)
  //   })
  // }

  function logout() {
    setCurrentUser(null)
    history.push('/')
  }

  return (
      <header className="header">
          <h1 className='title'>Gaia's Sandbox</h1>
      
      {currentUser ? (
          <button className="btn-logout" onClick={logout}>Logout</button>
        ) : null}
      </header>
  );
}

export default Header;