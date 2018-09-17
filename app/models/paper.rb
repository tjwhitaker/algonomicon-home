class Paper < ApplicationRecord
  belongs_to :category, optional: true
end