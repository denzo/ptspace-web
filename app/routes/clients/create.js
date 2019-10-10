import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({



  actions: {

    async addClient(phone) {
      const client = await this.store.createRecord('client', {
        phone
      }).save();

      this.transitionTo('clients.client', client.phone);
    }
  }

});
