KpccAudioAggregator.AudioCollectionsShowController = Ember.ObjectController.extend({
  content: {},
  audioStories: {},
  inCollection: (function(){
    return true;
  }).property(),

  actions: {
    addToCollection: function(audioStory, audioCollectionId) {
      console.log("inController: " + audioStory);
      console.log("inController, audioCollectionId: " + audioCollectionId);

      var self = this;

      var audioCollection = self.store.find('audio_collection', audioCollectionId);
      console.log("audioCollection: "+ audioCollection);

      audioCollection.then(function(audio_collection_record){
        console.log("record? " + audio_collection_record);
        console.log("audioStories? " + audio_collection_record.get("audio_stories"));

        /*audio_collection_record.get("audio_stories").then(function(audio_stories_record){
            audio_stories_record.pushObject(audioStory);
            //audio_stories_record.save();
            //audio_collection_record.save();
        });*/
        audio_collection_record.get("audio_stories").pushObject(audioStory);
        //audioStory.destroy();

        audio_collection_record.save();

      }, function() {
        console.log("promise failed");
      });

    }
  }
});

