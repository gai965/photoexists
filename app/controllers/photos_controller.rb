class PhotosController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_photo, only: [:show, :edit, :update, :destroy]
  
  def index
    @allphoto = Photo.all.order('created_at DESC')
    @photos   = @allphoto.page(params[:page]).per(5)
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      redirect_to root_path
    else
      redirect_to action: :new
    end
  end

  def show
  end

  def edit
    redirect_to action: :index unless current_user.id == @photo.user_id
  end

  def update
    @photo.update(photo_params)
    if @photo.save
      redirect_to photo_path(params[:id])
    else
      redirect_to action: :edit
    end
  end

  def destroy
    redirect_to action: :show unless current_user.id == @photo.user_id
    @photo.destroy
    redirect_to root_path
  end
  
  private

  def photo_params
    params.require(:photo).permit(:image, :title, :explanation, :latitude, :longitude).merge(user_id: current_user.id)
  end

  def set_photo
    @photo = Photo.find(params[:id])
  end

end
