import React, { Component } from 'react';

export default class TRADE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            buy: true,
            sell: false,
            ListTrade: []

        }
    }

    _onChangeBuy = () => {
        fetch('/api/trade/buy', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.user)
                this.setState({
                    buy: false,
                    ListTrade: data.user,
                    active: true
                })
            })

    };
    _onChangeSell = () => {
        fetch('/api/trade/sell', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.user)
                this.setState({
                    buy: false,
                    ListTrade: data.user,
                    active: false
                })
            })
    };
    _New_trade = () => {
        window.location.replace('/trade/new-trade')
    }
    componentDidMount() {
        const email = localStorage.getItem("key");

        if (email === undefined || email === null || email === '' || email.trim() === '') {
            window.location.replace('/')
        } else {
            fetch('/api/test/' + email)
                .then(res => res.json())
                .then(json => {
                    const { profile } = json;
                    if (profile === 'email wrong') {
                        window.location.replace('/')
                    } else {
                        this._onChangeBuy()
                    }
                })
        }
    };
    test = () => {
        fetch('/api/trade/test', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    _oncancel = () => {
        window.location.replace('/')

    }
     _onMoreDetail = async (email_click, id) => {
     await  localStorage.setItem("id_trade", id)
        const email = localStorage.getItem("key");

        if (email === undefined || email === null || email === '' || email.trim() === '') {
            window.location.replace('/')
        } else {
            if(email_click == email){
                window.location.replace('/trade/edit-trade')
            }else{
                window.location.replace('/trade/detail/' + id)
            }
        }
    }
    render() {
        const { buy, sell, ListTrade } = this.state;
        const style = {
            borderWidth: "2px",
            borderColor: "black",
            border: "solid",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"
        }
        const ListTrade_2 = ListTrade.map((List_Trade, index) =>
            <tr key={index} >
                <th scope="row"> {index} </th>
                <td style = {style} >{List_Trade.name} </td>
                <td  style = {style}>{List_Trade.type} </td>
                <td  style = {style}>{List_Trade.country} </td>
                <td  style = {style}>{List_Trade.price} {List_Trade.currency} </td>
                <td  style = {style}>{List_Trade.min}-{List_Trade.max} Eth </td>
                <td  style = {style}>{List_Trade.method} </td>

                <td>
                    <button onClick={() => this._onMoreDetail(List_Trade.email, List_Trade.id_trade)} style={mystyle_first} >More Detail</button>

                </td>



            </tr>
        );
        const mystyle = {
            backgroundColor: "DodgerBlue",
            fontFamily: "Arial",

        };
        const mystyle_first = {
            padding: "15px",
            fontFamily: "Arial",

        };
        return (
            <div style={{ fontSize: '25px', flexDirection: 'column', alignItems: "center", justifyContent: "center", display: "flex", lineHeight: "40px" }} >
                <div>
                    trade ads
          <button onClick={this._New_trade}>New trade ads</button>
                </div>
                <div>
                    <button onClick={this._onChangeBuy} style={this.state.active ? mystyle : null} >BUY</button>
                    <button onClick={this._onChangeSell} style={!this.state.active ? mystyle : null} >SELL</button>
                </div>
                {buy ? (
                    null
                ) : (
                        <table>
                            <thead style={mystyle_first} >
                                <tr style = {style} >
                                    <th style={mystyle_first} >#</th>
                                    <th>user Create Ad </th>
                                    <th>Type</th>
                                    <th>Country</th>
                                    <th>Price</th>
                                    <th>Min-Max Eth</th>
                                    <th>method</th>
                                    <th>More detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListTrade_2}

                            </tbody>
                        </table>
                    )}
                <div>
                    <button onClick={this.test} style={mystyle_first} >check</button>
                    <button onClick={this._oncancel} style={mystyle_first} >cancel</button>

                </div>
            </div>
        );
    }
}
