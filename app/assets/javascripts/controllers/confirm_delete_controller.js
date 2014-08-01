KpccAudioAggregator.ConfirmDeleteController = Ember.ObjectController.extend({
  confirmDelete: function(model, afterDeleteRoute) {
    console.log('confirmDelete in ConfirmDeleteController to transition to: ' + afterDeleteRoute);
    console.log('confirmDelete in ConfirmDeleteController model: ' + model);
    this.set('model', model);
    this.set('afterDeleteRoute', afterDeleteRoute);
  },

  actions: {
    confirm: function() {
      console.log("confirm in ConfirmDeleteController");

      var model = this.get('model'),
      after = this.get('afterDeleteRoute');

      console.log("CONFIRM:  " + model);
      console.log("AFTER:  " + after);

      model.on('didDelete', this, function() {
        this.send('close');

        if (after) this.transitionToRoute(after);
      });

      model.deleteRecord();
      model.save();
      //model.get('transaction').commit();
    },

    close: function() {
      this.send('closeModal');
    }
  }
  
});
