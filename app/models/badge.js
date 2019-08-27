import DS from 'ember-data';
import Ember from 'ember';
const { Model } = DS;

export default Model.extend({
  metric: DS.attr(),
  icon: DS.attr(),
  createdAt: DS.attr(),
  contest: DS.belongsTo('contest', {inverse: null}),
  theme: DS.attr()
});
