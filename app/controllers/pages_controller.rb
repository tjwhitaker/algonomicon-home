class PagesController < ApplicationController
  def home 
    @title = 'Home'
    @categories = Category.all.order(:title)
    @projects = Project.all
  end
end