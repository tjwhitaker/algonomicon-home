Rails.application.routes.draw do
  root 'pages#home'

  resources :projects
  resources :users
  
  resource :sessions, only: [:new, :create, :destroy]
end
