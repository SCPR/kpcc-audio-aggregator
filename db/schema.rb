# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140803192530) do

  create_table "audio_collections", force: true do |t|
    t.string   "title"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "audio_stories", force: true do |t|
    t.string   "category"
    t.string   "title"
    t.string   "url"
    t.string   "source"
    t.string   "program"
    t.integer  "duration",   limit: 255
    t.string   "audio_url"
    t.datetime "time_stamp"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "article_id"
  end

  create_table "collection_stories", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "audio_collection_id"
    t.integer  "audio_story_id"
  end

end
