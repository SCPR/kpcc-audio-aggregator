class RemoveColumnsFromAudioStories < ActiveRecord::Migration
  def change
    remove_column :audio_stories, :audio_collection_id
  end
end
