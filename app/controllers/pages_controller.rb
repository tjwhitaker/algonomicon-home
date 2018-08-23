class PagesController < ApplicationController
  def home 
    @title = 'Home'
    @articles = Article.all.order(:created_at)
    @categories = Category.all.order(:title)
    @events = Event.all
  end
end