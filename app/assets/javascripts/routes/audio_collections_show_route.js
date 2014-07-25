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
    console.log("SERIALIZE: " + JSON.stringify(model));
    return { collection_id: model.id };
  },

  setupController: function(controller, model) {
    
    var collection_model = this.store.find('audio_collection', model.id);
   // var audio_stories_model = this.store.find('audio_story');

    console.log("SETUP! " + JSON.stringify(collection_model));

    /*hash = Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
      audioCollection: collection_model
    });*/

    controller.set("content", collection_model);

    //controller.set("model",  this.store.find('audio_story'));
    console.log(collection_model);
  }
});