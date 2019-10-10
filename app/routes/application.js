import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { get } from '@ember/object';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({

  session: service(),
  firebaseApp: service(),

  beforeModel() {
    const session = get(this, 'session');
    debugger
    return session.fetch().catch((error) => {
      debugger
    });
  },

  model() {
    return this.store.findAll('client').catch(error => {
      debugger
    }).then(result => {
      return {
        clients: result
      }
    });
  },

  actions: {
    navigateTo(routeName, ...params) {
      this.transitionTo(routeName, ...params);
    },

    deleteClient(client) {
      client.destroyRecord();
    }
  }

});
