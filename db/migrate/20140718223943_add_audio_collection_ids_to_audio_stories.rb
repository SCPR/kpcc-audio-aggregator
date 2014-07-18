class AddAudioCollectionIdsToAudioStories < ActiveRecord::Migration
  def change
    add_column :audio_stories, :audio_collection_id, :integer
  end
end
