class PagesController < ApplicationController
  def about
  end

  def contact
  end

  def home 
    @categories = Category.all.order(:title)
    @events = Event.all
    @papers = Paper.order(created_at: :desc).page(params[:page])
  end
end