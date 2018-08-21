class PagesController < ApplicationController
  def home 
    @title = 'Home'
    @articles = Article.all
    @categories = Category.all.order(:title)
    @projects = Project.all
  end
end