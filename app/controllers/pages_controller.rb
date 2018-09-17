class PagesController < ApplicationController
  def about
    @title = 'About'
  end

  def contact
    @title = 'Contact'
  end

  def home 
    @title = 'Home'
    @articles = Article.all.order(created_at: :desc)
    @categories = Category.all.order(:title)
    @events = Event.all
    @papers = Paper.all.order(created_at: :desc)
  end

  def work
  end
end