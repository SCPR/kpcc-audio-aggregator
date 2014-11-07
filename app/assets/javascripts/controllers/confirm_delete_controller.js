KpccAudioAggregator.ConfirmDeleteController = Ember.ObjectController.extend({
  confirmDelete: function(model, afterDeleteRoute) {
    this.set('model', model);
    this.set('afterDeleteRoute', afterDeleteRoute);
  },

  actions: {
    confirm: function() {
      var model = this.get('model'),
          after = this.get('afterDeleteRoute');

      model.on('didDelete', this, function() {
        this.send('close');

        if (after) this.transitionToRoute(after);
      });

      model.deleteRecord();
      model.save();
    },

    close: function() {
      this.send('closeModal');
    }
  }
  
});
