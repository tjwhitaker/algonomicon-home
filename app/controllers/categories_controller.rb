class CategoriesController < ApplicationController
  # GET /categories
  def index
    @categories = Category.all
  end

  # GET /categories/1 
  def show
    @category = Category.find(params[:id])
    @categories = Category.all.order(:title)
    @papers = Paper.order(created_at: :desc).page(params[:page])
    @events = Event.all
  end
end