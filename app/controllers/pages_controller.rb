class PagesController < ApplicationController
  def about
  end

  def contact
  end

  def home 
    # For feed get list of statuses from algonomicon.io/api/v1/timelines/public
    uri = URI('https://algonomicon.io/api/v1/timelines/public')
    response = Net::HTTP.get(uri)
    @posts = JSON.parse(response)
  end

  def search
    @papers = Paper.search(params[:query], page: params[:page], per_page: 5)
  end

  def work
  end
end