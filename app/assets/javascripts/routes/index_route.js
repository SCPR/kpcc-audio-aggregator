KpccAudioAggregator.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
      audioCollections: this.store.find('audio_collection')
    });
  },

  actions: {
    createAudioCollection: function() {
      this.controllerFor('collection.modal').send('create');
      this.send('openModal', 'collection.modal');
    },

    editAudioCollection: function(audioCollection) {
      this.controllerFor('collection.modal').edit(audioCollection);
      this.send('openModal', 'collection.modal');
    },

    saveAudioCollection: function() {
      this.controllerFor('collection.modal').send('save');
    },

    closeAudioCollectionModal: function() {
      this.controllerFor('collection.modal').send('close');
    },

    playAudio: function(audioItem) {
      this.controllerFor('index').send('playAudioAction', audioItem);
    }
  }
});