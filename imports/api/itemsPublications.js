import { Meteor } from 'meteor/meteor';
import { ItemsCollection } from '/imports/db/ItemsCollection';

Meteor.publish('items', function publishItems() {
  return ItemsCollection.find({ userId: this.userId });
});
