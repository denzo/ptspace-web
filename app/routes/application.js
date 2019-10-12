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
    }).then((result) => {
      debugger
      const currentUser = get(this, 'session.currentUser');
      return result;
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
    logout() {
      return get(this, 'session').close();
    },
    async loginWithGoogle() {
      const session = get(this, 'session');
      session.open('google').then(result => {
        debugger
      });

      // const provider = new firebase.auth.GoogleAuthProvider();
      // const auth = await get(this, 'firebaseApp').auth();
      // return auth.signInWithPopup(provider).then(async(result) => {
      //   debugger
      //   const session = get(this, 'session');
      //   // redirect on successful login
      //   const currentUser1 = get(this, 'session.currentUser');
      //   debugger
      //
      //   const openuser = await session.open();
      //
      //   const currentUser2 = get(this, 'session.currentUser');
      //
      //
      //
      //   return session.open()
    },
    navigateTo(routeName, ...params) {
      this.transitionTo(routeName, ...params);
    },

    deleteClient(client) {
      client.destroyRecord();
    }
  }

});
