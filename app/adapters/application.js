import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
    // Uncomment the following lines to enable offline persistence and multi-tab support
    // enablePersistence: true,
    // persistenceSettings: { synchronizeTabs: true }
    // namespace: 'environments/production/zzz'
    host: 'http://localhost:808123',

    async findAll(store, type) {
      const result = await this._super(store, type);
      // debugger
      return result;
    }
});
