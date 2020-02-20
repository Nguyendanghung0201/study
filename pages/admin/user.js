import React, { Component } from 'react';

export default class USER extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: false,
            ListUser: [1, 2, 3]
        }
    }
    componentDidMount() {
        const email = localStorage.getItem("key");
        if (email === undefined || email === null || email === '' || email.trim() === '') {
            window.location.replace('/login')
        } else {
            fetch('/api/test/' + email)
                .then(res => res.json())
                .then(json => {
                    const { note } = json;
                    if (note === 'email wrong') {
                        window.location.replace('/')
                    } else {
                        fetch('/api/admin/users')
                            .then(res => res.json())
                            .then(json => {
                                console.log(json)
                                this.setState({
                                    email: true,
                                    ListUser: json.user
                                })
                            })
                    }
                })
        }
    }

    render() {
        let { ListUser, email } = this.state;
        let arr = this.state.ListUser
        console.log(ListUser)
        const listItems = this.state.ListUser.map((profile, index) =>
            <div key={index} >{profile.id}
              <div>username: {profile.name} </div>
                    <div>email: {profile.email} </div>
                    <div>password: {profile.password} </div>
                    <div>phone:  {profile.phone}</div>
            </div>
        );
        if (email == false) {
            return null
        } else {
            return (
                <div  style={{ fontSize: '25px', marginLeft: "200px", flex: "row",}}> {listItems} </div>
            )
        }


    }
}
