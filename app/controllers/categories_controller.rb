class CategoriesController < ApplicationController
  # GET /categories
  def index
    @categories = Category.all
  end

  # GET /categories/1 
  def show
    @category = Category.find(params[:id])
    @categories = Category.all.order(:title)
    @papers = @category.papers.order(created_at: :desc).page(params[:page])

    # For feed get list of statuses from algonomicon.io/api/v1/timelines/public
    uri = URI('https://algonomicon.io/api/v1/timelines/public')
    response = Net::HTTP.get(uri)
    @posts = JSON.parse(response)
  end
end