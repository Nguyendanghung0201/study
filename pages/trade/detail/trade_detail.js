import React, { Component } from 'react';


export default class DETAIL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: false,
      name: '',
      Location: '',
      method: '',
      price: '',
      min: '',
      max: '',
      type: '',
      term: ''
    }
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
            this.More_Detail();
          }
        })
    }
  };
  More_Detail = () => {
    const id_trade = localStorage.getItem("id_trade");
    fetch("/api/detail/trade", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_trade
      })
    }).then(res => res.json())
      .then(json => {
        const data = json.user;
        console.log(data)
        this.setState({
          email_id: true,
          name: data.name,
          location: data.state + "," + data.country,
          method: data.method,
          price: data.price,
          min: data.min,
          max: data.max,
          type: data.type,
          term: data.terms_of_trade == "" ? "no data" : data.terms_of_trade
        })
      })
  };
  _onTrade = () => {
    alert('ok')
  };
  _oncancel = () => {
    window.location.replace('/trade')
  };

  render() {

    const mystyle_first = {
      padding: "15px",
      fontFamily: "Arial",

    };
    const style = {
      color: "red"
    }
    const { email_id, name, location, method, price, min, max, type, term } = this.state;
    return (
      <div style={{ fontSize: '30px', flexDirection: 'column', alignItems: "center", justifyContent: "center", display: "flex", lineHeight: "40px" }} >
        {email_id ? (
          <div>
            <div> Trade Order Details </div>
            <div onClick={this._showinf} >
              <div><span style={style}> {name}</span>'s Profile </div>
            </div>
            <div> Location :   <span style={style} > {location} </span> </div>
            <div>method : <span style={style} > {method} </span></div>
            <div> price : <span style={style} > {price} </span></div>

            <div>Min : <span style={style}> {min}</span></div>
            <div>max : <span style={style}> {max}</span></div>
            <div>term of trade : <span style={style}> {term}</span></div>

            <button onClick={this._onTrade} style={mystyle_first} >{type}</button>

            <button onClick={this._oncancel} style={mystyle_first} >cancel</button>
          </div>
        ) : (
            null
          )}

      </div>

    );
  }
}
