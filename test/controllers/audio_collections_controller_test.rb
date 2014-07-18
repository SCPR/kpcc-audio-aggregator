require 'test_helper'

class AudioCollectionsControllerTest < ActionController::TestCase
  setup do
    @audio_collection = audio_collections(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:audio_collections)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create audio_collection" do
    assert_difference('AudioCollection.count') do
      post :create, audio_collection: { status: @audio_collection.status, title: @audio_collection.title }
    end

    assert_redirected_to audio_collection_path(assigns(:audio_collection))
  end

  test "should show audio_collection" do
    get :show, id: @audio_collection
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @audio_collection
    assert_response :success
  end

  test "should update audio_collection" do
    patch :update, id: @audio_collection, audio_collection: { status: @audio_collection.status, title: @audio_collection.title }
    assert_redirected_to audio_collection_path(assigns(:audio_collection))
  end

  test "should destroy audio_collection" do
    assert_difference('AudioCollection.count', -1) do
      delete :destroy, id: @audio_collection
    end

    assert_redirected_to audio_collections_path
  end
end
