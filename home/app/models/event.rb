class Event < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  def schedule
    self.start.strftime("%b %d") + ' - ' + self.end.strftime("%b %d")
  end
end