import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { get } from '@ember/object';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({

  session: service(),
  firebaseApp: service(),

  beforeModel() {

  },

  model() {
    
  },

  actions: {

    // trigger by torii
    accessDenied(transition) {
      this.transitionTo('login');
    },

    logout() {
      return get(this, 'session').close().then(() => {
        this.transitionTo('login');
      });
    },
    async loginWithGoogle() {
      const session = get(this, 'session');
      session.open('google').then(result => {
        this.transitionTo('clients');
      });
    },

    navigateTo(routeName, ...params) {
      this.transitionTo(routeName, ...params);
    },

    deleteClient(client) {
      client.destroyRecord();
    }
  }

});
