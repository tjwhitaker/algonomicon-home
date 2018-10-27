class Paper < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  paginates_per 5
  searchkick
end