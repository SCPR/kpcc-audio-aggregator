class Api::V1::AudioCollectionsController < ApplicationController
  respond_to :json

  def index
    respond_with AudioCollection.all
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def audio_collection_params
    params.require(:audio_collection).permit(:title, :status, :updated_at, :audio_stories)
  end
end