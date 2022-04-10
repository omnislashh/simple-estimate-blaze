import { Template } from 'meteor/templating';
import { TasksCollection } from "../db/TasksCollection"; 
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict'

import './TotalGlobal.html';
import './App.html';

Template.totalglobal.onCreated(async function () {
  const methodCall = (methodName, ...args) => 
    new Promise((resolve, reject) => {
      Meteor.call(methodName, ...args, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  const totalGlobal = methodCall('totalGlobal')
  let feat = await totalGlobal.then(function(result) {
    return result
  })
  console.log("your total global: "+feat.toString()+" €")
  let toUse = feat.toString()
  this.state = new ReactiveDict();
  this.state.set('myTotalResults', toUse);
});

Template.totalglobal.helpers({
  priceSum() {
    // const inst = Template.instance();    
    return inst.state.get('myTotalResults');
  }
});

// Template.taskfeatures.helpers({
//   priceSum: async function () {
//       const methodCall = (methodName, ...args) => 
//         new Promise((resolve, reject) => {
//           Meteor.call(methodName, ...args, (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           });
//         });
//       const totalFeatures = methodCall('bar')
//       let feat = await totalFeatures.then(function(result) {
//         // return result
//       })
//       console.log(feat)
//       return feat
//   }});