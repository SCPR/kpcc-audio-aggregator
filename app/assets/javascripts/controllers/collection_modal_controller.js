KpccAudioAggregator.CollectionModalController = Ember.ObjectController.extend({

  actions: {
    create: function() {
      var audioCollection = this.store.createRecord('audio_collection');

      audioCollection.on('didCreate', this, function() {
        this.send('close');
      });

      this.set('model', audioCollection);
    },

    edit: function(record) {
      console.log("EDIT!");

      //record.one('didUpdate', this, function() {
      //  this.send('close');
      //});

      //this.set('model', record);
    },

    save: function() {
      this.content.save();
    },

    close: function() {
      if (this.get('model')) {
        var model = this.get('model'),
        transaction = model.get('transaction');

        if (!transaction) this.content.rollback();
        //if (model.get('errors')) model.set('errors', null);
      }

      this.send("closeModal");
    },

    shouldDisableSubmit: function() {
      return !this.get('isDirty') || this.get('isSaving');
    }.property('isDirty', 'isSaving')
  }

});