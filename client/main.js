import '../imports/ui/App.js';
import '../lib/routes.js';
import { AccountsTemplates } from 'meteor/useraccounts:core';
// Define these routes in a file loaded on both client and server
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/signin'
  });