class Admin::UsersController < ApplicationController
  layout 'admin'
  
  # GET /admin/users
  def index
    @users = User.all
  end

  # GET /admin/users/1
  def show
    @user = User.find(params[:id])
  end

  # GET /admin/users/new
  def new
    @user = User.new
  end

  # POST /admin/users
  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to :root_path, notice: 'User created.'
    else
      render :new
    end
  end

  # GET /admin/users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # PUT /admin/users/1
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      redirect_to @user, notice: 'User updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/users/1
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    redirect_to :index, notice: 'User destroyed.'
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end
