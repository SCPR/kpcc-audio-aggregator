// for more details see: http://emberjs.com/guides/models/defining-models/

KpccAudioAggregator.AudioStory = DS.Model.extend({
  category: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  source: DS.attr('string'),
  program: DS.attr('string'),
  duration: DS.attr('string'),
  audioUrl: DS.attr('string'),
  timeStamp: DS.attr('date')
});
