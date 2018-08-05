class SessionsController < ApplicationController
  # GET /login
  def new
    @user = User.new
  end

  # POST /login
  def create
    if @user = login(params[:email], params[:password])
      flash[:notice] = 'Login successful.'
      redirect_back_or_to :root_path
    else
      flash[:notice] = 'Login failed.'
      render :new
    end
  end

  # DELETE /logout
  def destroy
    logout
    flash[:notice] = 'Logged out.'
    redirect_to :users
  end
end
