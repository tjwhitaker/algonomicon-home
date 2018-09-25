class PagesController < ApplicationController
  def about
    @title = 'About'
  end

  def contact
    @title = 'Contact'
  end

  def home 
    @title = 'Home'
    @categories = Category.all.order(:title)
    @events = Event.all
    @papers = Paper.order(created_at: :desc).page(params[:page])
  end
end