class Api::V1::AudioCollectionsController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token, :only => [:create, :update]
  before_action :set_audio_collection, only: [:update, :show]

  # GET /api/v1/audio_collections
  # GET /api/v1/audio_collections.json
  def index
    respond_to do |format|
      format.html { render text: AudioCollection.all.to_json }
      format.json { render json: AudioCollection.all }
    end
  end

  # GET /api/v1/audio_collections/1.json
  def show
    respond_with @audio_collection
    #respond_with AudioCollection.find(params[:id])
  end

  # POST /api/v1/audio_collections
  # POST /api/v1/audio_collections.json
  def create
    respond_with AudioCollection.create(audio_collection_params)
  end

  # PATCH/PUT /api/v1/audio_collections/1
  # PATCH/PUT /api/v1/audio_collections/1.json
  def update
    respond_to do |format|
      if @audio_collection.update(audio_collection_params)
        format.html { redirect_to @audio_collection, notice: 'Audio collection was successfully updated.' }
        format.json { render json: @audio_collection, status: :ok }
      else
        format.html { render text: @audio_collection.errors.to_json }
        format.json { render json: @audio_collection.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
    def set_audio_collection
      @audio_collection = AudioCollection.find(params[:id])
    end

  # Never trust parameters from the scary internet, only allow the white list through.
  def audio_collection_params
    params[:audio_collection][:audio_stories] ||= [] if params[:audio_collection].has_key?(:audio_stories)
    params.require(:audio_collection).permit(:title, :status, :updated_at, :audio_story_ids, :audio_stories, audio_story_ids: [], audio_stories: [])
  end
end