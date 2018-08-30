class PagesController < ApplicationController
  def home 
    @title = 'Home'
    @articles = Article.all.order(created_at: :desc)
    @categories = Category.all.order(:title)
    @events = Event.all
  end
end