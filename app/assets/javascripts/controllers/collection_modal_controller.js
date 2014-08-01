KpccAudioAggregator.CollectionModalController = Ember.ObjectController.extend({

  actions: {
    create: function() {
      var audioCollection = this.store.createRecord('audio_collection');

      audioCollection.on('didCreate', this, function() {
        this.send('close');
      });

      this.set('model', audioCollection);
    },

    edit: function(modelId) {
      var self = this;
      var audioCollection = self.store.find('audio_collection', modelId);

      audioCollection.then(function(record){
        self.set('model', record);

        record.on('didUpdate', function() {
          self.send('close');
        });
      }, function() {
        console.log("promise failed");
      });
    },

    save: function() {
      this.content.save();
    },

    close: function() {
      var model = this.get('model');

      if (model) {
        var transaction = model.get('transaction');

        if (!transaction) {
            this.content.rollback();
        }
        //if (model.get('errors')) model.set('errors', null);
      }

      this.send("closeModal");
    },

    shouldDisableSubmit: function() {
      return !this.get('isDirty') || this.get('isSaving');
    }.property('isDirty', 'isSaving')
  }

});