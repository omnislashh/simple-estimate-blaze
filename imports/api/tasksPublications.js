import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/db/TasksCollection';

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});

Meteor.publish("tasksfeatures", function() {
  // Remember, ReactiveAggregate doesn't return anything
      ReactiveAggregate(this, [ { 
        $group: { 
            _id: null, 
            totalfeatures: { 
                $sum: "$price" 
            } 
        } 
        },
        { $project: { _id: 0, totalfeatures: 1 } }
    ])
  });
