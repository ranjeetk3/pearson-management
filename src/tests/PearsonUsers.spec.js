import React from "react";
import { shallow, mount } from "enzyme";
import { PearsonUsers } from "../PearsonUsers";
import { UserRecords } from "../UserRecords";
import sinon from 'sinon';

describe("PearsonUsers", () => {
  let component;
  let userComponent;
  const expectedActions = {
    deleteUserById: sinon.spy(),
    updateUsers: sinon.spy()
  };  


  beforeEach(() => {
    component = mount(<PearsonUsers />);
    component.setState({ users: [
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }] });
      userComponent = mount(<UserRecords users={component.state().users} updateUsers={expectedActions.updateUsers}/>);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('renders a user details', () => {
    expect(userComponent.find('.user_details').length).toEqual(1);
  });

  it('renders a user delete button ', () => {
     expect(userComponent.find('.delete_button').text()).toEqual('Delete');
  });

  it('it Should display firstName and LastName of user ', () => {
    expect(userComponent.find('.user_name').text()).toEqual('Charles Morris');
  });

 it('renders a avatar of user ', () => {
     expect(component.state().users[0]).toHaveProperty('avatar');
});

it('Should have a delete button as clickable', () => {
  userComponent
      .find('.delete_button')
      .simulate('click');
   expect(expectedActions.deleteUserById).toHaveBeenCalled;
});

});
