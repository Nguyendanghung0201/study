import React, { Component } from 'react';
import USER from './user';

export default class HOME extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            email_id: false,
            note: '',
            email: '',
            password: '',
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

    _onLogin = () => {
        const { email, password } = this.state;
        fetch('/api/admin/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
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


    render() {
        const { email_id, note } = this.state;
        if (email_id == false) {
            return (
                <div>
                    <div>Login</div>
                    <label>Email</label>
                    <input id='email' onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    <label>Password</label>
                    <input id='password' onChange={(e) => this.setState({ password: e.target.value })} /><br />
                    <button onClick={this._onLogin}>Login</button>
                    <div>{note}</div>
                </div>
            )
        } else {
            return (
                <div style={{ fontSize: '25px', marginLeft: "200px", }}>
                    <USER />
                </div>
            )

        }


    }
}
