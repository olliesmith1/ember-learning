import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('services');
  this.route('contact');

  this.resource('posts', {path: '/posts'}, function() {
    this.route('new');
  });
});
