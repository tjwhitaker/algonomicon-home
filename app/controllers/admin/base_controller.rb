class Admin::BaseController < ApplicationController
  before_action :require_login
  layout 'admin'

  private

  def not_authenticated
    redirect_to login_path, notice: "Not authenticated."
  end

end