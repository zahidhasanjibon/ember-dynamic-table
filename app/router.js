import EmberRouter from '@ember/routing/router';
import config from 'jakatt/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('profile');
  this.route('registration-form');
  this.route('login');
  // this.route('error');
  this.route('inbox');

  // this.route('authenticated', { path: '' }, function () {
  //   // all routes that require the session to be authenticated
  // });
  this.route('admin-panel');
  this.route('index', { path: '' });

  this.route('authenticated', function () {
    this.route('secret');
    this.route('dashboard');
    this.route('profile');
  });

  this.route('single', function () {
    this.route('zakatrequests');
  });
});
