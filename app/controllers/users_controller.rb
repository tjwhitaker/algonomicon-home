class UsersController < ApplicationController
  # GET /users
  def index
    @users = User.all
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      flash[:notice] = 'Welcome!'
      redirect_to :root
    else
      render :new
    end
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # PUT /users/1
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      flash[:notice] = 'User updated.'
      redirect_to @user
    else
      render :edit
    end
  end

  # DELETE /users/1
  def destroy
    @user = user.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end
