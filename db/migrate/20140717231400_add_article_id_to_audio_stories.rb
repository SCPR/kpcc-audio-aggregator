class AddArticleIdToAudioStories < ActiveRecord::Migration
  def change
    add_column :audio_stories, :article_id, :string
  end
end
