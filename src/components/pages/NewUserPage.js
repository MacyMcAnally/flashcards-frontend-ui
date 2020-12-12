import React from 'react'

function NewUserPage() {
    return (
            <header>
                <h1>Create a New User</h1>
                <form>
                    <p>Please enter your Username</p>
                    <input
                        type='text'
                        name='username'
                        placeholder="Username"
                    />
                    <br>
                    </br>
                    <p>Please enter your Password</p>
                    <input
                        type='text'
                        name='password'
                        placeholder="Password"
                    />
                </form>
                <br>
                </br>
                <button>Create User</button>
            </header>
    )
}

export default NewUserPage;
