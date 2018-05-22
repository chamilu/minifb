import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    usernameChanged = event => {
        const newValue = event.target.value;

        this.setState(prevState => ({
            username: newValue,
        }));
    };

    passwordChanged = event => {
        const newValue = event.target.value;

        this.setState(prevState => ({
            password: newValue,
        }));
    };

    handleLoginClick = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <input
                        type="text"
                        placeholder="username"
                        onChange={this.usernameChanged}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input
                        type="password"
                        placeholder="password"
                        onChange={this.passwordChanged}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input
                        type="button"
                        value="Login"
                        onClick={this.handleLoginClick}
                    />
                </div>

                <div style={{ marginTop: 50 }} className="navlink-btn">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        );
    }
}
