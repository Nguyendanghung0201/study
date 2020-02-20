import React, { Component } from 'react';

export default class ADDCRYPTO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crypto: "",
            countries: "",
            result : ""
        }
    }
    _onAddCrypto = () => {
        const { crypto, countries } = this.state;
        console.log(crypto)
        fetch('/add/crypto/hot', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                crypto: crypto,
                countries: countries
            })
        }).then(res => res.json())
            .then(data => {
               this.setState({
                   result : "ADD successful"
               })
            })

    }
    _onToShow = ()=>{
        window.location.replace('/admin/showcrypto');
    }
    render() {
        return (
            <div  >
                <h2 style={{marginTop : "30px", color : "#ff6b6b",textAlign: "center" }} >ADD NEW CRYPTO TO TRADING IN STIB</h2>

                <div style={{marginTop : "100px", }} >
                    <div style = {{ marginBottom : "20px", fontSize: "20px" }} > New Crypto
                    <input style={{width : '90%', height: "30px", marginLeft: "10px", fontSize: "25px"}} onChange={(e) => this.setState({ crypto: e.target.value })} />
                    </div>
                    <div  style={{fontSize: "20px"}}>Countries
                    <input style={{width : '90%', height: "30px", marginLeft: "28px", fontSize: "25px"}} onChange={(e) => this.setState({ countries: e.target.value })} />
                    </div>
                </div>
                <div style= {{ marginTop : "20px" }} >
                    <button style={{padding: "15px", backgroundColor : "#2e86de" , marginRight : "20px" , cursor : "pointer" , color : "white"  }} onClick={this._onAddCrypto}>ADD New Crypto</button>
                    <button style={{padding: "15px" , backgroundColor : "#ff9f43" ,cursor : "pointer" ,  color : "white" ,}} onClick={this._onToShow}>View Crypto from Countries</button>
                </div>
                <div> {this.state.result} </div>
            </div>
        );
    }
}
