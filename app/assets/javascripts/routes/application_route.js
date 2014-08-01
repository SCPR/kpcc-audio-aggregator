KpccAudioAggregator.ApplicationRoute = Em.Route.extend({
  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        //controller: this.controllerFor('collection.modal')
      });
    },

    closeModal: function(defer) {
      if (defer) {
        defer.resolve();
      }

      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});