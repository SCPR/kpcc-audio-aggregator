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
      this.send('openModal', 'audio_collection_modal');
    },

    editAudioCollection: function(audioCollection) {
      this.controllerFor('collection.modal').edit(audioCollection);
      this.send('openModal', 'collection.modal');
    },

    confirmAudioCollectionDelete: function(audioCollection) {
      this.controllerFor('confirm.delete').confirmDelete(audioCollection, 'collection.index');
      this.send('openModal', 'confirm.delete');
    },

    saveAudioCollection: function() {
      this.controllerFor('collection.modal').send('save');
    },

    closeAudioCollectionModal: function() {
      this.controllerFor('collection.modal').send('close');
    }
  }
});