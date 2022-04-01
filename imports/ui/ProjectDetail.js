import { Template } from 'meteor/templating';

import './ProjectDetail.html';

Template.project.events({
//   'click .toggle-checked'() {
//     // Set the checked property to the opposite of its current value
//     Meteor.call('tasks.setIsChecked', this._id, !this.isChecked);
//   },
  'click .delete'() {
    Meteor.call('project.remove', this._id);
  },
});

