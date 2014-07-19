KpccAudioAggregator.AudioCollectionsRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      audioCollections: this.store.find('audio_collection'),
    });
  }
});