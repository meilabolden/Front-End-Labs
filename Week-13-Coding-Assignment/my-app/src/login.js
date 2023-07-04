import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export default class Login extends Component {
    render() {
        return (

            <div>
                <form id="form">
                    <h3>Login</h3>

                    <div id="login">
                        <label id="usernameLabel">Username</label><br></br>
                        <input id="usernameInput" placeholder="Username"></input><br></br>
                        <label id="passwordLabel">Password</label><br></br>
                        <input id="passwordInputt" placeholder="Password"></input><br></br>
                        <br></br>
                        <a href="">Forgot Password?</a> <a href="">Signup</a>
                        <br></br>
                        <br></br>
                        <button id="loginButton" type="button" className="btn btn-info">Login</button>
                    </div>
                </form>
            </div> 
        )
    }
}