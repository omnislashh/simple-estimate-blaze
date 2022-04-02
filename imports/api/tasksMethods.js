import { check } from 'meteor/check';
import { TasksCollection } from '../db/TasksCollection';
 
Meteor.methods({
  'tasks.insert'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  
  'tasks.insert-attente-standard'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-standard",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'tasks.insert-attente-soigne'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-standard",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-attente-haut'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-haute",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasksfeatures.find' () {
    TasksCollection.aggregate([ { 
      $group: { 
          _id: null, 
          totalfeatures: { 
              $sum: "$price" 
          } 
      } 
      },
      { $project: { _id: 0, totalfeatures: 1 } }
  ])
  },
 
  'tasks.remove'(taskId) {
    check(taskId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }
 
    TasksCollection.remove(taskId);
  },
 
  'tasks.setIsChecked'(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }
 
    TasksCollection.update(taskId, {
      $set: {
        isChecked
      }
    });
  }
});

// mongoDb queries

// db.tasks.find({ project : { $in: ["modeling"] } }, { "_id": 0, 
// "text": 1, "project": 1})

