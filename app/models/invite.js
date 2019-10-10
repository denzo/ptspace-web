import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

  createdBy: Math.random()

});
