KpccAudioAggregator.IndexController = Ember.ObjectController.extend({

  actions: {
    playAudioAction: function(audioArray) {

      // TODO: chain all audio in array to play after 
      // each item is done. For now just play the first.
      this.change_track(audioArray[0]['audioUrl']);

      var track_title = audioArray[0]['title'];
      $('.player-title span').text(track_title);

      $('.fa-play').removeClass('active');
      $('.fa-pause').addClass('active');
    }
  },

  change_track: function(sourceUrl) {
      var audio = $("#player");      
      $("#mp3_src").attr("src", sourceUrl);
      /****************/
      audio[0].pause();
      audio[0].load();//suspends and restores all audio element
      audio[0].play();
      /****************/

      // Reset UI when current audio ends.
      audio[0].addEventListener('ended',function(){
        $('.fa-pause').removeClass('active');
        $('.fa-play').addClass('active');
      });
  }

});