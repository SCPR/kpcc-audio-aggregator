KpccAudioAggregator.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
      audioCollections: this.store.find('audio_collection')
    });
  }
});