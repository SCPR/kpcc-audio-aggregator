class AddFieldsToCollectionStories < ActiveRecord::Migration
  def change
    add_column :collection_stories, :audio_collection_id, :integer
    add_column :collection_stories, :audio_story_id, :integer
  end
end
