import React from 'react'

function LoginPage() {
    return (
        <header>
            <h1 style={loginStyle}>Login</h1>
            <form style={formStyle}>
                <input
                    type='text'
                    name='username'
                    placeholder="Username"
                />
                <br>
                </br>
                <br>
                </br>
                <input
                    type='text'
                    name='password'
                    placeholder="Password"
                />
            </form>
            <br>
            </br>
            <button style={btnStyle}>Login</button>
        </header>
    )
}

const loginStyle = {
    textAlign: 'center'
}

const formStyle = {
    textAlign: "center"
}

const btnStyle = {
    background: '#00BFFF',
    display: 'inline-block',
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    margintTop: '20px'
}

export default LoginPage;
