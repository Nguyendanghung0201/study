import React, { Component } from 'react';

class REGISTER extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            note: ''
        }
    }
    _onRegister = ()=>{
        const { name, email, password, phone } = this.state;
        fetch('/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone
            })
        })
            .then(res => res.json())
            .then(json => {
                const { note } = json;
                if(note ==="ok"){
                    this._onLogin() ;
                }else{
                    this.setState({ note })
                  
                }
                
            })
    };
    _onLogin = ()=>{
        window.location.replace('/');
    }
 
    render() {
        const {note } = this.state;

        return (
            <div>
                  <div>
                <div>Register Account</div>
                <label>Username</label>
                <input id='username' onChange={(e) => this.setState({ name: e.target.value })} /><br />
                <label>Email</label>
                <input id='email' onChange={(e) => this.setState({ email: e.target.value })} /><br />
                <label>Password</label>
                <input id='password' onChange={(e) => this.setState({ password: e.target.value })} /><br />
                <label>Phone</label>
                <input id='phone' onChange={(e) => this.setState({ phone: e.target.value })} /><br />
                <button onClick={this._onRegister}>Register</button>
                <button onClick={this._onLogin}>Login</button>
               <div> {note} </div>
            </div>
            </div>
        )
    }
}

export default Home