class AudioStorySerializer < ActiveModel::Serializer
  attributes :id, :category, :title, :url, :source, :program, :duration, :audio_url, :time_stamp, :audio_collection_id
end
