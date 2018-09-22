class Admin::PapersController < Admin::BaseController
  # GET /admin/papers
  def index
    @papers = Paper.all
  end

  # GET /admin/papers/1
  def show
    @paper = Paper.find(params[:id])
  end

  # GET /admin/papers/new
  def new
    @paper = Paper.new
  end

  # POST /admin/papers
  def create
    @paper = Paper.new(paper_params)

    if @paper.save
      redirect_to @paper, notice: 'Paper created.'
    else
      render :new
    end
  end

  # GET /admin/papers/1/edit
  def edit
    @paper = Paper.find(params[:id])
  end

  # PUT /admin/papers/1
  def update
    @paper = Paper.find(params[:id])

    if @paper.update(paper_params)
      redirect_to @paper, notice: 'Paper updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/papers/1
  def destroy
    @paper = Paper.find(params[:id])
    @paper.destroy

    redirect_to :admin_papers, notice: 'Paper destroyed.'
  end

  private

  def paper_params
    params.require(:paper).permit(:title, :publish_date, :category_id, :content, :source, :authors, :abstract)
  end
end