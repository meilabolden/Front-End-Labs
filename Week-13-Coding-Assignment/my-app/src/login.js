import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export default class Login extends Component {
    render() {
        return (

            <div className="form">
                <form id="form">
                    <h3>Login</h3>

                    <div id="login">
                        <input id="usernameInput" type="text" placeholder="  Username"></input><br></br>
                        <input id="passwordInput" type="text"  placeholder="  Password"></input><br></br>
                        <a href="">Forgot Password</a>   
                        <br></br>
                        <br></br>
                        <button id="loginButton" type="submit" className="btn btn-info">Login</button>
                        <p>Don't have an account? <a href="">Signup</a></p>
                    </div>
                </form>
            </div> 
        )
    }
}