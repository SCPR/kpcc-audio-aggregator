json.array!(@audio_stories) do |audio_story|
  json.extract! audio_story, :id, :category, :title, :url, :source, :program, :duration, :audio_url, :time_stamp
  json.url audio_story_url(audio_story, format: :json)
end
