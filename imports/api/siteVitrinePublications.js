import { Meteor } from 'meteor/meteor';
import { SiteVitrineCollection } from '/imports/db/SiteVitrineCollection';

Meteor.publish('sitevitrine', function publishSiteVitrine() {
  return SiteVitrineCollection.find({ userId: this.userId });
});
// Meteor.publish('projects-number', function publishProjects() {
//   return db.ProjectsCollection.count();
// });
