import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({

  model() {
    const clients = get(this.modelFor('application'), 'clients');
    return clients;
  }

});
