import React, { Component } from "react";

import "./PearsonUser.css";
import { UserRecords } from "./UserRecords";
import { getPearsonUsers } from "./services/getPearsonUsers";

export class PearsonUsers extends Component {

  constructor(props) {
    super(props);
    this.removeDuplct = this.removeDuplct.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    let userList = this.state.users;
    getPearsonUsers(data => {
      userList = userList.concat(data.data);
      userList =  this.removeDuplct(userList,'id');
      this.setState({users :userList});
   });

  }

  removeDuplct( arr, prop ) {
    let obj = {};
    let newArrayList = [];
    let len = arr.length;
    for ( let i = 0; i < len; i++ ) {
      if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
    }

    for ( let key in obj ) newArrayList.push(obj[key]);

    return newArrayList;
  }

  updateUsers( userList ) {
    this.setState({users: userList});
  }

  render() {
    const users = this.state.users;
    return (
      <div className="pearson-users">
        <h1 className='title'>Pearson User Management</h1>
         <UserRecords users={users} updateUsers= {this.updateUsers} />
      </div>
    );
  }
}