import React, { Component } from 'react';

export class Header extends Component {

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    
    render() {
        const { text } = this.props;
        return (
            <div>
                this is Header {text}
            </div>
        )
    }
}