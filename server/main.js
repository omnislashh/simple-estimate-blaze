import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/db/TasksCollection';
import { ProjectsCollection } from '/imports/db/ProjectsCollection';
import { ItemsCollection } from '/imports/db/ItemsCollection';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';
import '/imports/api/projectsMethods';
import '/imports/api/projectsPublications';
import '/imports/api/itemsMethods';
import '/imports/api/itemsPublications';

// Define these routes in a file loaded on both client and server
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin'
});
Meteor.methods({

  bar() {
    // Do other stuff...
    let priceTotal = 0
    const result = 
    Promise.await(
    TasksCollection.rawCollection()
        .aggregate([{ 
        $group: { 
            _id: null, 
            totalfeatures: { 
                $sum: "$price" 
            } 
        } 
        },
        { $project: { _id: 0, totalfeatures: 1 } }
    ])
        .toArray()
    );
    console.log(result[0])
    for (const [key, value] of Object.entries(result[0])) {
      console.log(`${key}: ${value}`);
      priceTotal = `${value}`
    }
    console.log(priceTotal)
    return priceTotal
  },

  totalSites() {
    // Do other stuff...
    let priceTotal = 0
    const result = 
    Promise.await(
    ProjectsCollection.rawCollection()
        .aggregate([{ 
        $group: { 
            _id: null, 
            totalwebsites: { 
                $sum: "$price" 
            } 
        } 
        },
        { $project: { _id: 0, totalwebsites: 1 } }
    ])
        .toArray()
    );
    console.log(result[0])
    for (const [key, value] of Object.entries(result[0])) {
      console.log(`${key}: ${value}`);
      priceTotal = `${value}`
    }
    console.log(priceTotal)
    return priceTotal
  },

  totalGlobal() {
    let priceTotal1 = 0
    const result1 = 
    Promise.await(
    TasksCollection.rawCollection()
        .aggregate([{ 
        $group: { 
            _id: null, 
            totalfeatures: { 
                $sum: "$price" 
            } 
        } 
        },
        { $project: { _id: 0, totalfeatures: 1 } }
    ])
        .toArray()
    );
    console.log(result1[0])
    for (const [key, value] of Object.entries(result1[0])) {
      console.log(`${key}: ${value}`);
      priceTotal1 = `${value}`
    }
    let priceTotal2 = 0
    const result2 = 
    Promise.await(
    ProjectsCollection.rawCollection()
        .aggregate([{ 
        $group: { 
            _id: null, 
            totalwebsites: { 
                $sum: "$price" 
            } 
        } 
        },
        { $project: { _id: 0, totalwebsites: 1 } }
    ])
        .toArray()
    );
    console.log(result2[0])
    for (const [key, value] of Object.entries(result2[0])) {
      console.log(`${key}: ${value}`);
      priceTotal2 = `${value}`
    }
    return parseFloat(priceTotal1) + parseFloat(priceTotal2)
  }
  
});

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    project: 'Project 1',
    type: "exemple-task",
    price: 10,
    userId: user._id,
    createdAt: new Date(),
  });
const insertProject = (projectText, user) =>
ProjectsCollection.insert({
  text: projectText,
  type: "exemple-project",
  price: 5,
  userId: user._id,
  createdAt: new Date(),
});
//Faire un item insert
const insertItem = (itemText, user) =>
ItemsCollection.insert({
  text: itemText,
  // task: itemTask,
  userId: user._id,
  createdAt: new Date(),
});


const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';
 
Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(taskText => insertTask(taskText, user))
  }
  if (ProjectsCollection.find().count() === 0) {
    [
      'Project 1',
      'Project 2',
      'Project 3'
    ].forEach(projectText => insertProject(projectText, user))
  }
  if (ItemsCollection.find().count() === 0) {
    [
      'Item 1',
      'Item 2',
      'Item 3'
    ].forEach(itemText => insertItem(itemText, user))
  }
});