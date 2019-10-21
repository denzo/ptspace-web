import FirestoreAdapter from 'emberfire/adapters/firestore';
import ENV from 'ptspace-web/config/environment';

const { APP: { firebase } } = ENV;

export default FirestoreAdapter.extend({
    // Uncomment the following lines to enable offline persistence and multi-tab support
    // enablePersistence: true,
    // persistenceSettings: { synchronizeTabs: true }

    settings: firebase.settings,

    async findAll(store, type) {
      const result = await this._super(store, type);
      // debugger
      return result;
    }
});
