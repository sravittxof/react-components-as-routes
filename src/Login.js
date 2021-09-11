import React from 'react';

class Login extends React.Component{

    render(){
        <form>
            <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
            </div>
            <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Username</label>
            </div>
            <input type="submit" value="Login"/>
        </form>
    }
}

export default Login