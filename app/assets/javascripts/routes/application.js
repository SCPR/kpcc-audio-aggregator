//import Ember from 'ember';

KpccAudioAggregator.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return KpccAudioAggregator.AudioStory.FIXTURES;
  }
});
