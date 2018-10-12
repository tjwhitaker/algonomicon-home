class Paper < ApplicationRecord
  belongs_to :category, optional: true
  paginates_per 5
  searchkick

  def search_data
    {
      title: title,
      source: source,
      implementation: implementation,
      authors: authors,
      abstract: abstract,
      publish_date: publish_date
    }
  end
end