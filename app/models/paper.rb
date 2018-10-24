class Paper < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  belongs_to :category, optional: true
  paginates_per 5
  searchkick
end