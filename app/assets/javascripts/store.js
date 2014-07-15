KpccAudioAggregator.ApplicationStore = DS.Store.extend({
  adapter: KpccAudioAggregator.ApplicationAdapter
});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
KpccAudioAggregator.ApplicationAdapter = DS.RESTAdapter.reopen({
  namespace: "api/v1"
});

KpccAudioAggregator.ApplicationSerializer = DS.ActiveModelSerializer.extend({

});