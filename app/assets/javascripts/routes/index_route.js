KpccAudioAggregator.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      audioStories: this.store.find('audio_story'),
      audioCollections: this.store.find('audio_collection')
    });
  },

  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});