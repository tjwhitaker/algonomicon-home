class PagesController < ApplicationController
  def about
  end

  def contact
  end

  def home 
    @categories = Category.order(:title)
    @events = Event.order(start: :desc)
    @papers = Paper.order(created_at: :desc).page(params[:page])
  end

  def work
  end
end