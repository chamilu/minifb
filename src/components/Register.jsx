import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <input type="text" placeholder="Email" />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input type="text" placeholder="First name" />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input type="text" placeholder="Last name" />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input type="password" placeholder="Password" />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <input type="password" placeholder="Re-enter password" />
                </div>
                <div style={{ marginBottom: 10, marginTop: 20 }}>
                    <input type="button" value="Register" />
                </div>
            </div>
        );
    }
}
