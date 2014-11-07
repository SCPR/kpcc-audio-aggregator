class Api::V1::AudioStoriesController < ApplicationController
  respond_to :json

  def index
    respond_with AudioStory.all
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def audio_story_params
    params.require(:audio_story).permit(:category, :title, :url, :source, :program, :duration, :audio_url, :time_stamp)
  end
end