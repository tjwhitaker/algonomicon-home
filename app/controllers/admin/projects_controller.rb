class Admin::ProjectsController < Admin::BaseController
  # GET /admin/projects
  def index
    @projects = Project.all
  end

  # GET /admin/projects/1
  def show
    @project = Project.find(params[:id])
  end

  # GET /admin/projects/new
  def new
    @project = Project.new
  end

  # POST /admin/projects
  def create
    @project = Project.new(params)

    if @project.save
      redirect_to @project, notice: 'Project created.'
    else
      render :new
    end
  end

  # GET /admin/projects/1/edit
  def edit
    @project = Project.find(params[:id])
  end

  # PUT /admin/projects/1
  def update
    @project = Project.find(params[:id])

    if @project.update(params)
      redirect_to @project, notice: 'Project updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/projects/1
  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    redirect_to :index, notice: 'Project destroyed.'
  end
end
