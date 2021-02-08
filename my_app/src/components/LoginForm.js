import React, { useState, useEffect } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [login, setLogin] = useState(true)

    let history = useHistory()

    useEffect(() => {
        if (token['mytoken']) {
            history.push('/articles')
        }
    })

    const loginBtn = () => {
        APIService.loginUser({ username, password })
            .then(resp => setToken('mytoken', resp.token))
            .catch(error => console.log(error))
    }

    const registerBtn = () => {
        console.log('register btn')
    }
    return (
        <div className="container App">


            {
                login ? <h1>Please Login</h1>
                    :
                    <h1>Please Register</h1>
            }


            <br /><br />
            <label htmlFor="username" className="form-label" id="username" >Username</label>
            <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />

            <label htmlFor="password" className="form-label" id="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <br />

            {
                login ?
                    <button className="btn btn-success" style={{ width: '100%' }} onClick={() => loginBtn()}>Login</button>
                    :
                    <button className="btn btn-info" style={{ width: '100%' }} onClick={() => registerBtn()}>Register</button>


            }

            <div className="mb-3">
                <br />
                {
                    login ?
                        <div>
                            <h3>Don't have an account? Click below</h3>
                            <button className="btn btn-info" style={{ width: '100%' }} onClick={() => setLogin(false)}>Register</button>
                        </div>
                        :
                        <div>
                            <h3>Already have an account? Click below</h3>
                            <button className="btn btn-success" style={{ width: '100%' }} onClick={() => setLogin(true)}>Login</button>
                        </div>
                }
            </div>

        </div>
    )
}

export default LoginForm
