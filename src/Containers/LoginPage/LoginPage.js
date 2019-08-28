import React, {Component} from 'react';
import axios from 'axios';

import classes from './Login.module.css';

class LoginPage extends Component {
    state = {
        usernameVal: ''
    }

    onSubmitBtnClick = (e) => {
        e.preventDefault();
        let strUsername = e.target.username.value;
        let strPassword = e.target.password.value;

        let data = {
            username: strUsername,
            password: strPassword
        }

        axios.post('https://airbusdemoapi.firebaseio.com/qaifi/login.json', data)
        .then((response) => {
            alert('Login Success')
        })
        .catch()
    }

    onUsernameChanged = (e) => {
        let updatedUsername = e.target.value;
        updatedUsername = updatedUsername.toUpperCase();
        this.setState({usernameVal: updatedUsername});
        console.log(updatedUsername);
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                <h1>Login Page</h1>
                <form className={classes.LoginForm} onSubmit={(event) => this.onSubmitBtnClick(event)}>
                    <input type="text" name="username" onChange={(e) => this.onUsernameChanged(e)} placeholder="Username" value={this.state.usernameVal} required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginPage;