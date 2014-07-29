// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.

KpccAudioAggregator.Adapter = DS.RESTAdapter.reopen({
  bulkCommit: false,
  namespace: 'api/v1',
  plurals: {
    audio_story: "audio_stories"
  }
});

KpccAudioAggregator.ApplicationSerializer = DS.RESTSerializer.extend({
  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    return Ember.String.singularize(camelized);
  }
});

KpccAudioAggregator.ApplicationStore = DS.Store.extend({
  revision: 12,
  adapter: '-active-model'
});