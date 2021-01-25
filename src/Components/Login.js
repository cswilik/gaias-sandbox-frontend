import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Login({users, onCurrentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    
    function handleLogin(event){
        event.preventDefault();

        let attemptedLogin = users.filter((user) => {
            return (user.username === event.target.value.username && user.password === event.target.value.password);
        })

        onCurrentUser(attemptedLogin[0])
        history.push('/mainpage')

    }

    return(
        <div>
            
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