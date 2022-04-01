import { Template } from 'meteor/templating';
import './Project.html';

Template.project.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('projects.setIsChecked', this._id, !this.isChecked);
  },
  
  'click .delete'() {
    Meteor.call('projects.remove', this._id);
  },
});
