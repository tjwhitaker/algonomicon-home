class Event < ApplicationRecord
  def schedule
    self.start.strftime("%b %d") + ' - ' + self.end.strftime("%b %d")
  end
end