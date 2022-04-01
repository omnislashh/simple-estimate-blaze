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

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    project: taskProject,
    price: 10,
    userId: user._id,
    createdAt: new Date(),
  });
const insertProject = (projectText, user) =>
ProjectsCollection.insert({
  text: projectText,
  userId: user._id,
  createdAt: new Date(),
});
//Faire un item insert
const insertItem = (itemText, user) =>
ItemsCollection.insert({
  text: itemText,
  task: itemTask,
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