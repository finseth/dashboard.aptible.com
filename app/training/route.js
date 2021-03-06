import Ember from 'ember';

export function isTrainingCriterion(criterion) {
  return /training_log/.test(criterion.get('handle'));
}

export default Ember.Route.extend({
  complianceStatus: Ember.inject.service(),
  model() {
    return this.get('complianceStatus');
  },
  renderTemplate() {
    this._super.apply(this, arguments);
    this.render('sidebars/engine-sidebar', { into: 'training', outlet: 'sidebar' });
  }
});
