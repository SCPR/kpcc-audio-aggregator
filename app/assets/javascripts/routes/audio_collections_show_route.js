KpccAudioAggregator.AudioCollectionsShowRoute = Ember.Route.extend({
  model: function(params) {

    console.log("SHOW: " + params.collection_id);

    /*return Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
      audioCollection: this.store.find('audio_collection', params.collection_id)
    });*/
    
    return this.store.find('audio_collection', params.collection_id);
  },

  serialize: function(model) {
    // this will make the URL `/audio_collections/12`
    return { collection_id: model.id };
  },

  setupController: function(controller, model) {
    console.log("SETUP!");
    var collection_model = this.store.find('audio_collection', model.id)
    controller.set("content", collection_model);
    console.log(collection_model);
  }
});