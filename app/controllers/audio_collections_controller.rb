class AudioCollectionsController < ApplicationController
  before_action :set_audio_collection, only: [:show, :edit, :update, :destroy]

  # GET /audio_collections
  # GET /audio_collections.json
  def index
    @audio_collections = AudioCollection.all
  end

  # GET /audio_collections/1
  # GET /audio_collections/1.json
  def show
  end

  # GET /audio_collections/new
  def new
    @audio_collection = AudioCollection.new
  end

  # GET /audio_collections/1/edit
  def edit
  end

  # POST /audio_collections
  # POST /audio_collections.json
  def create
    @audio_collection = AudioCollection.new(audio_collection_params)

    respond_to do |format|
      if @audio_collection.save
        format.html { redirect_to @audio_collection, notice: 'Audio collection was successfully created.' }
        format.json { render :show, status: :created, location: @audio_collection }
      else
        format.html { render :new }
        format.json { render json: @audio_collection.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /audio_collections/1
  # PATCH/PUT /audio_collections/1.json
  def update
    respond_to do |format|
      if @audio_collection.update(audio_collection_params)
        format.html { redirect_to @audio_collection, notice: 'Audio collection was successfully updated.' }
        format.json { render :show, status: :ok, location: @audio_collection }
      else
        format.html { render :edit }
        format.json { render json: @audio_collection.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /audio_collections/1
  # DELETE /audio_collections/1.json
  def destroy
    @audio_collection.destroy
    respond_to do |format|
      format.html { redirect_to audio_collections_url, notice: 'Audio collection was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audio_collection
      @audio_collection = AudioCollection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def audio_collection_params
      params.require(:audio_collection).permit(:title, :status, :updated_at)
    end
end
