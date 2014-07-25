KpccAudioAggregator.ApplicationRoute = Em.Route.extend({
  actions: {
    openModal: function(modalName) {
      //KpccAudioAggregator.CollectionModalController.setProperties();
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