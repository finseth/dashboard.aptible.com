import Ember from 'ember';

export default Ember.Route.extend({
  complianceStatus: Ember.inject.service(),

  redirect() {
    if(this.get('complianceStatus.authorizationContext.userIsGridironOrOrganizationAdmin')) {
      this.transitionTo('gridiron-admin');
    } else {
      this.transitionTo('gridiron-user');
    }
  }
});
