KpccAudioAggregator.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('audio_story');
  }
});