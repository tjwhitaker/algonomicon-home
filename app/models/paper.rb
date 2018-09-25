class Paper < ApplicationRecord
  belongs_to :category, optional: true
  paginates_per 2
end