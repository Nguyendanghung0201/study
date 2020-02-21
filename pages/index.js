import React, { Component } from 'react';

export default class HOME extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            email_id: false,
            note: '',
            username: '',
            password: '',
            active: true
        }
    }
    componentDidMount() {
        const email_id = localStorage.getItem("key");
        if (email_id === undefined || email_id === null || email_id === '' || email_id.trim() === '') {
        } else {
            fetch('/api/test/' + email_id)
                .then(res => res.json())
                .then(json => {
                    const { profile } = json;
                    if (profile === 'email wrong') {
                    } else {
                        this.setState({
                            email_id: true,
                            profile: profile
                        })
                    }
                })
        }
    };
    _onLogOut = () => {
        localStorage.clear();
        window.location.replace('/');
    };
    _onLogin = () => {
        const { username, password } = this.state;
        fetch('/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(json => {
                const { note, email } = json;
                if (note === "ok") {
                    localStorage.setItem("key", email)
                    window.location.replace('/')
                } else {
                    this.setState({ note })
                }

            })
    };
    _onRegister = () => {
        window.location.replace('/register')
    };
  
  
    render() {

        const { profile, email_id, note } = this.state;
        if (email_id == false) {
            return (
                <div style={{ fontSize: '30px', }} >
                    <div>Login</div>
                    <label style={{ padding: "10px" }}>Email</label>
                    <input style={{ padding: "10px" }} id='email' onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <label style={{ padding: "10px" }} >Password</label>
                    <input style={{ padding: "10px" }} id='password' onChange={(e) => this.setState({ password: e.target.value })} /><br />
                    <button onClick={this._onLogin}>Login</button>
                    <button onClick={this._onRegister}>Register</button>
                    <div>{note}</div>
                </div>
            )
        } else {
            return (
                <div style={{ fontSize: '35px', marginLeft: "200px", }}>
                    <div > USER PROFILE </div>
                    <div>username: {profile.name} </div>
                    <div>email: {profile.email} </div>
                    <div>password: {profile.password} </div>
                    <div>phone:  {profile.phone}</div>
                    <button onClick={this._onLogOut}>LogOut</button>
                    <div>
                        <button onClick={this._onCreate_Trade}>CREATE TRADE ADS</button> <br />
                        <button onClick={this._onCreate_Loan}>CREATE LOAN ADS</button>
                        <button onClick={this._onCreateNews}>Choose Source</button>
                        <button onClick={this._onGetNew}>GET new</button>
                    </div>
                </div>
            )

        }


    }
}
