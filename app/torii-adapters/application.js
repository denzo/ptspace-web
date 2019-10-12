import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';
const { Promise, reject, resolve } = RSVP;
import { run } from '@ember/runloop';


export default class FirebaseToriiAdapter extends EmberObject.extend({
    firebaseApp: service('firebase-app')
}) {
  fetch() {
    return this.restore();
  }

    // the auth will come from torii-provider
    open(auth) {
      debugger
      return resolve({ currentUser: auth.user});
    }
    restore() {
        return new Promise((resolve, reject) => {
          debugger
            get(this, 'firebaseApp').auth().then(auth => {
                const unsubscribe = auth.onIdTokenChanged(currentUser => run(() => {
                    unsubscribe();
                    if (currentUser) {
                        resolve({ currentUser });
                    }
                    else {
                        reject();
                    }
                }));
            });
        });
    }
    close() {
        return get(this, 'firebaseApp').auth().then(auth => auth.signOut());
    }
}
