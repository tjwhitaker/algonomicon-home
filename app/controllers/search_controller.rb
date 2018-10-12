class SearchController < ApplicationController
  def results 
    @results = Paper.search(params[:query])
  end
end