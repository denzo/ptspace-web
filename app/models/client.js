import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({

  createdAt: attr('date'),
  phone: attr('string'),
  name: attr('string')


});
