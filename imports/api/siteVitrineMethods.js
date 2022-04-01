import { check } from 'meteor/check';
import { SiteVitrineCollection } from '../db/ProjectsCollection';
 
Meteor.methods({
  'sitevitrine.insert'(text) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    SiteVitrineCollection.insert({
      text,
      price: 100,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'sitevitrine.remove'(siteVitrineId) {
    check(siteVitrineId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const siteVitrine = SiteVitrineCollection.findOne({ _id: siteVitrineId, userId: this.userId });

    if (!siteVitrine) {
      throw new Meteor.Error('Access denied.');
    }
 
    SiteVitrineCollection.remove(siteVitrineId);
  },
 
  'sitevitrine.setIsChecked'(siteVitrineId, isChecked) {
    check(siteVitrineId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const siteVitrine = SiteVitrineCollection.findOne({ _id: siteVitrineId, userId: this.userId });

    if (!siteVitrine) {
      throw new Meteor.Error('Access denied.');
    }
 
    SiteVitrineCollection.update(siteVitrineId, {
      $set: {
        isChecked
      }
    });
  },

  'sitevitrine.setIsSingleChecked'(siteVitrineId, isSingleChecked) {
    check(siteVitrineId, String);
    check(isSingleChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const siteVitrineSingle = SiteVitrineCollection.findOne({ _id: siteVitrineId, userId: this.userId });

    if (!siteVitrineSingle) {
      throw new Meteor.Error('Access denied.');
    }
 
    SiteVitrineCollection.update(siteVitrineId, {
      $set: {
        isSingleChecked
      }
    });
  }
});

