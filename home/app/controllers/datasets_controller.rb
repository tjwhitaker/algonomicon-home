class DatasetsController < ApplicationController
  # GET /datasets
  def index
    @datasets = Dataset.all
  end

  # GET /datasets/1
  def show
    @dataset = Dataset.friendly.find(params[:id])
  end
end