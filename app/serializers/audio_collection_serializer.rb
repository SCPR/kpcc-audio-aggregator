class AudioCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :status, :updated_at
end
