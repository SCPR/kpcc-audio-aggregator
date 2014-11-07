class AudioStoriesController < ApplicationController
  before_action :set_audio_story, only: [:show, :edit, :update, :destroy]

  # GET /audio_stories
  # GET /audio_stories.json
  def index
    @audio_stories = AudioStory.all
  end

  # GET /audio_stories/1
  # GET /audio_stories/1.json
  def show
  end

  # GET /audio_stories/new
  def new
    @audio_story = AudioStory.new
  end

  # GET /audio_stories/1/edit
  def edit
  end

  # POST /audio_stories
  # POST /audio_stories.json
  def create
    @audio_story = AudioStory.new(audio_story_params)

    respond_to do |format|
      if @audio_story.save
        format.html { redirect_to @audio_story, notice: 'Audio story was successfully created.' }
        format.json { render :show, status: :created, location: @audio_story }
      else
        format.html { render :new }
        format.json { render json: @audio_story.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /audio_stories/1
  # PATCH/PUT /audio_stories/1.json
  def update
    respond_to do |format|
      if @audio_story.update(audio_story_params)
        format.html { redirect_to @audio_story, notice: 'Audio story was successfully updated.' }
        format.json { render :show, status: :ok, location: @audio_story }
      else
        format.html { render :edit }
        format.json { render json: @audio_story.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /audio_stories/1
  # DELETE /audio_stories/1.json
  def destroy
    @audio_story.destroy
    respond_to do |format|
      format.html { redirect_to audio_stories_url, notice: 'Audio story was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audio_story
      @audio_story = AudioStory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def audio_story_params
      params.require(:audio_story).permit(:category, :title, :url, :source, :program, :duration, :audio_url, :time_stamp)
    end
end
