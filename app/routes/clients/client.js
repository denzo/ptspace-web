import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({

  model({clientId}) {
    const clients = get(this.modelFor('application'), 'clients');
    const idAttribute = "phone";

    const client = clients.findBy(idAttribute, clientId);

    return client || this.transitionTo('clients.index');
  }

});
