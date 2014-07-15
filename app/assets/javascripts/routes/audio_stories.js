KpccAudioAggregator.AudioStoriesRoute = Ember.Route.extend({
  model: function() {
    return KpccAudioAggregator.AudioStory.FIXTURES;
  }
});