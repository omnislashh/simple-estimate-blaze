import { Template } from 'meteor/templating';
import './Item.html';

Template.item.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('items.setIsChecked', this._id, !this.isChecked);
  },
  
  'click .delete'() {
    Meteor.call('items.remove', this._id);
  },
});
