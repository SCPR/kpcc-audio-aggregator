class CreateCollectionStories < ActiveRecord::Migration
  def change
    create_table :collection_stories do |t|

      t.timestamps
    end
  end
end
