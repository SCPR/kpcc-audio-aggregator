// For more information see: http://emberjs.com/guides/routing/

KpccAudioAggregator.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('audio_stories');
  this.resource('audio_collections'/*, function() {
    this.route('show', {
      path: '/audio_collections/show'
    });
  }*/);
  this.resource('audio_collections_show', { path: '/audio_collections/:collection_id'});
});
