import React, { Component } from 'react';
import Login from './components/loginComponent';

const styles = {
    outer: {
        textAlign: 'center',
        paddingTop: 30,
    },
};

export default class App extends Component {
    render() {
        return (
            <div style={styles.outer}>
                <p style={{ fontSize: 25 }}>mini-fb</p>

                <div style={{ marginTop: 50 }}>
                    <Login />

                    <div style={{ marginTop: 50 }}>
                        <input type="button" value="Register" />
                    </div>
                </div>
            </div>
        );
    }
}
