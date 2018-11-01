class PapersController < ApplicationController
  # GET /papers
  def index
    @papers = Paper.order(created_at: :desc).page(params[:page])
  end

  # GET /papers/1
  def show
    @paper = Paper.friendly.find(params[:id])
  end
end