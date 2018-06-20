import React, { Component } from "react";

import "./PearsonUser.css";

export class UserRecords extends Component {

deleteUserById( userDelete ) {
    let userList = this.props.users;
    let updateUsers= [];

    for (let user of userList) {
      if (user.id !== userDelete.id) {
        updateUsers.push(user);
      }
    }
   this.props.updateUsers(updateUsers);
}

render() {
  const { users } = this.props;
  const totalUsers = users.map(user =>(
    <div className='user_details' key={user.id}>
      <img
          className="user_avatar"
          src={user.avatar}
          height="80"
          width="80"
          alt="avatar"
         />
      <div className='user_name'>
        {user.first_name} {user.last_name}
      </div>
      <div className='delete_button' onClick={() => this.deleteUserById(user)}>Delete</div>
    </div>
    ))
    
    return (
      <div className= 'users_container'>
          {totalUsers}
      </div>
       );
  }
}
