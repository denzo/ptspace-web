import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('clients', function() {
    this.route('client', { path: '/:clientId' });
    this.route('index', { path: '/' });
    this.route('create');
  });
});

export default Router;
