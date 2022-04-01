import { Template } from 'meteor/templating';
import { TasksCollection } from "../db/TasksCollection"; 
import { ProjectsCollection } from "../db/ProjectsCollection";
import { ItemsCollection } from "../db/ItemsCollection";
import { ReactiveDict } from 'meteor/reactive-dict';

import './App.html';
import './Task.js';
import './Project.js';
import "./Login.js";

import "./Item.js";
import "./Testing.js";
 
import './Tasks.html';
import './Task.html';
import './Project.html';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();
 
const HIDE_COMPLETED_STRING = "hideCompleted";
const IS_LOADING_STRING = "isLoading";

const getTasksFilter = () => {
    const user = getUser();
  
    const hideCompletedFilter = { isChecked: { $ne: true } };
  
    const userFilter = user ? { userId: user._id } : {};
  
    const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
  
    return { userFilter, pendingOnlyFilter };
  }

const getProjectsFilter = () => {
  const user = getUser();

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  return { userFilter, pendingOnlyFilter };
}
const getItemsFilter = () => {
  const user = getUser();

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  return { userFilter, pendingOnlyFilter };
}

Template.alltasks.events({
    "click #hide-completed-button"(event, instance) {
      const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
    },
    'click .user'() {
        Meteor.logout();
      }
  });

Template.alltasks.onCreated(function alltasksOnCreated() {
    this.state = new ReactiveDict();
    const handler = Meteor.subscribe('tasks');
    Tracker.autorun(() => {
        this.state.set(IS_LOADING_STRING, !handler.ready());
    });
  });
Template.alltasks.onCreated(function alltasksOnCreated() {
  this.state = new ReactiveDict();
  const handler = Meteor.subscribe('tasksfeatures');
  Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});
Template.alltasks.onCreated(function alltasksOnCreated() {
  this.state = new ReactiveDict();
  const handler = Meteor.subscribe('projects');
  Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});
Template.alltasks.onCreated(function alltasksOnCreated() {
  this.state = new ReactiveDict();
  const handler = Meteor.subscribe('items');
  Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});

Template.alltasks.helpers({
    tasks() {
      const instance = Template.instance();
      const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      const { pendingOnlyFilter, userFilter } = getTasksFilter();
    //   if (!isUserLogged()) {
    //       return [];
    //     }
      const hideCompletedFilter = { isChecked: { $ne: true } };
  
      return TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
        sort: { createdAt: -1 },
      }).fetch();
    },
    
    projects() {
      const instance = Template.instance();
      const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      const { pendingOnlyFilter, userFilter } = getProjectsFilter();
    //   if (!isUserLogged()) {
    //       return [];
    //     }
      const hideCompletedFilter = { isChecked: { $ne: true } };
  
      return ProjectsCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
          sort: { createdAt: -1 },
        }).fetch();
    },
    items() {
      const instance = Template.instance();
      const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      const { pendingOnlyFilter, userFilter } = getItemsFilter();
      if (!isUserLogged()) {
          return [];
        }
      const hideCompletedFilter = { isChecked: { $ne: true } };
  
      return ItemsCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
          sort: { createdAt: -1 },
        }).fetch();
    },
    hideCompleted() {
      return Template.instance().state.get(HIDE_COMPLETED_STRING);
    },
    incompleteCount() {
      if (!isUserLogged()) {
          return '';
        }
    
        const { pendingOnlyFilter } = getTasksFilter();
    
        const incompleteTasksCount = TasksCollection.find(pendingOnlyFilter).count();
        return incompleteTasksCount ? `(${incompleteTasksCount})` : '';
    },
    incompleteProjectCount() {
      if (!isUserLogged()) {
          return '';
        }
    
        const { pendingOnlyFilter } = getProjectsFilter();
    
        const incompleteProjectsCount = ProjectsCollection.find(pendingOnlyFilter).count();
        return incompleteProjectsCount ? `(${incompleteProjectsCount})` : '';
    },
    incompleteItemCount() {
      if (!isUserLogged()) {
          return '';
        }
    
        const { pendingOnlyFilter } = getItemsFilter();
    
        const incompleteItemsCount = ItemsCollection.find(pendingOnlyFilter).count();
        return incompleteItemsCount ? `(${incompleteItemsCount})` : '';
    },
    isUserLogged() {
      return isUserLogged();
    },
    getUser() {
      return getUser();
    },
    isLoading() {
      const instance = Template.instance();
      return instance.state.get(IS_LOADING_STRING);
    }
});

Template.form.events({
    // "submit .task-form"(event) {
    //   // Prevent default browser form submit
    //   event.preventDefault();
  
    //   // Get value from form element
    //   const target = event.target;
    //   const text = target.text.value;
    //   const project = target.project.value;
  
    //   // Insert a task into the collection
    //   Meteor.call('tasks.insert', text, project);
  
    //   // Clear form
    //   target.text.value = '';
    //   target.project.value = '';
    // },
    // "submit .project-form"(event) {
    //   // Prevent default browser form submit
    //   event.preventDefault();
  
    //   // Get value from form element
    //   const target = event.target;
    //   const text = target.text.value;
  
    //   // Insert a task into the collection
    //   Meteor.call('projects.insert', text);
      
    //   // Clear form
    //   target.text.value = '';
    // },
    // "submit .item-form"(event) {
    //   // Prevent default browser form submit
    //   event.preventDefault();
  
    //   // Get value from form element
    //   const target = event.target;
    //   const text = target.text.value;
    //   const task = target.task.value;
    //   // Insert a task into the collection
    //   Meteor.call('items.insert', text, task);
  
    //   // Clear form
    //   target.text.value = '';
    //   target.task.value = '';
    // }
});