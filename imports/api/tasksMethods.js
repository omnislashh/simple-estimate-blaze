import { check } from 'meteor/check';
import { TasksCollection } from '../db/TasksCollection';
 
Meteor.methods({
  'tasks.insert'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-attente-standard'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-standard",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'tasks.insert-attente-soigne'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-standard",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-attente-haut'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "attente-haute",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-langue'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "language",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-simple-payment'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "Simple CB or Paypal",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-recurrent-payment'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "For payment subscribe users",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-no-payment'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "No payment through website",
      price: 5,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-client-account'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "client account system",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-no-client-account-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "no client account system",
      price: 5,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-blog-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "blog",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-integration-social-media-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "social media",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-inscription-newsletter-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "newsletter",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-moteur-recherche-interne-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "search bar",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-module-prise-rdv-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "rdv module",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'tasks.insert-module-demande-devis-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "estimation module",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-gestion-facture-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "invoice module",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-integration-crm-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "CRM module",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  
  'tasks.insert-hebergement-self-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "Self hosting",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-hebergement-premium-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "Premium hosting",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-hebergement-standard-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "standard hosting",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-self-assist-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "self assist",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'tasks.insert-minimal-assist-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "minimal assist",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-regular-assist-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "regular assist",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },
  
  'tasks.insert-urgent-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "urgent",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-precise-estimation-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "precise-estimation",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-curious-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "curious",
      price: 10,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-idk-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "No budget idea",
      price: 2,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-less-1000-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "-1000€ budget",
      price: 0,
      createdAt: new Date,
      userId: this.userId,
    })
  },
 
  'tasks.insert-1000-5000-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "1000€ to 5000€ budget",
      price: 0,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-5000-10000-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "5000€ to 10000€ budget",
      price: 0,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-10000-20000-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "10000€ to 20000€ budget",
      price: 0,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.insert-more-20000-form'(text, project) {
    check(text, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
 
    TasksCollection.insert({
      text,
      project,
      type: "more than 20000€ budget",
      price: 0,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'tasks.remove'(taskId) {
    check(taskId, String);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }
 
    TasksCollection.remove(taskId);
  },
 
  'tasks.setIsChecked'(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }
 
    TasksCollection.update(taskId, {
      $set: {
        isChecked
      }
    });
  }
});

// mongoDb queries

// db.tasks.find({ project : { $in: ["modeling"] } }, { "_id": 0, 
// "text": 1, "project": 1})

