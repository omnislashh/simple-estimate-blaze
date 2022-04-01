import { check } from 'meteor/check';
import { ItemsCollection } from '../db/ItemsCollection';
 
Meteor.methods({
  'items.insert'(text, task) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    ItemsCollection.insert({
      text,
      task,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'items.remove'(itemId) {
    check(itemId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const item = ItemsCollection.findOne({ _id: itemId, userId: this.userId });

    if (!item) {
      throw new Meteor.Error('Access denied.');
    }
 
    ItemsCollection.remove(itemId);
  },
 
  'items.setIsChecked'(itemId, isChecked) {
    check(itemId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const item = ItemsCollection.findOne({ _id: itemId, userId: this.userId });

    if (!item) {
      throw new Meteor.Error('Access denied.');
    }
 
    ItemsCollection.update(itemId, {
      $set: {
        isChecked
      }
    });
  },

  // 'items.setIsSingleChecked'(itemId, isSingleChecked) {
  //   check(itemId, String);
  //   check(isSingleChecked, Boolean);
 
  //   if (!this.userId) {
  //     throw new Meteor.Error('Not authorized.');
  //   }
  //   const projectSingle = ProjectsCollection.findOne({ _id: projectId, userId: this.userId });

  //   if (!projectSingle) {
  //     throw new Meteor.Error('Access denied.');
  //   }
 
  //   ProjectsCollection.update(projectId, {
  //     $set: {
  //       isSingleChecked
  //     }
  //   });
  // }
});

// mongoDb queries 

// db.items.find({ task : { $in: ["First Task"] } }, { "_id": 0, 
// "text": 1, "task": 1})

// db.items.remove({})

//to do: display all items
//to do: pour filtrer les items qui portent le nom d'1 tache particuliere -> parametre dans le publish (nom étiquette)
//to do: styling

//+ puissant: tri avec une seule requete au lieu de deux (jointure + difficile en mongoDb)
