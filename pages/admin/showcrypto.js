import React, { Component } from 'react';

export default class ADDCRYPTO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            flag: false,
        }
    }
    componentDidMount() {
        fetch('/get/crypto/hot', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data.result)
                this.setState({
                    List: data.result,
                    flag: true
                })
            })
    }
    _onAddCrypto = () => {
        window.location.replace('/admin/addcrypto');
    }

    render() {
        let { List, flag } = this.state;
        const listItems = List.map((Items, index) =>
            <tr key={index} >
                <td style={{ borderColor: "black", borderWidth: "1px", border: "solid" }} > {index} </td>
                <td style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>{Items.countries} </td>
                <td style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>{Items.cryptoTrend} </td>
            </tr>
        )
        return (
            <div  >
                <h2 style={{ marginTop: "30px", color: "#ff6b6b", textAlign: "center" }} >VIEW HOT CRYPTO TRADING IN ALL COUNTRIES</h2>
                <table style={{ borderColor: "black", borderWidth: "1px", border: "solid", width: "80%" }} >
                    <thead >
                        <tr style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>
                            <th style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>stt</th>
                            <th style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>Countries</th>
                            <th style={{ borderColor: "black", borderWidth: "1px", border: "solid" }}>List Crypto</th>
                        </tr>
                    </thead>
                    <tbody>

                        {flag ? (listItems) : (null)}
                    </tbody>
                </table>

                <div style={{ marginTop: "20px" }} >
                    <button style={{ padding: "15px", backgroundColor: "#2e86de", marginRight: "20px", cursor: "pointer", color: "white" }} onClick={this._onAddCrypto}>ADD New Crypto</button>
                </div>

            </div>
        );
    }
}
