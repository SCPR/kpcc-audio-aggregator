// for more details see: http://emberjs.com/guides/views/

KpccAudioAggregator.AudioCollectionsShowView = Ember.View.extend({
  templateName: 'audio_collections_show',

  actions: {
    playAudio: function(audioArray) {
      //this.controllerFor('index').send('playAudio', audioArray);
      //this.get("controller").send("playAudioAction", audioArray);
    }
  }
  //controller: this.controllerFor('collection.show')

});
