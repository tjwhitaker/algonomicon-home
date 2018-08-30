class Admin::CategoriesController < Admin::BaseController 
  # GET /admin/categories
  def index
    @categories = Category.all
  end

  # GET /admin/categories/1
  def show
    @category = Category.find(params[:id])
  end

  # GET /admin/categories/new
  def new
    @category = Category.new
  end

  # POST /admin/categories
  def create
    @category = Category.new(params)

    if @category.save
      redirect_to @category, notice: 'Category created.'
    else
      render :new
    end
  end

  # GET /admin/categories/1/edit
  def edit
    @category = Category.find(params[:id])
  end

  # PUT /admin/categories/1
  def update
    @category = Category.find(params[:id])

    if @category.update(params)
      redirect_to @category, notice: 'Category updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/categories/1
  def destroy
    @category = Category.find(params[:id])
    @category.destroy

    redirect_to :admin_categories, notice: 'Category destroyed.'
  end
end
