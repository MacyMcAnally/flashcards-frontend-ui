import React from 'react';
import { login } from '../../api/api';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from "../Header";

function LoginPage() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const doLogin = async(e) => {
        e.preventDefault();
        try {
            await login(formData.username, formData.password);
            //console.log('logged in!');
            history.push('/ui/UserHome');
        } catch (e) {
            //console.log('couldnt login');
            history.push('/ui/UserError');
        }

    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <Header/>
        <header>
            <h1 id='L'>Login</h1>
            <form onSubmit={doLogin}>
                <input
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={formData['username']}
                    onChange={handleChange}
                />
                <br>
                </br>
                <br>
                </br>
                <input
                    type='text'
                    name='password'
                    placeholder="Password"
                    value={formData['password']}
                    onChange={handleChange}
                />
                <br>
                </br>
                <button style={btnStyle}>Login</button>
            </form>
            <br>
            </br>
        </header>
        </>
    )
}

const btnStyle = {
    background: '#00BFFF',
    display: 'inline-block',
    fontSize: '18px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    margin: '20px'
}

export default LoginPage;
