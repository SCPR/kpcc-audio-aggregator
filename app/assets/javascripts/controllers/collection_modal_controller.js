KpccAudioAggregator.CollectionModalController = Ember.ObjectController.extend({

  actions: {
    create: function() {
      var audioCollection = this.store.createRecord('audio_collection');

      audioCollection.on('didCreate', this, function() {
        this.send('close');
      });

      this.set('model', audioCollection);
    },

    save: function() {
      this.content.save();
    },

    close: function() {
      var model = this.get('model'),
      transaction = model.get('transaction');

      if (!transaction) this.content.rollback();
      //if (model.get('errors')) model.set('errors', null);

      this.send("closeModal");
    },

    shouldDisableSubmit: function() {
      return !this.get('isDirty') || this.get('isSaving');
    }.property('isDirty', 'isSaving')
  }

});