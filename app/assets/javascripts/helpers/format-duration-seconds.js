var formatDurationSecondsHelper = Ember.Handlebars.makeBoundHelper(
  function(seconds) {
    var sec_num = seconds;
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if (hours == 0) {
      var time  = minutes+':'+seconds;
    } else {
      var time  = hours+':'+minutes+':'+seconds;
    }
    
    return time;
});

KpccAudioAggregator.register('helper:format-duration-seconds', formatDurationSecondsHelper);