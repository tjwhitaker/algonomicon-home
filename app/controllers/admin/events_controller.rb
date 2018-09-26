class Admin::EventsController < Admin::BaseController
  # GET /admin/events
  def index
    @events = Event.all
  end

  # GET /admin/events/1
  def show
    @event = Event.find(params[:id])
  end

  # GET /admin/events/new
  def new
    @event = Event.new
  end 

  # POST /admin/events
  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to :admin_events, notice: 'Event created.'
    else
      render :new
    end
  end

  # GET /admin/events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  # PUT /admin/events/1
  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      redirect_to :admin_events, notice: 'Event updated.'
    else
      render :edit
    end
  end

  # DELETE /admin/events/1
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    redirect_to :admin_events, notice: 'Event destroyed.'
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :link, :description, :start, :end)
  end
end