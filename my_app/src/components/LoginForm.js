import React, { useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginBtn = () => {
        console.log('Login button clicked')
    }
    return (
        <div className="container App">
            <h1>Please Login</h1>
            <br /><br />
            <label htmlFor="username" className="form-label" id="username" >Username</label>
            <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />

            <label htmlFor="password" className="form-label" id="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={() => loginBtn()} className="btn btn-success" style={{ width: '100%' }}>Login</button>

        </div>
    )
}

export default LoginForm
