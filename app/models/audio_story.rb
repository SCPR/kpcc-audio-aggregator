class AudioStory < ActiveRecord::Base

  has_many :collection_stories
  has_many :audio_collections, :through => :collection_stories
  accepts_nested_attributes_for :audio_collections
  accepts_nested_attributes_for :collection_stories
end
