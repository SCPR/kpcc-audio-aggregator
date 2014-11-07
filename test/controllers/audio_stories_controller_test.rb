require 'test_helper'

class AudioStoriesControllerTest < ActionController::TestCase
  setup do
    @audio_story = audio_stories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:audio_stories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create audio_story" do
    assert_difference('AudioStory.count') do
      post :create, audio_story: { audio_url: @audio_story.audio_url, category: @audio_story.category, duration: @audio_story.duration, program: @audio_story.program, source: @audio_story.source, time_stamp: @audio_story.time_stamp, title: @audio_story.title, url: @audio_story.url }
    end

    assert_redirected_to audio_story_path(assigns(:audio_story))
  end

  test "should show audio_story" do
    get :show, id: @audio_story
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @audio_story
    assert_response :success
  end

  test "should update audio_story" do
    patch :update, id: @audio_story, audio_story: { audio_url: @audio_story.audio_url, category: @audio_story.category, duration: @audio_story.duration, program: @audio_story.program, source: @audio_story.source, time_stamp: @audio_story.time_stamp, title: @audio_story.title, url: @audio_story.url }
    assert_redirected_to audio_story_path(assigns(:audio_story))
  end

  test "should destroy audio_story" do
    assert_difference('AudioStory.count', -1) do
      delete :destroy, id: @audio_story
    end

    assert_redirected_to audio_stories_path
  end
end
