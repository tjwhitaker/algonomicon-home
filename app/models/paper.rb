class Paper < ApplicationRecord
  belongs_to :category, optional: true
  paginates_per 5
end