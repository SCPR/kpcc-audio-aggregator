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

        /**
         * TODO: Saving embedded objects via Ember is *working* but not as intended.
         * Need to fix the duplication issues that are caused here. Watch for changes
         * to ember-data. This is a somewhat common issue and they are working towards
         * a fix (we hope).
         */
        audio_collection_record.get("audio_stories").pushObject(audioStory);
        //audioStory.destroy();

        audio_collection_record.save();
        //audio_collection_record.reload();

      }, function() {
        console.log("promise failed");
      });

    }
  }
});

