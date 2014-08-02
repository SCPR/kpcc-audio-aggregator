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

      audioCollection.then(function(record){
        var audioStories = record.get("audio_stories");
        console.log("audioStories? " + audioStories);

        audioStories.then(function(){
            audioStories.pushObject(audioStory);
            //record.save();
            self.set('model', record);
            //this.content.save();
            //record.save();
        });


        

        //record

        //record.on('didUpdate', function() {
        //  self.send('close');
        //});
      }, function() {
        console.log("promise failed");
      });
    }
  }
});

