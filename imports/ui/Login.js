import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './Login.html';

Template.login.events({
  // 'submit .login-form'(e) {
  //   e.preventDefault();

  //   const target = e.target;

  //   const username = target.username.value;
  //   const password = target.password.value;

  //   Meteor.loginWithPassword(username, password);
  // }

  'submit .login-form'(e){
    e.preventDefault()

          Meteor.loginWithPassword(e.target.username.value, e.target.password.value, () =>{
            FlowRouter.go('/app')
            // console.log('test')
          })
  }
});

