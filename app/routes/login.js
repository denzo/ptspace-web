import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({

  session: service(),

  beforeModel() {
    if (get(this, 'session.isAuthenticated') === true) {
      this.transitionTo('clients');
    }
  }

});
