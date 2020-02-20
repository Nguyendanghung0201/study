import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

export default class ADD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            email_id: true,
            note: '',
            email: '',
            password: '',
            active: true,
            crypto: '',
            countries: "",
            content : ""
        }
        this.socket = null
    }
    componentDidMount() {
         this.socket = socketIOClient("localhost:3001");
         this.socket.on("receiveChat", (data)=>{
             console.log(data)
         })
        // const email_id = localStorage.getItem("key");

        // if (email_id === undefined || email_id === null || email_id === '' || email_id.trim() === '') {
        // } else {
        //     fetch('/api/test/' + email_id)
        //         .then(res => res.json())
        //         .then(json => {
        //             const { profile } = json;
        //             if (profile === 'email wrong') {
        //             } else {
        //                 this.setState({
        //                     email_id: true,
        //                     profile: profile
        //                 })
        //             }
        //         })
        // }
    };
    _onLogOut = () => {
        localStorage.clear();
        window.location.replace('/');
    };
    _onLogin = () => {
        const { email, password } = this.state;
        fetch('/api/login', {
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
    _onRegister = () => {
        window.location.replace('/register')
    };
    _onCreate_Trade = () => {
        window.location.replace('/trade')
    }
    _onCreate_Loan = () => {
        window.location.replace('/loan')

    }
    _onCreateNews = () => {
        fetch('/api/insert/source_new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'danghung',
                source: ["Coindesk", "Bitcoin News", "Coin"]
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
   
    _onSendMail = () => {
        fetch('/instant/buy', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "flash",
                email : "tungphan@gmail.com",
                phone : "0914339534",
                price : "5000",
                crypto : "ETH",
                amount : "3",
                numberbank : "00827300733",
                bankname : "nguyen dang hung"
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    _onGetToken = () => {
        fetch('/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: "buy"
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data.result)
            })
    }
    _onSendChat = ()=>{
         this.socket.emit("sendChat", this.state.content)
    }
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
                    <div>Crypto</div>
                    <input onChange={(e) => this.setState({ crypto: e.target.value })} />
                    <div>countries</div>
                    <input onChange={(e) => this.setState({ countries: e.target.value })} />
                    <div>Chat</div>

                    <input onChange={(e) => this.setState({ content: e.target.value })} />

                    <div>
                        <button onClick={this._onCreate_Trade}>CREATE TRADE ADS</button> <br />
                        <button onClick={this._onCreate_Loan}>CREATE LOAN ADS</button>
                        <button onClick={this._onCreateNews}>Choose Source</button>
                        <button onClick={this._onGetNew}>GET new</button>
                        <button onClick={this._onSendMail}>Send Mail</button>
                        <button onClick={this._onGetToken}>Get Token</button>
                        <button onClick={this._onSendChat}>Send Chat</button>


                    </div>
                </div>
            )

        }


    }
}
