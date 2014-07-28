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
  }

});

 