import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return ['PC repair', 'Network Diagnostics', 'Back Massages'];
  },
});
