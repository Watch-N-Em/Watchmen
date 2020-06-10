import React from 'react';
import logo from '../../watchmen_logo-02.png';
import './landing.css';

function LandingPage() {
    return (
        <div className="App">
            <a href="userpostform">Post something</a>
            <header className="App-header">
                <h1 className="brand-name">
                    wATCHN EM
        </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{
                    width: "80%",
                    margin: "60px auto",
                }}>
                    We are currently under construction!  Check back again soon.  Updated regularly
        </p>
            </header>
        </div>
    );
}

export default LandingPage;