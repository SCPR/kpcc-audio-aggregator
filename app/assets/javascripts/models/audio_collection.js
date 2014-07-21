// for more details see: http://emberjs.com/guides/models/defining-models/

KpccAudioAggregator.AudioCollection = DS.Model.extend({
  title: DS.attr('string'),
  status: DS.attr('string'),
  updated_at: DS.attr('date')
});
