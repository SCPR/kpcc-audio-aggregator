var formatDateHelper = Ember.Handlebars.makeBoundHelper(function(timestamp) {
  return moment(timestamp).calendar();
});

KpccAudioAggregator.register('helper:format-date', formatDateHelper);