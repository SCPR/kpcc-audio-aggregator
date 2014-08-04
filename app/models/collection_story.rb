class CollectionStory < ActiveRecord::Base
  belongs_to :audio_story
  belongs_to :audio_collection
  accepts_nested_attributes_for :audio_story
  accepts_nested_attributes_for :audio_collection
end
