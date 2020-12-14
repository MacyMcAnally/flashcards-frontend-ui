import React, { useState } from 'react'
import { createUser, getCurrentUser } from '../../api/api';
import { useHistory } from 'react-router-dom';
import Header from '../Header';

function NewUserPage() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const createNewUser = async(e) => {
        e.preventDefault();
        try{
            await createUser(formData.username, formData.password);
            //console.log("Got it");
            history.push('/ui/Login');
        }catch (e){
            console.log(e);
            console.log("nope");
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
            <Header />
        <header>
            <h1 id='CANU'>Create A New User</h1>
            <form onSubmit={createNewUser}>
                <p>Please enter your Username: </p>
                <input
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={formData['username']}
                    onChange={handleChange}
                />
                <br>
                </br>
                <p>Please enter your Password: </p>
                <input
                    type='text'
                    name='password'
                    placeholder="Password"
                    value={formData['password']}
                    onChange={handleChange}
                />
                <br>
                </br>
                <button style={btnStyle}>Create User</button>
            </form>
        </header>
        </>
    )
}

const btnStyle = {
    margin: '20px'
}

export default NewUserPage;
