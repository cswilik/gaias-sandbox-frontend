import React, {useState} from 'react'


function Login({users, onCurrentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function handleLogin(event){
        event.preventDefault();

        let attemptedLogin = users.filter((user) => {
            return (user.username === event.target.value.username && user.password === event.target.value.password);
        })

        onCurrentUser(attemptedLogin[0])
    }

    return(
        <div>
            <header>Gaia Sandbox</header>
            <form onSubmit={handleLogin}>
                <label>Login</label> 
                <input type="text" name="username" value={username} placeholder="Enter Username" onChange={(evt) => setUsername(evt.target.value)}></input>
                <input type="text" name="password" value={password} placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}></input>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Login;