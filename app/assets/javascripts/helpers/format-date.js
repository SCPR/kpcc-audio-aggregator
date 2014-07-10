var formatDateHelper = Ember.Handlebars.makeBoundHelper(function(timestamp) {
  var yesterday= moment().subtract('days', 1).format('L');

  var date = yesterday+' '+timestamp;
  return moment(date).calendar();
});

KpccAudioAggregator.register('helper:format-date', formatDateHelper);