import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Video from './Video'

function Login({users, onSetCurrentUser, setUsers}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const history = useHistory()
    
    function handleLogin(event){
        event.preventDefault();
        console.log(event.target.password.value)

        let attemptedLogin = users.filter((user) => {
            return (user.username === event.target.username.value);
        })

        console.log(attemptedLogin)
        if(attemptedLogin[0]){
            onSetCurrentUser(attemptedLogin[0])
            history.push('/mainpage')
        }else{
            alert("No account with that username")
        }
    }

    const newUser = {
        username: signupUsername,
        password: signupPassword
    }

    function handleSignUp(event){
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then(resp => resp.json())
        .then(newUser => {
            onSetCurrentUser(newUser)
            setUsers([...users, newUser])
            history.push('/mainpage')
        })
    }

    return(
        <div className="login-page">
            <Video />
            <div className="split left">
                <div className="centered">
                    <form className="auth-form" onSubmit={handleLogin}>
                        <input type="text" name="username" value={username} placeholder="Enter Username" onChange={(evt) => setUsername(evt.target.value)}></input>
                        <input type="password" name="password" value={password} placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}></input>
                        <br></br>
                        <button className="btn-submit" type="submit">Log In</button>
                    </form>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="split right">
                <div className="centered">
                    <form className="auth-form" onSubmit={handleSignUp}>
                        {/* <label>Signup: </label>  */}
                        <input type="text" name="username" value={signupUsername} placeholder="Enter Username" onChange={(evt) => setSignupUsername(evt.target.value)}></input>
                        <input type="password" name="password" value={signupPassword} placeholder="Enter Password" onChange={(event) => setSignupPassword(event.target.value)}></input>
                        <br></br>
                        <button className="btn-submit" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;