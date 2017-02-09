import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events-list');
  this.route('tasks');
  this.route('documents');
  this.route('contacts');
  this.route('user-management');
  this.route('profile-management');
  this.route('notifications');
});

export default Router;
