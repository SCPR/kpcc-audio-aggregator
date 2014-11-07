class ChangeAudioStoriesAttributes < ActiveRecord::Migration
  def change
    change_column :audio_stories, :duration, :integer
  end
end
