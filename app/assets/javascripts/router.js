// For more information see: http://emberjs.com/guides/routing/

KpccAudioAggregator.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('audio_stories');
});
