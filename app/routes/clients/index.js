import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({

  beforeModel() {
    const clients = get(this.modelFor('application'), 'clients');
    if (get(clients, 'length') > 0) {
      this.transitionTo('clients.client', get(clients, 'firstObject.phone'));
    }
  }

});
