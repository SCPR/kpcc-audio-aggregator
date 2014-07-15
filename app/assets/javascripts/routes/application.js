// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
DS.ActiveModelAdapter.reopen({
  namespace: 'api/v1'
});

KpccAudioAggregator.ApplicationStore = DS.Store.extend({

  adapter: '-active-model'
});