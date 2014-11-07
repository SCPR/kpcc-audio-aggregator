class CreateAudioStories < ActiveRecord::Migration
  def change
    create_table :audio_stories do |t|
      t.string :category
      t.string :title
      t.string :url
      t.string :source
      t.string :program
      t.string :duration
      t.string :audio_url
      t.timestamp :time_stamp

      t.timestamps
    end
  end
end
