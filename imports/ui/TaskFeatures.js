import { Template } from 'meteor/templating';
import { TasksCollection } from "../db/TasksCollection"; 

import './TaskFeatures.html';

Template.taskfeatures.helpers({
    // declare a new helper on your user page template
    priceSum: function() {
        return TasksCollection.rawCollection().aggregate([ { 
                $group: { 
                    _id: null, 
                    totalfeatures: { 
                        $sum: "$price" 
                    } 
                } 
                },
                { $project: { _id: 0, totalfeatures: 1 } }
            ])
    }

    // priceSum: function() {
    //     let myQuery = TasksCollection.aggregate([ { 
    //         $group: { 
    //             _id: null, 
    //             totalfeatures: { 
    //                 $sum: "$price" 
    //             } 
    //         } 
    //       }])
    //       return myQuery
    //     }
        
    // priceSum: function() {
    //     return 70;
    // }
    // }
  });

// TasksCollection.aggregate([ { 
//     $group: { 
//         _id: null, 
//         totalfeatures: { 
//             $sum: "$price" 
//         } 
//     } 
//     },
//     { $project: { _id: 0, totalfeatures: 1 } }
// ])

