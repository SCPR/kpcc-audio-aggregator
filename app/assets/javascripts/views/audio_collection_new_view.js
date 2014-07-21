// for more details see: http://emberjs.com/guides/views/

KpccAudioAggregator.AudioCollectionNewView = Ember.View.extend({
  templateName: 'audio_collection_new',

  actions: {
    save: function() {
      return this.get('controller').save().then(this.closeModal.bind(this));
    }
  }
});
