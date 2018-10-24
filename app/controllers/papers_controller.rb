class PapersController < ApplicationController
  # GET /papers
  def index
    @papers = Paper.all
  end

  # GET /papers/1
  def show
    @paper = Paper.friendly.find(params[:id])
  end
end