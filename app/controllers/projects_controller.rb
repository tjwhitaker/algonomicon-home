class ProjectsController < ApplicationController
  # GET /projects
  def index
    @projects = Project.all
  end

  # GET /projects/1
  def show
    @project = Project.find(params[:id])
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # POST /projects
  def create
    @project = Project.new(params)

    if @project.save
      flash[:notice] = 'Project created.'
      redirect_to @project
    else
      render :new
    end
  end

  # GET /projects/1/edit
  def edit
    @project = Project.find(params[:id])
  end

  # PUT /projects/1
  def update
    @project = Project.find(params[:id])

    if @project.update(params)
      flash[:notice] = 'Project updated.'
      redirect_to @project
    else
      render :edit
    end
  end

  # DELETE /projects/1
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
  end
end
