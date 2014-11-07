class CreateAudioCollections < ActiveRecord::Migration
  def change
    create_table :audio_collections do |t|
      t.string :title
      t.string :status

      t.timestamps
    end
  end
end
