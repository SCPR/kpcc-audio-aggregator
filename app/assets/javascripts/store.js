KpccAudioAggregator.ApplicationStore = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
KpccAudioAggregator.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});

KpccAudioAggregator.ApplicationSerializer = DS.ActiveModelSerializer.extend({

});