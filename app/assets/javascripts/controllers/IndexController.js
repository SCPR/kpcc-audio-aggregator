KpccAudioAggregator.IndexController = Ember.ObjectController.extend({
  save: function() {
    return this.get('model').save();
  }
});