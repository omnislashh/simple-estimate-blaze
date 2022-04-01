import { check } from 'meteor/check';
import { ProjectsCollection } from '../db/ProjectsCollection';
 
Meteor.methods({
  'projects.insert-site-vitrine'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      type: "site-vitrine",
      price: 20,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  'projects.insert-site-marketplace'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      type: "site-marketplace",
      price: 30,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  'projects.insert-site-ecommerce'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      type: "site-ecommerce",
      price: 40,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  'projects.insert-site-web-app'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      type: "site-web-app",
      price: 50,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'projects.insert-site-autre'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      type: "site-autre",
      price: 60,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'projects.insert'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ProjectsCollection.insert({
      text,
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'projects.remove'(projectId) {
    check(projectId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const project = ProjectsCollection.findOne({ _id: projectId, userId: this.userId });

    if (!project) {
      throw new Meteor.Error('Access denied.');
    }
 
    ProjectsCollection.remove(projectId);
  },
 
  'projects.setIsChecked'(projectId, isChecked) {
    check(projectId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const project = ProjectsCollection.findOne({ _id: projectId, userId: this.userId });

    if (!project) {
      throw new Meteor.Error('Access denied.');
    }
 
    ProjectsCollection.update(projectId, {
      $set: {
        isChecked
      }
    });
  },

  'projects.setIsSingleChecked'(projectId, isSingleChecked) {
    check(projectId, String);
    check(isSingleChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const projectSingle = ProjectsCollection.findOne({ _id: projectId, userId: this.userId });

    if (!projectSingle) {
      throw new Meteor.Error('Access denied.');
    }
 
    ProjectsCollection.update(projectId, {
      $set: {
        isSingleChecked
      }
    });
  }
});

