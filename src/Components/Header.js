import React from 'react';

function Header({currentUser, setCurrentUser}) {


  function login() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      method: "POST",
    })
    .then(r => r.json())
    .then(user => setCurrentUser(user))
  }

  function logout() {
    setCurrentUser(null)
  }

    return (
        <header className="header">
            <h1 className='title'>Gaia's Sandbox</h1>
        
        {currentUser ? (
            <button className="button" onClick={logout}>Logout</button>
          ) : (
            <button className="button" onClick={login}>Login</button>
          )}
        </header>
    )
}

export default Header;