import React, { Component } from 'react'
import '../Login/LoginPage.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <input className="LoginPage_text" type="text" placeholder="Phone number, username, or email"/>
                <input className="LoginPage_text" type="password" placeholder="Password"/>
                <button className="login_button">Sign In</button>
            </div>
        );
    }
}

export default SignIn;