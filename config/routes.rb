Rails.application.routes.draw do
  devise_for :users
  root 'photos#index'
  resources :photos
end
