json.array!(@audio_collections) do |audio_collection|
  json.extract! audio_collection, :id, :title, :status, :updated_at
  json.url audio_collection_url(audio_collection, format: :json)
end
