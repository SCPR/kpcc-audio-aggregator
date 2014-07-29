class AudioCollectionSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :status, :updated_at
  has_many :audio_stories
end
