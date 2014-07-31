KpccAudioAggregator.AudioCollectionsShowRoute = Ember.Route.extend({

  model: function(params) {

    console.log("SHOW: " + params.collection_id);

    return this.store.find('audio_collection', params.collection_id);
  },

  /*serialize: function(model) {
    // this will make the URL `/audio_collections/12`
    console.log("SERIALIZE: " + JSON.stringify(model));
    return { collection_id: model.id };
  },*/

  setupController: function(controller, model) {

    var audio_collection = this.store.find('audio_collection', model.id);
    controller.set('model', audio_collection);
    controller.set('content', audio_collection);

    var audio_stories = this.store.find('audio_story');
    controller.set('audioStories', audio_stories);
  },

  actions: {
    playAudio: function(audioArray) {
      this.controllerFor('index').send('playAudioAction', audioArray);
    },

    editCollection: function(audioCollection) {
      console.log("edit collection");
      this.controllerFor('collection.modal').send('edit', audioCollection);
      this.send('openModal', 'audio_collection_modal');
    },

    closeAudioCollectionModal: function() {
      this.controllerFor('collection.modal').send('close');
    },

    saveAudioCollection: function() {
      this.controllerFor('collection.modal').send('save');
    }
  }

});

 