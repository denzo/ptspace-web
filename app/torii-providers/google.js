import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';
const { Promise, reject, resolve } = RSVP;
import { run } from '@ember/runloop';
import firebase from 'firebase/app';


export default class FirebaseToriiAdapter extends EmberObject.extend({
    firebaseApp: service('firebase-app')
}) {
    async open(options) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = await get(this, 'firebaseApp').auth();
      return auth.signInWithPopup(provider);
    }
}
