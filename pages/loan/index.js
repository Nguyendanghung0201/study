import React, { Component } from 'react';

export default class LOAN extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  _oncancel = () => {
    window.location.replace('/')

}
  render() {
    return (
      <div>
        <div> LOan </div>
        <button onClick={this._oncancel}  >cancel</button>
      </div>

    );
  }
}
