import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
// import '/imports/ui/Testing.js';
import '/imports/ui/Testing';
import '/imports/ui/TaskDetail';
import '/imports/ui/ProjectDetail';
import '/imports/ui/App';
import '/imports/ui/Login';
import '/imports/ui/Menu';
import '/imports/ui/Tasks';
import '/imports/ui/Projects';
import '/imports/ui/Items';

// FlowRouter.triggers.enter([function(context, redirect){
//   if(!Meteor.userId()) {
//     FlowRouter.go('app')
//   }
// }]);

FlowRouter.route('/testing', {
  name: 'testing',
  action() {
    // Render a template using Blaze
    this.render('testing');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    // Render a template using Blaze
    this.render('menu');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/alltasks', {
  name: 'alltasks',
  action() {
    // Render a template using Blaze
    this.render('alltasks');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/allprojects', {
  name: 'allprojects',
  action() {
    // Render a template using Blaze
    this.render('allprojects');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/allitems', {
  name: 'allitems',
  action() {
    // Render a template using Blaze
    this.render('allitems');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/app', {
  name: 'App',
  action() {
    // Render a template using Blaze
    this.render('mainContainer');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    // Render a template using Blaze
    this.render('login');

    // Can be used with BlazeLayout,
    // and ReactLayout for React-based apps
  }
});
// useraccounts-config.js, useraccounts, accounts-ui meteor guide: user-account 
// https://github.com/meteor-useraccounts/flow-routing

// routes.js

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'login',
  layoutTemplate: 'Login',
  // layoutRegions: {
  //   nav: 'customNav',
  //   footer: 'customFooter'
  // },
  // contentRegion: 'main',
  redirect: '/login'
});


// Going to: /article/article_id/article-slug
FlowRouter.route('/task/:_id/:price/:type/:project', {
  name: 'TaskDetail',
  action(params) {
    // All passed parameters is available as Object:
    console.log(params);
    // { _id: 'article_id', slug: 'article-slug' }

    // Pass params to Template's context
    this.render('task-detail', params);
  },
  // waitOn(params) {
  //   return Meteor.subscribe('task-detail', params._id);
  // }
});

FlowRouter.route('/project/:_id/:price/:type', {
  name: 'ProjectDetail',
  action(params) {
    console.log(params);
    this.render('project-detail', params);
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', {main: 'App_notFound'});
  }
};
//to do: case, the URL matches a route, but once the route has successfully subscribed, it discovers there is no data.
// https://guide.meteor.com/routing.html#404s

//14-03 removed 
// meteor-em 
// https://npmmirror.com/package/meteor-em/v/0.1.6
// $ npm uninstall -g meteor-em

