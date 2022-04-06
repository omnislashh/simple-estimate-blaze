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
import "./TaskFeatures.js";
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

Template.mainContainer.events({
    "click #hide-completed-button"(event, instance) {
      const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
    },
    'click .user'() {
        Meteor.logout();
      }
  });

Template.mainContainer.onCreated(function mainContainerOnCreated() {
    this.state = new ReactiveDict();
    const handler = Meteor.subscribe('tasks');
    Tracker.autorun(() => {
        this.state.set(IS_LOADING_STRING, !handler.ready());
    });
  });
Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
  const handler = Meteor.subscribe('projects');
  Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});
Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
  const handler = Meteor.subscribe('items');
  Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
  });
});

Template.mainContainer.helpers({
    tasks() {
      const instance = Template.instance();
      const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      const { pendingOnlyFilter, userFilter } = getTasksFilter();
      if (!isUserLogged()) {
          return [];
        }
      const hideCompletedFilter = { isChecked: { $ne: true } };
  
      return TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
          sort: { createdAt: -1 },
        }).fetch();
    },
    
    projects() {
      const instance = Template.instance();
      const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
      const { pendingOnlyFilter, userFilter } = getProjectsFilter();
      if (!isUserLogged()) {
          return [];
        }
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
    "submit .task-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;
  
      // Insert a task into the collection
      Meteor.call('tasks.insert', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .standard-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;
  
      // Insert a task into the collection
      Meteor.call('tasks.insert-attente-standard', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .soigne-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;
  
      // Insert a task into the collection
      Meteor.call('tasks.insert-attente-soigne', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .haut-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;
  
      // Insert a task into the collection
      Meteor.call('tasks.insert-attente-haut', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .langue-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-langue', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .encaissement-simple-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-simple-payment', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .encaissement-recurrent-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-recurrent-payment', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .not-moneytized-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-no-payment', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .client-account-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-client-account', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .no-client-account-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-no-client-account-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .blog-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-blog-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .integration-social-media-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-integration-social-media-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .inscription-newsletter-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-inscription-newsletter-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .moteur-recherche-interne-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-moteur-recherche-interne-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .module-prise-rdv-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-module-prise-rdv-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .module-demande-devis-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-module-demande-devis-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .gestion-facture-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-gestion-facture-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .integration-crm-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-integration-crm-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
    
    "submit .hebergement-self-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-hebergement-self-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .hebergement-standard-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-hebergement-standard-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .hebergement-premium-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-hebergement-premium-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },
 
    "submit .self-assist-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-self-assist-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .minimal-assist-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-minimal-assist-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .regular-assist-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const project = target.project.value;

      // Insert a task into the collection
      Meteor.call('tasks.insert-regular-assist-form', text, project);
      // Clear form
      target.text.value = '';
      target.project.value = '';
    },

    "submit .project-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert', text);
      
      // Clear form
      target.text.value = '';
    },
    "submit .vitrine-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert-site-vitrine', text);
      
      // Clear form
      target.text.value = '';
    },

    "submit .marketplace-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert-site-marketplace', text);
      
      // Clear form
      target.text.value = '';
    },

    "submit .e-commerce-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert-site-ecommerce', text);
      
      // Clear form
      target.text.value = '';
    },

    "submit .web-app-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert-site-web-app', text);
      
      // Clear form
      target.text.value = '';
    },

    "submit .other-site-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Meteor.call('projects.insert-site-autre', text);
      
      // Clear form
      target.text.value = '';
    },
    
    "submit .item-form"(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
      const task = target.task.value;
      // Insert a task into the collection
      Meteor.call('items.insert', text, task);
  
      // Clear form
      target.text.value = '';
      target.task.value = '';
    }
});
  
  