// for more details see: http://emberjs.com/guides/models/defining-models/

KpccAudioAggregator.AudioCollection = DS.Model.extend({
  title: DS.attr('string'),
  status: DS.attr('string'),
  updated_at: DS.attr('date'),
  audio_stories: DS.hasMany('AudioStory', { embedded: 'always', async: true } ),
  totalDuration: function() {
    var audioStories = this.get("audio_stories");
    var ret = 0;
    audioStories.forEach(function(audioStory){
        console.log(audioStory.get("title"));
        console.log(audioStory.get("duration"));
        ret += audioStory.get("duration");
    });
    console.log(ret);
    return ret;
  }.property("audio_stories.@each.duration")
});


KpccAudioAggregator.AudioCollectionSerializer = DS.ActiveModelSerializer.extend({ // or DS.RESTSerializer
    serializeHasMany: function(record, json, relationship) {
        console.log("serialize!");
        var key = relationship.key,
            hasManyRecords = Ember.get(record, key);
         
         console.log(key);
        // Embed hasMany relationship if records exist
        if (hasManyRecords && relationship.options.embedded == 'always') {
            json[key] = [];
            hasManyRecords.forEach(function(item, index){
                json[key].push(item.serialize());
            });
        }
        // Fallback to default serialization behavior
        else {
            return this._super(record, json, relationship);
        }
    }
});