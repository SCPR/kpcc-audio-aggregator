KpccAudioAggregator.AudioStoriesRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
    });
  }
});