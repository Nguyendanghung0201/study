import React, { Component } from 'react';

export default class TRADE_EDIT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trade: 'buy',
            user_name: '',
            Country: "Vietnam",
            method: 'cash',
            state: 'Ha Noi',
            currency: "VND",
            price: "",
            min: '',
            max: '',
            terms: '',
            active: true,
            err: ''
        }
    };
    componentDidMount() {
        const email_id = localStorage.getItem("key");

        if (email_id === undefined || email_id === null || email_id === '' || email_id.trim() === '') {
        } else {
            fetch('/api/test/' + email_id)
                .then(res => res.json())
                .then(json => {
                    const { profile } = json;
                    if (profile === 'email wrong') {
                        window.location.replace('/')
                    } else {
                        this.setState({
                            user_name: profile.id
                        })
                    }
                })
        }
    };
    _onChangeBuy = () => {
        this.setState({
            trade: "buy",
            active : true
        })
    };
    _onChangeSell = () => {
        this.setState({
            trade: "sell",
            active : false
        })
    };

    _onCreateAd = () => {
        const { trade, user_name, Country, state, method, currency, price, min, max, terms } = this.state;

        if (price === "") {
            alert('Enter price')
        } else if (min === '') {
            alert("Enter MIn Eth")
        } else if (max === "") {
            alert("Enter max Eth")
        } else {
            fetch('/api/trade/new_trade', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    trade,
                    user_name,
                    Country,
                    state,
                    method,
                    currency,
                    price,
                    min,
                    max,
                    terms
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result == 'Create Ad successful') {
                        window.location.replace('/trade')
                    }else{
                        this.setState({
                            err: data.result
                        })
                    }
                })

        }
    }
    _oncancel = () => {
        window.location.replace('/trade')

    }
    render() {
        const mystyle_first = {
            padding: "10px",
            fontFamily: "Arial",

        };
        const mystyle = {
            backgroundColor: "DodgerBlue",
            fontFamily: "Arial",

        };
        return (
            <div style={{ fontSize: '30px', flexDirection: 'column', alignItems: "center", justifyContent: "center", display: "flex" }} >
                <div>
                    NEW Trades
         </div>
                <div>
                    <button onClick={this._onChangeBuy} style={this.state.active ? mystyle : null} >BUY</button>
                    <button onClick={this._onChangeSell} style={!this.state.active ? mystyle : null} >SELL</button>
                </div>
                <div>
                    <span  style={mystyle_first}  >Country</span>
                    <select  style={mystyle_first} onChange={(e) => this.setState({ Country: e.target.value })} >
                        <option value="Vietnam">Vietnam</option>
                        <option value="Usa">Usa</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>
                <div>
                    <span  style={mystyle_first}  >State/Province</span>
                    <select  style={mystyle_first} onChange={(e) => this.setState({ state: e.target.value })} >
                        <option value="Ha Noi">Ha Noi</option>
                        <option value="Ho Chi Minh">Ho Chi Minh</option>
                        <option value="Nha Trang">Nha Trang</option>
                        <option value="Dak Lak">Dak Lak</option>
                    </select>
                </div>
                <div>
                    <span  style={mystyle_first}  >Method</span>
                    <select  style={mystyle_first} onChange={(e) => this.setState({ method: e.target.value })} >
                        <option value="cash">cash</option>
                        <option value="paypal">paypal</option>
                        <option value="Bank Tranfer">Bank Tranfer</option>
                    </select>
                </div>
                <div>
                    <span  style={mystyle_first}  >Price</span>
                    <input style={mystyle_first} id='price' onChange={(e) => this.setState({ price: e.target.value })} />
                    <select onChange={(e) => this.setState({ currency: e.target.value })} >
                        <option value="VND">VND</option>
                        <option value="USA">USA</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div>
                <span  style={mystyle_first}  >min</span>
                <input style={mystyle_first} id='min' onChange={(e) => this.setState({ min: e.target.value })} />
                </div>
                <div>
                <span  style={mystyle_first}  >max</span>
                <input style={mystyle_first} id='max' onChange={(e) => this.setState({ max: e.target.value })} />
                </div>
                <div>
                <span  style={mystyle_first}  >terms of trade</span>
                <input style={mystyle_first} id='terms' onChange={(e) => this.setState({ terms: e.target.value })}  style={mystyle_first}  />
                </div>
                <div>
                <button onClick={this._onCreateAd} style={mystyle_first} >EDIT trade</button>
                <button onClick={this._oncancel} style={mystyle_first} >cancel</button>
                </div>
               
<div>{this.state.err}</div>


            </div>
        );
    }
}
