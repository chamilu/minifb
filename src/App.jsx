import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

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
                    <Router>
                        <div>
                            <Route exact path="/" component={Login} />
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}
